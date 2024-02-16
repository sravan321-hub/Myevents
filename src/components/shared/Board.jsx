import { Info } from 'lucide-react';
import { Columns3 } from 'lucide-react';
import {TransactionsTable} from './Table'
function Board() {
  return (
    <div className=' relative flex border-r shadow-m border-1px border-bottom-width:1px gap-10 justify-between bg-white h-screen w-screen'>
	
        <div className='absolute mr-0 w-30 l-2 h-10 top-5 bg-white flex  font-black text-nowrap'>
			<h1>Deploy Agents</h1>
		</div>
        <div className='fixed top-18 right-0 left-85 bg-green-500 h-8 w-30  text-center  
         text-nowrap flex'><Info className='w-9 hover:bg-white text-center'></Info>
			How To Deploy Agent
		</div>
    <div className='fixed top-40 right-1 left-85 bg-white h-8 w-30  text-center  
         text-nowrap flex'><Columns3 className='w-9 hover:bg-white text-center'></Columns3>
			Columns
		</div>
        
       
		<div className="static mb-3 xl:w-96 ">
          <div className="absolute  flex w-60 h-6  flex-unwrap items-stretch
            top-20 left-3 bg-white  ">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

                  {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>
      <div className='absolute bottom-14 w-screen 
        flex'>
        <TransactionsTable />
      </div>
      


    </div>
  )
}

export default Board