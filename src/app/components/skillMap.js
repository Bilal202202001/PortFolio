'use client'


export default function SkillMap({ skill }) {
    const convertWidth = () => {
        // return skill.count - (skill.count % 4);
        if(skill.count>90)
        {
            return "full"
        }       
        else if(skill.count>=85)
        {
            return "5/6"
        }
        else if(skill.count>=80)
        {
            return "4/6"
        }
        else if(skill.count>=75)
        {
            return "3/6"
        }
        else if(skill.count>=70)
        {
            return "2/6"
        }
    };


    return (
        <div className="my-3 w-full">
            <h2 className="w-full flex justify-between font-semibold">
                {skill.title}
                <span className="text-xs font-light">
                    {skill.count} %
                </span>
            </h2>
            <div className={`w-${convertWidth()} bg-yellow-600 h-1`} >
                
            </div>
        </div>
    )
}
