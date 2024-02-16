import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Building2 } from 'lucide-react';
import { Tally1 } from 'lucide-react';
function Header() {
  return (
    <div className='bg-white h-16 px-4 flex  justify-between  
    items-center border-1px border-bottom-width:1px w-screen  border-r shadow-sm'>
        <div className='justify-between  flex gap-0 space-x-8 `hidden md:block` items-center'>
        
            <p className='gap-0 flex hover:bg-pink-300'> <Building2/>Avesha</p>
            <Tally1 />
            <p className='hover:bg-pink-300'>Deploy Agent</p>
         </div>
        <div className='flex items-center px-2 gap-2 mr-14 '>
              <NotificationsIcon  />
               <PersonIcon />
        </div>

    </div>
  )
}

export default Header