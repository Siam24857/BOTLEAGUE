import React from "react";

const sponsors = [
  {
    name: "NIT DELHI",
    logo: "https://via.placeholder.com/60",
  },
  {
    name: "INDIAN BIT",
    logo: "https://via.placeholder.com/60",
  },
  {
    name: "NIT SILCHAR",
    logo: "https://via.placeholder.com/60",
  },
  {
    name: "DELHIVERY ROBOTICS\nROBO COMPANY",
    logo: "https://via.placeholder.com/60",
  },
  {
    name: "IIT BOMBAY",
    logo: "https://via.placeholder.com/60",
  },
  {
    name: "GENERAL ROBOTICS\nROBO COMPANY",
    logo: "https://via.placeholder.com/60",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold tracking-widest mb-10">
        SPONSORS
      </h2>

      {/* Grid (STRICT 3 x 2 layout) */}
      <div className="grid grid-cols-3 gap-y-14 gap-x-10 items-center">
        {sponsors.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 justify-start"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-10 h-10 object-contain opacity-90"
            />

            {/* Text */}
            <div className="text-sm text-gray-300 leading-tight whitespace-pre-line">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}