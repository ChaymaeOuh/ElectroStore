import React, { useContext, useState } from 'react'
import loginIcons from '../Assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setPassword] = useState(false)
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()
    const { fetchUserDetails } = useContext(Context)

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()

        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }





    }

    console.log("data login",data)

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
        <div className='bg-white p-5 w-full max-w-md mx-auto'>
            <div className='w-20 h-20 mx-auto'>
                <img src={loginIcons} alt='login icons'/>
            </div>

            <form className='pt-6' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label>Email : </label>
                    <div className='bg-indigo-50 p-2'>
                        <input
                            type='email' 
                            placeholder='enter email' 
                            name='email'
                            value={data.email}
                            onChange={handleOnChange}
                            className='text-black w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>

                <div>
                    <label>Password : </label>
                    <div className='bg-indigo-50 p-2 flex '>
                        <input
                            type={showPassword ? "text" : "password"} 
                            placeholder='enter password'
                            name='password'
                            value={data.password}
                            onChange={handleOnChange} 
                            className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl' onClick={()=>setPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (
                                        <FaEyeSlash/>
                                    )
                                    :
                                    (
                                        <FaEye/>
                                    )
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link to={'/forgot-password'} className='text-blue-900 block w-fit ml-auto hover:underline hover:text-blue-400'>
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <button className='text-lg bg-blue-400 text-blue-900 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:text-white hover:bg-blue-900 transition-all mx-auto block mt-4'>Login</button>
            </form>

            <p className='my-5 text-blue-400'>Don't have account ? <Link to={"/sign-up"} className='text-blue-900 hover:underline'>Sign Up</Link></p>

        </div>
      </div>
    </section>
  )
}

export default Login
