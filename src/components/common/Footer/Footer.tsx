"use client";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const MENUS = [
    { label: "Home", id: "root" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" },
    { label: "FAQ", id: "faq" },
  ];
  return (
    <footer className="py-3 pt-10 bg-[#EEE]">
      <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto px-2.5 text-gray-700 text-sm font-medium flex flex-col md:flex-row md:justify-between">
        <nav className="section_1 mb-5 md:mb-0">
          <ul className="flex justify-center md:justify-start ">
            {MENUS.map((each: any) => (
              <li
                key={`${each.id}-footer`}
                className="mr-3 pr-3 border-r border-black leading-none last:border-r-0"
              >
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
        <div className="__copyright text-center">
          @2023 levelUp SportsLytics
        </div>
      </div>
    </footer>
  );
};

export default Footer;
