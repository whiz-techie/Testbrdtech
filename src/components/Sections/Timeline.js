import React from 'react'

const Timeline = () => {
  return (
    <div className=' pt-[30px] w-[250px]  sm:pt-[50px] sm:w-[400px]  md:w-[500px] lg:pl-[100px] lg:w-[600px] lg:pt-[60px] lg:mb-[100px]'>
            <h1 className=' font-semibold text-[30px] '>
                ROADMAP
            </h1>
        <div className=' justify-center'>
        </div>
<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-6 w-[200px] sm:w-[400px]">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg> */}
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">Released on January 13th, 2022</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-left">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    </li>
    <li class="mb-10 ms-6 w-[200px] sm:w-[400px]">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg> */}
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400 text-left">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="mb-10 ms-6 w-[200px] sm:w-[400px]">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg> */}
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400 text-left">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>


    </div>
  )
}

export default Timeline