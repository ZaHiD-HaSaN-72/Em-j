import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from '../shared/Navbar';
import { useState } from 'react';



const Login = () => {
     const navigate = useNavigate();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      
      const loginHandler = (e)=>{
        e.preventDefault()
        
        const cheakValue = JSON.parse(localStorage.getItem("register_data"))
        console.log(cheakValue)

        if(cheakValue?.email === email && cheakValue?.Password === password){
          
            navigate('/home')
        }
        else if (email==="" && password===""){
            alert("Enter email or password")
        }
        else{
            alert("Account not exist")
        }

        setEmail("")
        setPassword("")
      }

    return (
        <div className='relative bg-slate-200'>
            <div className='fixed z-50 w-full '>
                <Navbar />
                
            </div>
            <div className='pt-24 min-h-screen flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl p-8  pt-4">

                    <h1 className='text-3xl text-center font-semibold'>Login</h1>

                    <div className="form-control w-full  file:">
                        <label className="label">  Email: </label>
                        <input type="text" placeholder="Enter your email" className="input input-bordered w-full   focus:outline-0 focus:border-accent" 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    </div>
                    <div className="form-control w-full mb-4 ">
                        <label className="label">  Password: </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full  focus:outline-0 focus:border-accent " 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        />
                    </div>
                    <button className="btn btn-outline btn-accent"
                    type='submit'
                    onClick={loginHandler}
                    >Login</button>

                    <span className='text-grey-800 text-sm mt-4 '>Create new account <Link to='/Register' className='hover:underline text-blue-500 font-semibold'>Sign up</Link> </span>
                </div>
            </div>

        </div>
    );
};

export default Login;