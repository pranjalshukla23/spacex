export const Details = ({ title, date, number, details, link, article }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col text-center mb-12">
        <h4 className="text-4xl font-bebas text-gray-300 ">{title}</h4>
        <h1 className="text-6xl font-bold font-bebas tracking-widest">
          Overview
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-md md:text-2xl">title</div>
          <div className="font-bebas text-base  text-slate-300">{title}</div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-md md:text-2xl">Date</div>
          <div className="font-bebas text-base  text-slate-300">{date}</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-md md:text-2xl">Flight Number</div>
          <div className="font-bebas text-base   text-slate-300">{number}</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between text-white border-b-4 border-gray-700">
          <div className="font-bebas font-bold text-md md:text-2xl">Description</div>
          <div className="font-bebas text-base  text-slate-300">{details.substring(0,20) + "..." +details.substring(21,40)}</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between text-white border-b-4 border-gray-700">
          <div className="font-bebas font-bold text-md md:text-2xl">article</div>
          <div className="font-bebas text-base   text-slate-300">{article}</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="font-bebas font-bold text-md md:text-2xl">link</div>
          <div className="font-bebas text-base  text-slate-300">{link}</div>
        </div>
      </div>
    </div>
  );
};