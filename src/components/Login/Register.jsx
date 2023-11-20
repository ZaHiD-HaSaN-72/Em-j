import {Link} from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from '../shared/Navbar';

const Register = () => {
   const [modal, setmodal] = useState(false);
   const [firstName, getFirstName] = useState("");
   const [lastName, getLastName] = useState("");
   const [email, getEmail] = useState("");
   const [Password, getPassword] = useState("");
   const [alrt, setAlrt] = useState("");
   const [nameAlrt, setNameAlrt] = useState("");
   const getData = ({firstName, lastName, email, Password})

    const closeModal = () =>{
      setmodal(!modal)
    }
      //const dataExist = JSON.parse(localStorage.getItem("register_data"))
      const getHandler = (e)=>{
        e.preventDefault()
       
      if (getData?.Password.length>=5 && getData?.firstName!==""){
        localStorage.setItem("register_data", JSON.stringify(getData))
        getFirstName("")
        getLastName("")
        getEmail("")
        getPassword("")  
        setmodal(!modal)
        setAlrt("")  
      }
      else if (getData?.Password.length<5 && getData?.email!=="" && getData?.firstName!==""){
        setAlrt("Please enter the password at least 6 character")
      }
    
       if (getData?.firstName==="" && getData?.email !== ""){
        setNameAlrt("Enter First Name")
        
       }else if(getData?.firstName!==""){
        setNameAlrt("")
        
       }else{
        setAlrt("")
        setNameAlrt("")
       }
        
      }

     
      console.log(getData)
      
     
   
  return (
    <>
      <Navbar />
      <div className="pt-[5rem] bg-slate-200 h-[100vh]" >
        

          <form className=" mx-auto p-8 w-[35rem]  bg-white relative">
          
            <h1 className="py-4 px-8 text-black text-2xl border-b border-grey-lighter font-bold">Create account</h1>
                  <label className="block text-grey-darker text-sm font-bold mb-2 mt-4">First Name</label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Your first name"
                    required
                    value={firstName}
                    onChange={(e) => {
                      getFirstName(e.target.value)
                    }}

                  />
                  <p className=' text-red-600'>{nameAlrt}</p>
                  <label className="block text-grey-darker text-sm mt-4 font-bold mb-2">Last Name</label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker
                  mb-4" type="text" placeholder="Your last name"
                    required
                    value={lastName}
                    onChange={(e) => {
                      getLastName(e.target.value)
                    }}

                  />
                <label className="block text-grey-darker mt-4 text-sm font-bold mb-2">Email Address</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => {
                    getEmail(e.target.value)
                  }}

                />
                <label className="block text-grey-darker text-sm mt-4 font-bold mb-2">Password</label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" placeholder="Your secure password"
                  
                  value={Password}
                  onChange={(e) => {
                    getPassword(e.target.value)
                  }}

                />
                <p className=' text-red-600'>{alrt}</p>
                <button className=" mt-4 bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
                type='submit'
                  onClick={getHandler}

                >
                  Continue
                </button>
                {modal && (
                  <div className=' bg-slate-200 p-5 w-[15rem] rounded absolute z-50 top-[50%] left-[40%]'
                  onClick={closeModal}
                  >
                    <h1>Successfully created</h1>
                    <button className='mt-4 bg-slate-400 p-2 rounded-sm '>Ok</button>

                  </div>
                )}
               
          </form>
         
            <p className="text-grey-800 text-sm mt-4 text-center">I already have an account? <Link to="/login" className='hover:underline text-blue-500 font-semibold'>Sign in</Link></p>
          
        </div>
      
    </>
  );
};

export default Register

