export const Stats = ({
  id,
  nationality,
  manufacturer,
  customers,
  orbit,
  type,
  mass_kg,
  mass_lbs,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <div className="flex flex-col text-center mb-12">
        <h4 className="text-4xl font-bebas text-gray-300 ">{id}</h4>
        <h1 className="text-6xl font-bold font-bebas tracking-widest">
          Overview
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-2xl">id</div>
          <div className="font-bebas text-xl text-slate-300">
            {id ? id : ""}
          </div>
        </div>
        <div className="flex justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-2xl">Nationality</div>
          <div className="font-bebas text-xl text-slate-300">
            {nationality ? nationality : "-"}
          </div>
        </div>

        <div className="flex justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-2xl">Manufacturer</div>
          <div className="font-bebas text-xl text-slate-300">
            {manufacturer ? manufacturer : "-"}
          </div>
        </div>
        <div className="flex justify-between border-b-4 border-gray-700 text-white">
          <div className="font-bebas font-bold text-2xl">type</div>
          <div className="font-bebas text-xl text-slate-300">
            {type ? type : "-"}
          </div>
        </div>
        <div className="flex justify-between text-white border-b-4 border-gray-700">
          <div className="font-bebas font-bold text-2xl">Orbit</div>
          <div className="font-bebas text-xl text-slate-300">
            {orbit ? orbit : "-"}
          </div>
        </div>
        <div className="flex justify-between text-white border-b-4 border-gray-700">
          <div className="font-bebas font-bold text-2xl">Mass in Kg</div>
          <div className="font-bebas text-xl text-slate-300">
            {mass_kg ? mass_kg : "-"}
          </div>
        </div>
        <div className="flex justify-between text-white">
          <div className="font-bebas font-bold text-2xl">Mass in lbs</div>
          <div className="font-bebas text-xl text-slate-300">
            {mass_lbs ? mass_lbs : "-"}
          </div>
        </div>
        {customers.map((customer, idx) => (
          <div key={idx} className="flex justify-between text-white">
            <div className="font-bebas font-bold text-2xl">Customer </div>
            <div className="font-bebas text-xl text-slate-300">{customer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};