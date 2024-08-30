import Link from 'next/link'
import React from 'react'
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='sticky  flex bg-transparent shadow-2xl  text-black text-xl items-center justify-between'>
      <div className="text-3xl px-4">LOGO</div>
      <div className="flex justify-end ">
        <ul className='flex py-4 px-2 '>
          <li><Link className='px-3' href='/'>home</Link></li>
          <li><Link className='px-3' href='/auth/login'>
            Log In

          </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar