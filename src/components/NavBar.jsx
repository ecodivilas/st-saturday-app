import { GiHamburgerMenu } from "../icons/Icons";

const NavBar = () => {
  return (
    <>
      <div className="text-lg text-white h-[4rem] bg-[#28371A] w-full flex justify-between p-4 items-center">
        <span className="text-sm">ST Saturday App</span>
        <GiHamburgerMenu />
      </div>
    </>
  );
};

export default NavBar;
