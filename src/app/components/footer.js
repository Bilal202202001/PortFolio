'use client'
import React from 'react';
import 'app.css';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Footer() {


    return (
        <>
            <div className="flex justify-between items-center h-12 mt-10 w-full bg-white bg-opacity-5">
                <h2 className='text-sm font-lighter ml-5'>&copy;Copyright. All rights reserved</h2>
                <div className='flex mr-10'>
                    <Link href='https://github.com/' className="flex justify-between items-center mr-3 ">
                        <Unicons.UilGithub height={25} width={25} className="text-white hover:text-yellow-500" />
                    </Link>
                    <Link href='' className="mr-3  rounded-full flex items-center justify-center">
                        <Unicons.UilLinkedin height={25} width={25} className="text-white hover:text-yellow-500" />
                    </Link>
                    <Link href='' className="mr-3 rounded-full flex items-center justify-center">
                        <Unicons.UilInstagram height={25} width={25} className="text-white hover:text-yellow-500" />
                    </Link>
                    <Link href='' className="mr-3  rounded-full flex items-center justify-center">
                        <Unicons.UilFacebook height={25} width={25} className="text-white hover:text-yellow-500" />
                    </Link>
                </div>
            </div>
        </>
    );
}
