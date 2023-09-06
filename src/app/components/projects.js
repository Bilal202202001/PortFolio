'use client'
import React, { useState } from 'react';
import 'app.css';
import HeadingTemp from './headingTemp';
import { projects } from './data';
import * as Unicons from '@iconscout/react-unicons';

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <div id='projects' className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"PROJECTS"} />
                <section className="flex justify-center items-center h-auto w-full ">
                    <div className="grid w-full p-3 lg:grid-cols-3 md:grid-cols-1  gap-5">
                        {projects.map((project, index) => {
                            const isHovered = index === hoveredIndex;
                            const projectBoxStyle = {
                                backgroundImage: `url(${project.img})`,
                            };

                            return (
                                <div
                                    key={index}
                                    className="relative w-full h-60 flex flex-col items-start justify-start bg-cover "
                                    style={projectBoxStyle}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className='project px-3 m-2 w-40 h-6 bg-yellow-600 '>
                                        <h2 className='text-base w-40'>{project.title}</h2>
                                    </div>
                                    {isHovered && (
                                        <div className='absolute bg-black bg-opacity-50 flex flex-col justify-center h-full w-full p-10'>
                                            <div className=' w-full px-6 flex justify-between h-16'>
                                                <div className='h-12 w-12 border-t border-l'></div>
                                                <div className='h-12 w-12 border-t border-r'></div>
                                            </div>
                                            <div className='w-full flex items-center justify-center'><Unicons.UilGithub height={40} width={40} className="text-white hover:text-yellow-600" /></div>
                                            <div className=' w-full px-6 flex justify-between  h-16'>
                                                <div className='h-12 w-12 border-b border-l'></div>
                                                <div className='h-12 w-12 border-b border-r'></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
