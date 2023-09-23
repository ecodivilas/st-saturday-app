import { useCallback, useState } from 'react';
import Cards from './components/Cards'
import { FcPlus } from "./icons/Icons";


const employees = [
  {
    name: "Cardo Dalisay",
    work: "Programmer",
    birthday: "January 1, 2023"
  }
]

export default function MyApp() {
  const [employeeState, setEmployeeState] = useState(employees)

  const deleteEmployee = () => {}
  const addEmployee = useCallback(() => {
    employees.push(
      {
        name: "Cardo Dalisay",
        work: "Programmer",
        birthday: "January 1, 2023"
      }
    )
  }, [])
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Cards employees={employees} deleteEmployee={deleteEmployee} addEmployee={addEmployee} />
      <button className='mt-2' onClick={addEmployee}><FcPlus size={30} /></button>
    </div>
  )
}