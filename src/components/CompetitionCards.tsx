"use client";

import {
  Medal,
  Gavel,
  Briefcase,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Medal,
    title: "NATIONAL RECOGNITION",
    desc: `Benchmark your skills on India's official robotics leaderboard.`,
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

          {/* LEFT */}
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
                  <div
                    key={index}
                    className="flex items-start gap-6"
                  >
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

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[360px] h-[620px]">

              {/* Background */}
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-[#2d2d2d] bg-gradient-to-b from-[#1d1d1d] to-[#111111]">

                {/* Circuit Pattern */}

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                    linear-gradient(#4f4f4f 2px,transparent 2px),
                    linear-gradient(90deg,#4f4f4f 2px,transparent 2px)
                  `,
                    backgroundSize: "70px 70px",
                  }}
                />

                {/* Glow dots */}

                {[...Array(18)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_18px_#40bfff]"
                    style={{
                      left: `${Math.random() * 95}%`,
                      top: `${Math.random() * 95}%`,
                    }}
                  />
                ))}
              </div>

              {/* Content */}

              <div className="relative z-10 p-6">

                <h3 className="text-white text-center font-bold tracking-widest text-3xl mb-8">
                  LEADERBOARD
                </h3>

                {/* Winner */}

                <div className="flex flex-col items-center">

                  <img
                    src="https://picsum.photos/100"
                    alt="user"
                    width={80}
                    height={80}
                    className="rounded-lg border-4 border-yellow-400"
                  />

                  <p className="text-gray-300 mt-3 text-lg">
                    #01 - Player Name
                  </p>

                  <h1 className="text-white text-6xl font-black tracking-wider">
                    508754
                  </h1>
                </div>

                <div className="mt-10 space-y-4">

                  {[
                    ["02", "22000", "#38bdf8"],
                    ["03", "20030", "#38bdf8"],
                    ["04", "19500", "#ff3ea5"],
                    ["05", "15060", "#ff3ea5"],
                    ["06", "13865", "#ff3ea5"],
                    ["07", "10954", "#ff3ea5"],
                    ["08", "9057", "#ff3ea5"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-gray-500 bg-[#252525]/90 px-4 py-3"
                    >
                      <div className="flex items-center gap-4">

                        <span className="text-gray-300 font-bold">
                          {item[0]}
                        </span>

                        <img
                          src={`https://picsum.photos/40?random=${i}`}
                          alt=""
                          width={34}
                          height={34}
                          className="rounded"
                        />

                        <span className="text-gray-200">
                          Player Name
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">
                          {item[1]}
                        </span>

                        <div
                          className="w-5 h-5 rounded-full"
                          style={{
                            background: item[2],
                          }}
                        />
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}