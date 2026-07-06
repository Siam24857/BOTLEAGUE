"use client";

import {
  Wrench,
  Landmark,
  Award,
  Users,
} from "lucide-react";

const steps = [
  {
    id: "STEP 1",
    title: "BUILD YOUR\nTEAM",
    icon: Wrench,
  },
  {
    id: "STEP 2",
    title: "COMPETE ACROSS\nINDIA",
    icon: Landmark,
  },
  {
    id: "STEP 3",
    title: "EARN NATIONAL\nRANKING & VALUE",
    icon: Award,
  },
  {
    id: "STEP 4",
    title: "JOIN THE\nLEAGUE",
    icon: Users,
  },
];

export default function UserJourney() {
  return (
    <section className="w-full bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h4 className="text-red-500 uppercase tracking-widest text-2xl font-semibold">
            USER JOURNEY
          </h4>

          <h2 className="text-white text-5xl lg:text-6xl font-black uppercase mt-3 tracking-wide">
            YOUR PATH TO THE LEAGUE
          </h2>

          <p className="text-gray-500 text-xl mt-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>

        </div>

        {/* Steps */}

        <div className="relative">

          {/* Blue Horizontal Line */}

          <div className="hidden lg:block absolute top-[82px] left-[12%] right-[12%] h-[4px] bg-blue-700"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >

                  {/* Circle */}

                  <div className="relative">

                    {/* Outer Ring */}

                    <div className="w-[150px] h-[150px] rounded-full bg-[#2b2b2b] flex items-center justify-center">

                      {/* Inner Circle */}

                      <div className="w-[120px] h-[120px] rounded-full border-[4px] border-blue-700 bg-[#111111] flex items-center justify-center">

                        <Icon
                          size={54}
                          strokeWidth={2.2}
                          className="text-white"
                        />

                      </div>

                    </div>

                  </div>

                  {/* Vertical Line */}

                  <div className="w-[2px] h-10 bg-gray-400"></div>

                  <p className="text-red-500 text-3xl font-semibold uppercase">
                    {step.id}
                  </p>

                  <h3 className="text-white text-4xl font-bold uppercase leading-tight whitespace-pre-line mt-4">
                    {step.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}