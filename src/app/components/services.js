'use client'
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons';
import { AiFillAccountBook } from "react-icons/ai";
import 'app.css'; // Import the CSS file you created
import { useState } from "react";
import { services } from "./data";
import HeadingTemp from "./headingTemp";

export default function Services() {

    
    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"SERVICES"} />
                <section className="flex justify-center items-center h-auto w-full p-10">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 w-full">
                            {services.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    
                                    <div 
                                    key={index}
                                    className="flex w-full flex-col items-center justify-center border border-white border-opacity-20 bg-gray-400 bg-opacity-5">
                                        <div className="text-white hover:text-yellow-600 flex flex-col items-center justify-center w-full hover:border-yellow-600">
                                            <Icon size={60} id={index} className={`icon${index} border border-white border-opacity-20 p-3 rounded-2xl my-5`} />
                                            <h2 className="text-base font-semibold ">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <h3 className="text-center text-sm m-4">
                                            {service.desc}
                                        </h3>
                                    </div>
                                )
                            })}
                        </div>
                </section>
            </div>
        </>
    )
}
