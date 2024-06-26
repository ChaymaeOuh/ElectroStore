import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate  } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';


const Header = () => {

  const user = useSelector(state => state?.user?.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuDisplay,setMenuDisplay] = useState(false)

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }



  return (
    <header className='h-18 w-100% shadow-md bg-white'>
      <div className='h-full container max-w-full mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}> 
            <Logo w={210} h={80}/>
          </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border  rounded-full focus-within:shadow-sm pl-2 '>
          <input type='text' placeholder='search product here...' className='w-full outline-none '/>
          <div className='text-lg min-w-[50px] h-9 bg-blue-400 text-white flex justify-center items-center rounded-r-full cursor-pointer'>
          <FaSearch />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
          {
            user?._id && (
              <div className='text-3xl cursor-pointer  relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
              {
                user?.profilePic ? (
                <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser/>
                    )
              }
              </div>
            )
          }

            {
              menuDisplay && (
                <div className='absolute bg-indigo-200 bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                  <nav>
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                      )
                    }
                  </nav>
                </div>
              )
            }
          </div>


          

          <div className='text-3xl cursor-pointer relative'>
            <span><AiOutlineShoppingCart/></span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
          {
            user?._id  ? (
            <button onClick={handleLogout} className='px-3 py-1 rounded-full text-black bg-blue-400 hover:bg-blue-900 hover:text-white'>Logout</button>
            )
            : (
            <Link to={"/login"} className='px-3 py-1 rounded-full text-black bg-blue-400 hover:bg-blue-900 hover:text-white'>Login</Link>
             )
         }

        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
