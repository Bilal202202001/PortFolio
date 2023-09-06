'use client'
import React, { useState } from 'react';
import 'app.css';
import HeadingTemp from './headingTemp';
import { certifications } from './data';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Certifications() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"CERTIFICATIONS"} />
                <section className="flex justify-center items-center h-auto w-full ">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-10 w-full">
                        {certifications.map((certificate, index) => {
                            const isHovered = index === hoveredIndex;
                            {/* const projectBoxStyle = {
                                backgroundImage: `url(${project.img})`,
                            }; */}

                            return (
                                <div
                                    className="relative flex flex-col items-start justify-start  rounded-lg border border-white border-opacity-20 bg-gray-400 bg-opacity-5 "
                                    // style={projectBoxStyle}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={certificate.img} className='w-full h-60 rounded-t-lg' alt='certificate' />
                                    <div className='flex w-full items-center justify-evenly my-5'>
                                        <div className='flex flex-col text-yellow-500 text-base font-semibold'>
                                            <ul>
                                                <li>Certificate</li>
                                                <li>Technology</li>
                                                <li>Issue date</li>
                                                <li>Expiry date</li>
                                                <li>Certificate Code</li>
                                                <li>Certificate URL</li>
                                            </ul>
                                        </div>
                                        <div className='flex flex-col text-white text-base'>
                                        <ul>
                                                <li>{certificate.title}</li>
                                                <li>{certificate.technology}</li>
                                                <li>{certificate.issueData}</li>
                                                <li>{certificate.expiryDate}</li>
                                                <li>{certificate.code}</li>
                                                <li><Link href={certificate.url} className='flex'>Visit<Unicons.UilExternalLinkAlt width={20} height={20} className="ml-2 text-yellow-500"/> </Link></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
