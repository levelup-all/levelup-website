"use client";
import Image from "next/image";
import MenuIcon from "../../../../public/assets/svg/menu.svg";
import Drawer from "react-bottom-drawer";
import React, { useCallback, useState } from "react";
import Logo from "../Logo";

const TopMenus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openDrawer = useCallback(() => setIsVisible(true), []);
  const closeDrawer = useCallback(() => setIsVisible(false), []);

  const scrollToSection = (sectionId: string) => {
    if (isVisible) closeDrawer();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const MENUS = [
    { label: "Who We Are ?", id: "about" },
    { label: "Contact Us", id: "contact" },
    { label: "Frequently Asked Questions", id: "faq" },
  ];

  const menus__html = MENUS.map((each: any) => (
    <li key={each.id}>
      <span className="cursor-pointer" onClick={() => scrollToSection(each.id)}>
        {each.label}
      </span>
    </li>
  ));

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-5 font-semibold text-white">{menus__html}</ul>
      </nav>
      <button className="md:hidden ml-auto" onClick={openDrawer}>
        <Image src={MenuIcon} alt="Menu" width={30} height={30} />
      </button>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
        className="drawer !bg-themeBrighter"
      >
        <div className="flex justify-center">
          <Logo />
        </div>
        <nav className="py-10">
          <ul className="flex flex-col gap-3 font-semibold text-white text-base">
            {MENUS.map((each: any) => (
              <li key={each.id} className="p-2">
                <span
                  className="cursor-pointer"
                  onClick={() => scrollToSection(each.id)}
                >
                  {each.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default TopMenus;
