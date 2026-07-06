"use client";

import { Medal, Gavel, Briefcase, Zap } from "lucide-react";

const features = [
  {
    icon: Medal,
    title: "NATIONAL RECOGNITION",
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: Gavel,
    title: "FAIR JUDGING",
    desc: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: Briefcase,
    title: "CAREER OPS",
    desc: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: Zap,
    title: "HIGH - ENERGY ECO",
    desc: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

export default function WhyRegister() {
  return (
    <section className="w-full bg-[#171717] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            <h4 className="text-[#ff4f4f] text-4xl font-black uppercase tracking-wider">
              WHY REGISTER ?
            </h4>

            <h2 className="text-white text-5xl lg:text-6xl font-black uppercase mt-2 leading-none">
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="mt-14 space-y-10">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="w-14 h-14 flex justify-center items-center text-[#ff4f4f]">
                      <Icon size={50} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3 className="text-white text-4xl font-bold uppercase">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-xl mt-2 leading-8 max-w-xl">
                        "{item.desc}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[360px] h-[620px]">
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-[#2d2d2d] bg-gradient-to-b from-[#1d1d1d] to-[#111111]">
                <div className="relative z-10 p-6">
                  <h3 className="text-white text-center font-bold tracking-widest text-3xl mb-8">
                    LEADERBOARD
                  </h3>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
                      <span className="text-black font-bold text-2xl">#01</span>
                    </div>
                    <p className="text-gray-300 mt-3 text-lg">Player Name</p>
                    <h1 className="text-white text-6xl font-black tracking-wider">508754</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}