import React from "react";
import { BsLinkedin } from "../Icons/icons";
import { BsGithub } from "../Icons/icons";
import { LiaViber } from "../Icons/icons";
// const [name, value] = useState("")

const Cards = () => {
  return (
    // <div className="h-screen max-w-full bg-white flex flex-col justify-center items-center ">
    //   <div className="h-2/6 w-3/6 mx-auto bg-yellow-100 flex flex-row justify-start pl-10 shadow-lg">
    //     <div className="flex flex-col justify-evenly mx-16">
    //       <p>CARDO DALISAY </p>
    //       <p>PROGRAMMER</p>
    //     </div>

    //     <p>JANUARY 1, 2000 </p>
    //   </div>
    // </div>

    <div className="w-screen bg-white flex flex-row justify-center p-2">
      <div className="bg-orange-300 w-[100rem] mx-8 flex flex-row shadow-lg px-2">
        <div className="flex flex-col justify-evenly font-bold py-6">
          <p className="text-xs">Name: </p>
          <p className="text-xs">Work: </p>
          <p className="text-xs">Birthday: </p>
        </div>

        <div className="flex flex-col justify-evenly mx-10 py-6">
          <p className="text-xs">CARDO DALISAY </p>
          <p className="text-xs">PROGRAMMER</p>
          <p className="text-xs">JANUARY 1, 2000 </p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly p-2">
        <p>
          <BsLinkedin />
        </p>
        <p>
          <BsGithub />
        </p>
        <p>
          <LiaViber />
        </p>
      </div>
    </div>

    // <div className="h-screen max-w-full bg-white flex flex-col justify-center items-center ">
    //   <div className="h-2/6 w-3/6 mx-auto bg-yellow-100 flex flex-row justify-start pl-10 shadow-lg">
    //     <div className="flex flex-col justify-evenly font-bold">
    //       <h1>Name: </h1>
    //       <h1>Work: </h1>
    //       <h1>Birthday: </h1>
    //     </div>

    //     <div className="flex flex-col justify-evenly mx-16">
    //     <p>CARDO DALISAY </p>
    //     <p>PROGRAMMER</p>
    //     <p>JANUARY 1, 2000 </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cards;
