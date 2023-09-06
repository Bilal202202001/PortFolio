'use client'
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons';
import 'app.css';
import HeadingTemp from "./headingTemp";
import { GiGymBag } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";

export default function CV() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"ABOUT ME"} />
                <div className="w-5/6 grid lg:grid-cols-2 md:grid-cols-1 ">
                    <div className="w-full p-2  flex items-center justify-center">
                        <img src="/images/profile2.jpg" alt="profile" className="w-4/5 rounded-lg " />
                    </div>
                    <div className="w-full p-2  flex flex-col items-start justify-center">
                        <h2 className="text-2xl mb-4">
                            Hi There! I'm Muhammad Bilal
                        </h2>
                        <h2 className="text-yellow-500 mb-4 font-bold text-xl">
                            Full Stack Developer
                        </h2>
                        <h3 className="mb-4">
                            Experienced web developer with a strong focus on creating user-centric and visually appealing websites. Proficient in both frontend and backend technologies, I enjoy translating ideas into functional, high-performance digital solutions. Passionate about clean code and staying updated with the latest web development trends
                        </h3>
                        <div className="w-full flex ">
                            <div className="">
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Birthday
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Phone
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Email:
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    From
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Language
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Remote
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Onsite
                                </h3>
                                <h3 className="mb-4 w-20 text-yellow-500 font-bold">
                                    Freelance
                                </h3>
                            </div>
                            <div className="">
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                                <h3 className="mb-4 w-10 text-center">
                                    :
                                </h3>
                            </div>
                            <div className="">
                                <h3 className="mb-4">
                                    12-8-1999
                                </h3>
                                <h3 className="mb-4">
                                    03367500932
                                </h3>
                                <h3 className="mb-4">
                                    muhammadBilal@gmail.com
                                </h3>
                                <h3 className="mb-4">
                                    Rawalpindi
                                </h3>
                                <h3 className="mb-4">
                                    Urdu
                                </h3>
                                <h3 className="mb-4">
                                    Available
                                </h3>
                                <h3 className="mb-4">
                                    Available
                                </h3>
                                <h3 className="mb-4">
                                    Available
                                </h3>

                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                        <button className="w-36 h-10 text-sm flex items-center justify-center bg-yellow-600 rounded-2xl m-5 text-white font-semibold hover:w-36  hover:font-bold hire transition-all ease-in-out">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
