import React, { useEffect, useRef, useState } from 'react'
// import { createUser } from '../services/UserService'

const defaultInputValues = {
      email: '',
      password: '',
      confirm_password: '',
      first_name: '',
      last_name: '',
      mobile_number: '',
      birthdate: '',
      type_id: 1
    }

    let variable = 3

const Form = ({ handleClickHide }) => {
    const [userInputs, setUserInputs] = useState(defaultInputValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    // Ref is only for input, nothing to do with states
    const email_value = useRef(null);
    const password_value = useRef(null);
    const confirm_password_value = useRef(null);
    const first_name_value = useRef(null);
    const last_name_value = useRef(null);
    const mobile_number_value = useRef(null);
    const birthdate_value = useRef(null);
    const credit_card_value = useRef(null);
 
  useEffect(() => {
    // console.log(Object.keys(formErrors).length)
    if(Object.keys(formErrors).length === 0 && isSubmit){
        // createUser(userInputs)
        // .then(res => {
        // delete userInputs.confirm_password
        //   console.log("User created successfully!", res)
        // })
        // .catch(err => {
        //   console.log("Error: ", err)
        // })
        setIsSubmit(false)
        setFormErrors({})
        setUserInputs(defaultInputValues)
        
        // 👇️ reset input field's value
        email_value.current.value = '';
        password_value.current.value = '';
        confirm_password_value.current.value = '';
        first_name_value.current.value = '';
        last_name_value.current.value = '';
        mobile_number_value.current.value = '';
        birthdate_value.current.value = '';
    }
  }, [formErrors])

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(userInputs))
      setIsSubmit(true)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setUserInputs((prev) => {
        return { ...prev, [name]: value }
    })
  }

  const validate = (formInputs) => {
    const errors = {}
    if(formInputs.email === ''){
        errors.email = "Email is required!"
    }  else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
      if (!emailRegex.test(formInputs.email)) {
          errors.email = "Invalid email Address!";
      }
    }

    if(formInputs.password === ''){
    errors.password = "Password is required!"
    }

    if(formInputs.first_name === ''){
    errors.first_name  = "First Name is required!"
    }

    if(formInputs.last_name === ''){
    errors.last_name  = "Last name is required!"
    }

    if (formInputs.mobile_number === '') {
    errors.mobile_number = "Mobile is required!";
    } else {
    // Assuming a 10-digit mobile number format
    const mobileRegex = /^[0-9]{10}$/; 
    if (!mobileRegex.test(formInputs.mobile_number)) {
        errors.mobile_number = "Invalid mobile number!";
    }
}

  if(formInputs.birthdate === ''){
    errors.birthdate  = "Mobile is required!"
  }

  if(formInputs.confirm_password === ''){
    errors.confirm_password  = "Mobile is required!"
  }
  else if (formInputs.password !== formInputs.confirm_password) {
      errors.confirm_password = "Password doesn't Match!"
    }

    if(formInputs.credit_card === ''){
      errors.credit_card  = "Credit Card is required!"
    }

  return errors
}

  return (
    <div className='absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-slate-700'>
      <form className="w-5/6 p-4 pt-6 mt-4 rounded shadow-xl bg-slate-900" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
            <input ref={email_value} onChange={handleOnChange} type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.email}</span>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input ref={password_value} onChange={handleOnChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.password}</span>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input ref={confirm_password_value} onChange={handleOnChange} type="password" name="confirm_password" id="confirm_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.confirm_password}</span>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input ref={first_name_value} onChange={handleOnChange} type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.first_name}</span>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input ref={last_name_value} onChange={handleOnChange} type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.last_name}</span>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input ref={mobile_number_value} onChange={handleOnChange} type="tel" name="mobile_number" id="mobile_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.mobile_number}</span>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number (+639123456789)</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input ref={birthdate_value} onChange={handleOnChange} type="date" name="birthdate" id="birthdate" className="block py-2.5 px-0 w-full text-sm text-white dark:text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" style={{filter: 'invert(1)'}} placeholder=" " />
              <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.birthdate}</span>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input ref={credit_card_value} onChange={handleOnChange} type="text" name="credit_card" id="credit_card" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <span className="absolute text-red-400 text-[0.65rem] font-semibold mt-1">{formErrors.credit_card}</span>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Credit Card</label>
        </div>
        </div>
        <div className="flex gap-2">
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">Create Account</button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 mt-6" onClick={handleClickHide}>Hide Form</button>
        </div>
      </form>
    </div>
  )
}

export default Form