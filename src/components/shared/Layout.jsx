
import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar1 from './Sidebar1'
import Header from './Header'
export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar1 />
        <div className='flex-1'>
            <Header />
         <div className='p-4'>{<Outlet />}</div>
         
         </div>
    </div>
  )
}
