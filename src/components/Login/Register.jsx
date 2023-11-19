import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from '../shared/Navbar';

const Register = () => {
 
   const [firstName, getFirstName] = useState("");
   const [lastName, getLastName] = useState("");
   const [email, getEmail] = useState("");
   const [Password, getPassword] = useState("");
   const [saveData, getData]= useState({})

   
      //const dataExist = JSON.parse(localStorage.getItem("register_data"))
      const getHandler = (e)=>{
        e.preventDefault()
        getData({firstName, lastName, email, Password})
        getFirstName("")
        getLastName("")
        getEmail("")
        getPassword("")
        
      }
      
      if (saveData?.Password!=="" && saveData?.email!==""){
        localStorage.setItem("register_data", JSON.stringify(saveData))

      }
   
  return (
    <>
      <Navbar />
      <div className="pt-[5rem] bg-slate-200 h-[100vh]" >
        

          <form className=" mx-auto p-8 w-[50%] h-[32rem] bg-white">
          
            <h1 className="py-4 px-8 text-black text-2xl border-b border-grey-lighter font-bold">Create account</h1>
                  <label className="block text-grey-darker text-sm font-bold mb-2 mt-4">First Name</label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Your first name"
                    required
                    value={firstName}
                    onChange={(e) => {
                      getFirstName(e.target.value)
                    }}

                  />
                  <label className="block text-grey-darker text-sm font-bold mb-2">Last Name</label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Your last name"
                    required
                    value={lastName}
                    onChange={(e) => {
                      getLastName(e.target.value)
                    }}

                  />
                <label className="block text-grey-darker text-sm font-bold mb-2">Email Address</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => {
                    getEmail(e.target.value)
                  }}

                />
                <label className="block text-grey-darker text-sm font-bold mb-2">Password</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" placeholder="Your secure password"
                  required
                  value={Password}
                  onChange={(e) => {
                    getPassword(e.target.value)
                  }}

                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
                <button className=" mt-4 bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
                type='submit'
                  onClick={getHandler}

                >
                  Continue
                </button>
          </form>
            <p className="text-grey-800 text-sm mt-4 text-center">I already have an account? <Link to="/login" className='hover:underline text-blue-500 font-semibold'>Sign in</Link></p>
          
        </div>
      
    </>
  );
};

export default Register

