'use client'
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons';
import 'app.css'; // Import the CSS file you created
import { useState } from "react";

export default function Section() {

    const [hoverShow, updateHover] = useState(false)

    const handleHover = () => {
        updateHover(!hoverShow)
    }

    return (
        <section className="grid lg:grid-cols-2 md:grid-cols-1 p-10 py-20  h-auto w-full bg-[url('/images/main.jpg')] bg-cover">
            <div className="w-full flex flex-col justify-center  items-center h-5/6">
                <div className="flex flex-col justify-start items-start w-full h-4/6 hire">
                    <h2 className=" text-3xl text-yellow-500">
                        Hello, I'm
                    </h2>
                    <h2 className=" lg:text-8xl text-5xl  font-bold">
                        Muhammad
                    </h2>
                    <h2 className="lg:text-8xl text-5xl font-bold">
                        Bilal
                    </h2>
                    <h2 className=" text-4xl text-white text-opacity-70 mt-3 font-lexend xyz">
                        Full Stack Developer
                    </h2>
                    <Link href='#' onMouseEnter={handleHover} onMouseLeave={handleHover} className="w-32 h-12 text-base flex items-center justify-center bg-yellow-600 rounded-2xl m-5 text-white font-semibold hover:w-36  hover:font-bold hire transition-all ease-in-out">Hire Me
                        {hoverShow ? <Unicons.UilCheckCircle size="25" className="mx-2 text-white transition-all ease-in-out" /> : <></>}
                    </Link>
                </div>


                <div className="flex justify-start items-center w-full lg:w-4/6 border border-opacity-20 border-gray-200 h-20 mt-8 rounded-3xl bg-white bg-opacity-5">
                    <Link href='https://github.com/' className="flex justify-center items-center w-4/12 bg-slate-950 border border-opacity-20  border-gray-200 h-12 mx-7 p-2 rounded-xl">
                        <Unicons.UilGithub height={30} width={30} className="text-white text-opacity-70 hover:text-yellow-500 " />
                        <span className="text-white font-semibold">
                            GitHub
                        </span>
                    </Link>
                    <Link href='' className="mx-2 h-12 bg-slate-950 border border-opacity-20  border-gray-200 w-12 rounded-full flex items-center justify-center">
                        <Unicons.UilLinkedin height={25} width={25} className="text-white text-opacity-70 hover:text-yellow-500 customUni" />
                    </Link>
                    <Link href='' className="mx-2 h-12 bg-slate-950 border border-opacity-20  border-gray-200 w-12 rounded-full flex items-center justify-center">
                        <Unicons.UilInstagram height={25} width={25} className="text-white text-opacity-70 hover:text-yellow-500 customUni" />
                    </Link>
                    <Link href='' className="mx-2 h-12 bg-slate-950 border border-opacity-20  border-gray-200 w-12 rounded-full flex items-center justify-center">
                        <Unicons.UilFacebook height={25} width={25} className="text-white text-opacity-70 hover:text-yellow-500 customUni" />
                    </Link>
                </div>
            </div>
            <div className="w-full flex items-center justify-center shadow-lg shadow-slate-950 h-10/12">
                <img src="/images/profile.jpg" alt="profile" className="lg:w-4/6 w-5/6 h-full profile" />
            </div>
        </section>
    );
}
