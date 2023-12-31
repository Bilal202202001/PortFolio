'use client'

import Link from "next/link"
import * as Unicons from '@iconscout/react-unicons';
import 'app.css';
import { useState } from "react";


export default function NavBar() {

    const [toggled, updateToogle] = useState(false)

    const navToggle = () => {
        updateToogle(!toggled)
    }


    return <>

        <nav className="flex lg:justify-evenly justify-between items-center w-full h-20 fixed bg-gray-800 bg-opacity-30 nav">
            <div className="flex justify-center items-center w-1/6 ml-2">
                <Unicons.UilCreateDashboard className="w-8 h-8 " />

                <h2 className="ml-2 font-semibold text-xl">
                    <span className="text-yellow-500">
                        Tech
                    </span>
                    Art
                </h2>
            </div>
            <div className="navGen lg:flex hidden w-4/6 flex flex-col justify-between items-center  p-2 text-sm">
                <div className="flex w-full justify-between items-center">
                <Link href='/'>HOME</Link>
                <Link href='#projects' >PROJECTS</Link>
                <Link href='#skills'>SKILLS</Link>
                <Link href='#services'>SERVICES</Link>
                <Link href='#resume'>RESUME</Link>
                </div>
                <div className="flex w-full justify-between items-center">
                <Link href='#aboutme'>ABOUT ME</Link>
                <Link href='#certification'>CERTIFICATION</Link>
                <Link href='#reviews'>REVIEWS</Link>
                <Link href='#blogs'>BLOGS</Link>
                <Link href='#contact'>CONTACT</Link>
                </div>
            </div>
            <div className="h-3 border lg:flex hidden border-white mx-5">

            </div>
            <div className="w-2/12 lg:flex hidden justify-start items-center ">
                <Unicons.UilPhone height={25} width={25} className="text-yellow-500 ml-2" />

                <span className="text-sm">
                    +92336 7500932
                </span>
            </div>
            <div className="mr-3 lg:hidden flex">
                {
                    toggled ?
                        <>
                            <div className="flex flex-col justify-end items-end bg-gray-400 w-40 mt-40">
                                <button onClick={navToggle} className="bg-opacity-30 bg-slate-950 w-full flex justify-end">
                                    <Unicons.UilTimes className="w-8 h-8 bg-opacity-30 bg-slate-950" />
                                </button>

                                <Link href='/' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">HOME</Link>
                                <Link href='#projects' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">PROJECTS</Link>
                                <Link href='#skills' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">SKILLS</Link>
                                <Link href='#services' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">SERVICES</Link>
                                <Link href='#resume' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">RESUME</Link>
                                <Link href='#aboutme' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">ABOUT ME</Link>
                                <Link href='#certification' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">CERTIFICATION</Link>
                                <Link href='#reviews' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">REVIEWS</Link>
                                <Link href='#blogs' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">BLOGS</Link>
                                <Link href='#contact' className="text-yellow-500 bg-opacity-30 bg-slate-950 w-full text-center font-bold text-sm hover:bg-opacity-100 p-2">CONTACT</Link>
                            </div>
                        </>
                        :
                        <>
                            <button onClick={navToggle}>
                                <Unicons.UilAlignJustify className="w-8 h-8 " />
                            </button>

                        </>
                }
            </div>
        </nav>

    </>
}