import { GiCrossMark } from "../icons/Icons";

const Cards = ({employeeState, deleteEmployee}) => {

  return (
      <>
          {employeeState.map((employee, index) => {
            return (
              <div key={index} className='relative w-[18rem] flex gap-2 mt-2'>
                <div className="flex flex-row w-full p-6 rounded-lg shadow-lg bg-slate-300">
                  <div className="flex flex-col w-4/12 gap-1 font-bold justify-evenly">
                    <p className="text-xs">Name: </p>
                    <p className="text-xs">Work: </p>
                    <p className="text-xs">Birthday: </p>
                  </div>
                  <div className="flex flex-col w-8/12 gap-1 justify-evenly">
                    <p className="text-xs">{employee.name}</p>
                    <p className="text-xs">{employee.work}</p>
                    <p className="text-xs">{employee.birthday}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-3">
                  <button type='button' onClick={() => deleteEmployee(index)}><GiCrossMark /></button>
                </div>
              </div>
            )
          })}
      </>
  )
};

export default Cards;
