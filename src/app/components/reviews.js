'use client'
import React from 'react';
import 'app.css';
import HeadingTemp from './headingTemp';
import { reviews } from './data';
import * as Unicons from '@iconscout/react-unicons';

export default function Reviews() {
    

    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"REVIEWS"} />
                <section className="flex justify-center items-center h-auto w-full px-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px]">
                        {reviews.map((review, index) => {
                            return (
                                <div className="relative flex flex-col items-start justify-start  rounded-lg border border-white border-opacity-20 bg-gray-400 bg-opacity-5">
                                    <div className='flex w-full my-2'><img src="/images/user.png" alt='noPic'  className="h-12 w-12 rounded-full mx-2 bg-slate-950"/>
                                    <h2 className='ml-1 text-yellow-500 text-sm font-semibold'>{review.person}</h2></div>
                                    <h2 className="m-3 text-sm">{review.body}</h2>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
