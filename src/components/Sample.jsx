// import { useState } from 'react'

// const Sample = () => {
//     const [buttonText, setButtonText] = useState('First Text')
    
//     const handleClick = () => {
//         setButtonText("Second Text")
//     }

//   return (
//     <div className="flex items-center justify-center h-screen text-white bg-slate-900">
//         <button onClick={handleClick} className="p-4 text-white bg-orange-600 rounded">{buttonText}</button>
//         </div>
//   )
// }

// export default Sample


import { useState } from "react";

 const Sample = () => {
  const [showButton, setShowButton] = useState("Red");
  const [color, setColor] = useState("Red");
  const [colorArray, setColorArray] = useState(["red", "green", "blue"]);

  const handleShowButton = () => {
    setShowButton((prev) => !prev);
  };
  const handleChangeColor = () => {
    setColor("Blue");
  };

  const handleChangeColorArray = () => {
    setColorArray(["blue", "green", "red"]);
  };

  return (
    <div>
      <button className="flex p-2 bg-red-100" onClick={handleShowButton}>
        {/* {showButton ? "Afternoon" : "Morning"} */}
        {showButton && "Afternoon"}
      </button>

      <button onClick={handleChangeColorArray}>Change Color</button>

      <div className={`w-20 h-10 bg-${colorArray[0]}-500`}>xxx</div>
      <div className={`w-20 h-10 bg-${colorArray[1]}-500`}>xxx</div>
      <div className={`w-20 h-10 bg-${colorArray[2]}-500`}>xxx</div>
    </div>
  );
};

export default Sample