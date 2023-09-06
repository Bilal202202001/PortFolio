'use client'


export default function ResumeMap({data}) {
    return (<>
        <div className="relative border-l ml-1 py-3">
            <div className="absolute left-[-1.5%] top-[-7%] rounded-full  w-2 h-2 bg-slate-950 border-2 p-1 border-yellow-500 hover:bg-yellow-500"></div>
            <h2 className="text-xl text-yellow-500 m-2">
                {data.title}
            </h2>
            <h3 className="text-sm m-2">
                {data.place}
            </h3>
            <h3 className="text-sm m-2">
                {data.year}
            </h3>
        </div>
    </>)
}