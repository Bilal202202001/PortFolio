export default function HeadingTemp({ heading }) {
    return (
      <div className="h-40 w-full flex justify-center items-center relative">
        <h2 className="text-5xl font-bold opacity-5 ">
          {heading}
        </h2>
        <h2 className="absolute text-yellow-500 text-2xl text-center w-48 h-16">
          {heading}
          <div className="flex w-full mt-2">
            <div className="w-2/6 border border-white border-opacity-20"></div>
            <div className="w-2/6 border border-yellow-600"></div>
            <div className="w-2/6 border border-white border-opacity-20"></div>
          </div>
        </h2>
      </div>
    );
  }
  