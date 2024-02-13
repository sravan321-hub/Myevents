import React from 'react'
import classNames from 'classnames';
import { useState } from 'react';
import { Move } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from './Navigation';
import { Link, useLocation } from 'react-router-dom';

const linkClasses = 'flex item-center gap-2 font-light px-1 py-2 hover:bg-neutral-300 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const Sidebar1 = ()=> {
  const [open,setOpen] = useState(true)
  console.log(open)
  
  return (
  <div className='flex'>
  
          <div className={`flex bg-sky-100  p-3 flex-col 
           text-black h-screen  
          items-center gap-2 p-5 pt-8 ${
      open ? "w-72" : "w-20"
      } duration-300 relative`}
      >
              < Move />
              <ChevronLeft 
              className={`bg-white text-dark-purple text-3xl
               absolute -right-2 top-20 border
              border-dark-purple cursor-pointer ${
                !open && "rotate-180"
                }`}
                onClick={() => setOpen(!open)} 
                />
              
              <div className='flex-1 py-8 flex flex-col gap-1 px-2  ${!open && "hidden"}' >
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
               <SidebarLink key={item.key} item={item} />
               
                ))}
              </div>
              <div className='flex flex-col gap-1 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
                <SidebarLink key={item.key} item={item} />
                 ))}
              </div>
              
           
           </div>
           </div>
  )
}


function SidebarLink({item}) {
  const {pathname} = useLocation()
  return(

    <Link to={item.path} className={classNames(pathname == item.path ? 
    'bg-neutral-300 text-white': 'text-neutral-400',linkClasses )}>
    <span className="text-2xl text-black block gap-5 float-left flex ">{item.icon}</span>
    <span className={`text-base text-black font-medium gap-5 flex
              ${!open && "hidden"} `}>{item.label}</span>
    </Link>
  )
}
export default Sidebar1