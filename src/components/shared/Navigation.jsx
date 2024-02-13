import OpenWithIcon from '@mui/icons-material/OpenWith';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { LayoutDashboard } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Settings } from 'lucide-react';
import { PieChart } from 'lucide-react';


 export const DASHBOARD_SIDEBAR_LINKS = [
    {
    key:'piechart',
    label:'Piechart',
    path:'/',
    icon:<PieChart/>,
    },
    {
    key:"dashboard",
    label:"Dashboard",
    path:'/products',
    icon:<LayoutDashboard />
    },
    {
    key:"calendar",
    label:"Calendar",
    path:'/dates',
    icon:<CalendarDays/>
    },
    {
    key:"community",
    label:"Community",
    path:'/communtity',
    icon:<UsersRound />
    },
    {
    key:"quick",
    label:"Quick",
    path:'/fast',
    icon:<Rocket/>
    },
    {
    key:"settings",
    label:"Settings",
    path:'/settings',
    icon:<Settings/>
    }
  ]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
    key:"avesha",
    label:"Avesha",
    path:'/avesha',
    icon: <img className='w-5' src='/avesha.jpg' />
    }
]