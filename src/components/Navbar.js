import React, { useState } from 'react'
import '../App.css'
import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const [navbar, setNavbar] = useState(false);



    return (
        <div>

            <nav className=""  >
                <div className=' overlayNav '>
                    <div className="justify-between  lg:max-w-7xl md:items-center md:flex md:px-8   ">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <div href={'/'} className=" " >
                                    {/* <h2 className="text-2xl font-bold text-white">
                                        <BsTelephoneFill size={25} />

                                    </h2>
                                    <h2 className="text-2xl font-bold text-white mx-4">


                                        <BsWhatsapp size={25} />
                                    </h2> */}
                                    <div className='-ml-10 -mt-6'>
                                    <img width={200}  src="img/logo3.png" alt="" />
                                    </div>
                                </div>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 mr-[9px] md:mr-0  rounded-md outline-none "
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                          
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8 "
                                                viewBox="0 0 20 20"
                                                fill="white"

                                            >
                                               
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    className=' text-white'

                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-10 -mt-10"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                    className=' text-white '


                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 p-5 md:p-0">
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase  md:px-5  ">
                                        <a className=' flex md:bg-[#15423F] md:px-3 ' href='/' > Home</a>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase">
                                        <a href='/' >About</a>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase">
                                        <a href='/' >Rooms</a>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase">
                                        <a href='/' >Home</a>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase">
                                        <a href='/' >Packages</a>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700] uppercase">
                                        <a href='/' >Contacts</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar