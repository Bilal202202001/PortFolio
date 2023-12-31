'use client'
import Image from 'next/image'
import 'app.css'; // Import the CSS file you created
import { useState } from "react";
import HeadingTemp from "./headingTemp";
import SkillMap from "./skillMap";
import { skills } from "./data";

export default function About() {

    const [hoverShow, updateHover] = useState(false)

    const handleHover = () => {
        updateHover(!hoverShow)
    }

    return (
        <section id='skills' className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={'SKILLS'}/>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full p-5">
               <div className="w-full mr-5 p-3 flex flex-col justify-center items-center">
               <h2 className="text-3xl mb-3 w-full text-yellow-500 font-bold">
                Full Stack Web developer
               </h2>
               <p className=" mb-3">
               I am a full stack developer proficient in React.js, Node.js, and Express.js, crafting engaging user interfaces and seamless server-side architectures. With expertise in MongoDB, MySQL, and Next.js, I ensure robust data management and optimal web performance. My skills extend to Laravel, PHP, HTML, CSS, and JavaScript, enabling me to deliver dynamic and responsive applications.
               </p>
               <Image src="/images/about3.jpg" alt="photo" className="w-5/6 rounded-md opacity-90" width={500} height={500}/>
               </div> 
               <div className="w-full">
                                       
                    {
                        skills.map((skills,idx)=>{
                            return <SkillMap key={idx} skill={skills}/>
                        })
                    }
               </div> 
            </div>   
        </section>
    );
}
