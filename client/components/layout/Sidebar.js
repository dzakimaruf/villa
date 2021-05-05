import React from 'react'
import { Link } from "react-router-dom";

import codeid from '../../assets/images/villas.png'


export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="h-screen flex flex-col w-64 bg-gray-50">
                <div className="p-4">
                    <img src={codeid} className="h-15 w-15 items-center" />
                </div>
                <ul className="p-2 space-y-2 flex-1 overflow-auto" >
                    <li>
                        <Link to="/hr/dashboard" className="flex space-x-2 items-center text-gray-600 p-2 bg-gray-200 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="" />
                            </svg>
                            <span className="text-gray-900">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hr/villas" className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="" /></svg>
                            <span>Villa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hr/user" className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="" />
                            </svg>
                            <span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hr/GalleryVilla" className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="" /></svg>
                            <span>GalleryVilla</span>
                        </Link>
                    </li>


                </ul>

                <div className="p-2 flex items-center border-t-2 border-gray-300 space-x-4">
                    <div className="relative inline-flex">
                        <span className="inline-flex bg-red-500 w-2 h-2 absolute right-0 bottom-0 rounded-full ring-2 ring-white transform translate-x-1/3 translate-y-1/3"></span>
    
                    </div>
                </div>
            </nav>

        </>
    )
}