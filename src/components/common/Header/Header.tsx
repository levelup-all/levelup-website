import Logo from "../Logo";
import TopMenus from "./TopMenus";

const Header = () => {
  return (
    <header className="h-16 top-0 z-10 w-full min-h-[70px] bg-themeBrighter">
      <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto px-2.5 min-h-full flex items-center justify-between">
        <Logo />
        <TopMenus />
      </div>
    </header>
  );
};

export default Header;
