import { useState } from 'react';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import PieChartIcon from '@mui/icons-material/PieChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar = ()=> {
  const [open,setOpen] = useState(true);
  const Menus = [
    {title: "Chart",icon:<PieChartIcon/>},
    {title: "Dashboard",icon:<DashboardIcon/>},
    {title: "Calendar",icon:<CalendarMonthIcon/>},
    {title: "Community",icon:<GroupsIcon/>},
    {title: "Quick",icon:<RocketLaunchIcon/>},
    {title: "Settings",icon:<SettingsIcon/>},
  ]
   return (
    <div className="flex ">
     <div className={`bg-dark-purple h-screen p-5 pt-8 ${
      open ? "w-72" : "w-20"
      } duration-300 relative`}
      >
      <KeyboardArrowLeftIcon
      className={`bg-white text-dark-purple text-3xl 
      square-full absolute -right-3 top-20 border
      border-dark-purple cursor-pointer ${
        !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)} 
        />
      <div className="inline-flex">
      <OpenWithIcon 
      className={`bg-amber-300 text-4xl 
      rounded cursor-pointer block float-right bl-4 mr-4 duration-500 ${
        open && "rotate-[360deg]"
      }`}
      /> 

      </div>
      <ul className='pt-2'>
        {Menus.map((menu,index) => (
          <>
            <li key={index} className='text-gray-300 text-sm flex
            items-center gap-x-4 cursor-pointer p-2 
            hover:bg-light-white rounded-md'>
              <span className="text-2xl block float-left">
              {menu.icon}
              </span>
              
              <span className={`text-base font-medium flex-1 
              ${!open && "hidden"}`}>
                {menu.title}</span>

            </li>
          </>
        ))}

      </ul>
     </div>
    </div>
     
    
    
    
    
  )
}

export default Sidebar
