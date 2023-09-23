import { BsGithub, BsLinkedin, GiCrossMark, LiaViber } from "../icons/Icons";

const Cards = ({employees, deleteEmployee}) => {

  return (
      <div className="relative flex flex-row p-6 px-6 mx-8 bg-orange-300 rounded-lg shadow-lg">
        <div className="flex flex-col gap-1 font-bold justify-evenly">
          <p className="text-xs">Name: </p>
          <p className="text-xs">Work: </p>
          <p className="text-xs">Birthday: </p>
        </div>

        <div className="flex flex-col gap-1 mx-10 justify-evenly">
          {employees.map((employee, index) => {
            return (
              <div key={employee}>
                <p className="text-xs">{employee.name}</p>
                <p className="text-xs">{employee.work}</p>
                <p className="text-xs">{employee.birthday}</p>
              </div>
            )
          })}
        </div>

        <div className="absolute top-2 right-3">
          <button type='button' onClick={deleteEmployee}><GiCrossMark /></button>
        </div>
      </div>
  )
};

export default Cards;
