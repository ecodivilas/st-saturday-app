import Cards from './components/Cards'
import { FcPlus } from "./icons/Icons";
import { useStore } from './data/store'

export default function MyApp() {
  // const employee = useStore(store => store.employees.find(employee => employee.index === index))
  const addEmployee = useStore(store => store.addEmployee)
  const employees = useStore(store => store.employees)
  
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <button className='mt-2' onClick={() => addEmployee()}><FcPlus size={30} /></button>
      <Cards employees={employees} />
    </div>
  )
}