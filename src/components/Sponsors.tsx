import React from "react";

import nitDelhi from "../assete/Genarel.png";
import indianBit from "../assete/India.png";
import nitSilchar from "../assete/Del.png";
import roboCompany from "../assete/Round.png";
import delhivery from "../assete/Bot.png";
import generalRobotics from "../assete/Robot2.png";

const sponsors = [
  { name: "NIT DELHI", logo:  roboCompany },
  { name: "INDIAN BIT", logo: delhivery },
  { name: "NIT SILCHAR", logo: generalRobotics  },
  { name: "ROBO COMPANY", logo: nitSilchar},
  { name: "IIT BOMBAY", logo: indianBit },
  { name: "ROBO COMPANY", logo: nitDelhi },
];

export default function Sponsors() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.25em] mb-14">
        SPONSORS
      </h2>

      {/* GRID (IMPORTANT: 3 columns like image) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-20">

        {sponsors.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">

            {/* LOGO CIRCLE */}
            <div className="  rounded-full   flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="w-55 h-55 object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider leading-tight">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}