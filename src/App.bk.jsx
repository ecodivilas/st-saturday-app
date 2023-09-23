import { useState } from 'react';
import Cards from './components/Cards'
import { FcPlus } from "./icons/Icons";
import { employees } from './data/Employee'


export default function MyApp() {
  const [employeeState, setEmployeeState] = useState(employees)

  const deleteEmployee = (index) => { 
    const updatedEmployees = [...employeeState];
    updatedEmployees.splice(index, 1);
    setEmployeeState(updatedEmployees);
  }
  
  const addEmployee = () => {
    const newEmployee = {
      name: "Cardo Dalisay Addional",
      work: "Programmer Addional",
      birthday: "January 1, 2023"
    }
    setEmployeeState(prevEmployeeState => {
      return [...prevEmployeeState, newEmployee]
    })
  }
  
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <button className='mt-2' onClick={addEmployee}><FcPlus size={30} /></button>
      <Cards employeeState={employeeState} deleteEmployee={deleteEmployee} addEmployee={addEmployee} />
    </div>
  )
}