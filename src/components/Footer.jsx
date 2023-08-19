import { BiLogoFacebook, BsTwitter, AiFillInstagram } from "../icons/Icons";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="bg-[#293718] text-center h-20 w-full justify-center items-center flex text-white">
        Copyright ST-Saturday App © 2023
        <div className="flex p-3 bg-transparent">
          <div className="pr-1">
            <BiLogoFacebook />
          </div>
          <div className="pr-1">
            <BsTwitter />
          </div>
          <div className="pr-1">
            <AiFillInstagram />
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Footer;
