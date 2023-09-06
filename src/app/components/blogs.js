'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import 'app.css';
import HeadingTemp from './headingTemp';
import { blogs } from './data';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Blogs() {
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
                <HeadingTemp heading={"BLOGS"} />
                <section className="flex justify-center items-center h-auto w-full px-10">
                    <div className="grid w-full lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[40px]">
                        {blogs.map((blog, index) => {
                            const isHovered = index === hoveredIndex;
                            {/* const projectBoxStyle = {
                                backgroundImage: `url(${project.img})`,
                            }; */}

                            return (
                                <div
                                    key={index}
                                    className="relative w-full flex flex-col items-start justify-start rounded-lg border border-white border-opacity-20 bg-gray-400 bg-opacity-5 "
                                    // style={projectBoxStyle}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Image height={500} width={500} src={blog.img} className='w-full h-82 rounded-t-lg' alt='certificate' />
                                    <div className='flex flex-col w-full items-center justify-evenly p-3'>
                                       <div className='w-full text-sm'>
                                       <h2><span className='mr-4 font-semibold text-yellow-500'>Title</span> {blog.title}</h2>
                                       <h2><span className='mr-4 font-semibold text-yellow-500'>Author</span> {blog.author}</h2>
                                       <h2><span className='mr-4 font-semibold text-yellow-500'>TimeStamp</span> {blog.timeStamp}</h2>
                                       </div>
                                       <p className='text-xs my-3 border-t border-white border-opacity-20 pt-2'>{blog.body}</p>
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
