"use client";

import { Medal, Gavel, Briefcase, Zap } from "lucide-react";
import imgbb from "../assete/Status.png";

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
 

                <img
                  src={imgbb}
                  alt="leaderboard user"
                  className="w-full h-full object-cover rounded-lg"
                />

          </div>

        </div>

      </div>
    </section>
  );
}