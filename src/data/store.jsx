import { create } from 'zustand'
import { employeesData, fakeFormEmployees } from './Employee'


const store = (set) => ({
	employees: employeesData,
	name: 'There',
	addEmployee: () =>
		set((store) => ({ employees: [...store.employees, fakeFormEmployees] })),
	deleteEmployee: (index) =>
		set((store) => ({ employees: store.employees.splice(index, 1) })),	
})

export const useStore = create(store)