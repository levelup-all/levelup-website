import Image from "next/image";
import React from "react";
import LevelUpLogo from "../../../public/assets/images/TransparentLogo.png";
import Link from "next/link";
import { anekBangla } from "@/app/fonts";

type Props = {
  showLabel?: boolean;
  size?: number;
};

const Logo: React.FC<Props> = ({ showLabel = true, size = 55 }) => {
  const commonClasses = `font-semibold px-2 py-1 text-base block w-full text-center ${anekBangla.className} tracking-[.5px] uppercase leading-none`;
  return (
    <Link href={"/"} className="no-underline cursor-pointer">
      <div className="flex items-center">
        <Image
          src={LevelUpLogo}
          width={size}
          height={size}
          alt="LevelUp"
          loading="lazy"
        />
        <span className={` text-white bg-themeBrighter ${commonClasses} py-1`}>
          Level Up
        </span>
        <span className={`bg-white text-black ${commonClasses}`}>
          SportsLytics
        </span>
      </div>
    </Link>
  );
};

export default Logo;
