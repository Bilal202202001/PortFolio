'use client'
import 'app.css';
import HeadingTemp from "./headingTemp";
import { GiGymBag } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";
import { experience,education } from "./data";
import ResumeMap from "./resumeMap";

export default function Resume() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-auto w-full">
                <HeadingTemp heading={"RESUME"} />
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-5 px-20">
                    <div className="w-full ">
                        <span className="flex items-center justify-start text-center w-full mb-5 h-16 text-2xl"><RiGraduationCapFill className="mr-5" size={50} /> Education </span>
                        {
                        education.map((education,idx)=>{
                            return <ResumeMap key={idx} data={education}/>
                        })
                    }
                    </div>
                    <div className="w-full ">
                        <span className="flex items-center justify-start  text-center w-full mb-5 h-16 text-2xl"><GiGymBag className="mr-5" size={50} /> Experience </span>
                        {experience.map((experience,idx)=>{
                            return <ResumeMap key={idx} data={experience}/>
                        })}
                    </div>

                </div>
                
                
            </div>
        </>
    )
}
