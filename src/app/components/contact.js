'use client'
import Image from 'next/image'
import React from 'react';
import 'app.css';
import HeadingTemp from './headingTemp';
import * as Unicons from '@iconscout/react-unicons';

export default function Contact() {


    return (
        <>
            <div id='contact' className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"CONTACT"} />
                <div className="relative grid lg:grid-cols-2 md:grid-cols-1 p-5 w-full">
                    <div className='w-full rounded-lg flex justify-center'>
                        <Image height={500} width={500} src='/images/contact.jpg' alt='contact' className='lg:w-3/5 w-4/5 h-76 rounded-lg' />
                    </div>
                    <form className='flex flex-col w-full'>
                        <div className='flex w-full'>
                            <input className='w-2/5 rounded-lg h-10 mt-3 bg-white bg-opacity-5 pl-2 mr-10 text-white placeholder:text-white focus:outline-none focus:border-transparent focus:ring-0' type='text' name='name' placeholder='Name' />
                            <input className='w-3/5 rounded-lg h-10 mt-3 bg-white bg-opacity-5 pl-2 text-white placeholder:text-white focus:outline-none focus:border-transparent focus:ring-0' type='email' name='email' placeholder='Email' />
                        </div>
                        <input className='w-full rounded-lg h-10 mt-3 bg-white bg-opacity-5 pl-2 text-white placeholder:text-white focus:outline-none focus:border-transparent focus:ring-0' type='text' name='subject' placeholder='Subject' />
                        <input className='w-full rounded-lg h-10 mt-3 bg-white bg-opacity-5 pl-2 text-white placeholder:text-white focus:outline-none focus:border-transparent focus:ring-0' type='text' name='comment' placeholder='Comment' />
                        <textarea className='w-full rounded-lg h-36 mt-3 bg-white bg-opacity-5 pl-2 text-white placeholder:text-white focus:outline-none focus:border-transparent focus:ring-0' type='text' name='message' placeholder='Message' />
                        <div className='w-full flex justify-end'>
                            <button type='submit' className='flex justify-center items-center h-8 w-24 rounded-lg bg-yellow-600 m-3'><Unicons.UilMessage /></button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
