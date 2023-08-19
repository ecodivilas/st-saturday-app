import React from 'react'

const UserFile = () => {
    return (
        <div className='bg-[#28371A] h-screen w-full'>
            <h1 className='flex items-center justify-center p-5 font-sans text-white font-bold text-[2rem]'>User Profile</h1>
            <div className='text-white'>
                <label htmlFor="">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className='' />
            </div>
        </div>
    )
}

export default UserFile