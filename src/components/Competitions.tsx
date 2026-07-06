import React from "react";

export default function CompetitionsEvents() {
  return (
    <section className="bg-[#0b0b0b] text-white px-6 md:px-16 py-14">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-10">
        COMPETITIONS & EVENTS
      </h1>

      {/* Tabs Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 text-sm font-semibold tracking-widest">
        <div className="text-red-500">LIVE NOW</div>
        <div className="text-white text-center">UPCOMING</div>
        <div className="text-white text-right">PAST RESULTS</div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ================= LIVE NOW ================= */}
        <div className="border border-gray-700 rounded-xl p-5 bg-[#151515]">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Bengaluru Regionals
              </h2>
              <p className="text-gray-400 text-sm">Lorem Ipsum</p>
            </div>

            <span className="bg-red-500 text-xs px-3 py-1 rounded-full">
              Ongoing
            </span>
          </div>

          {/* Bracket (simplified visual replica) */}
          <div className="relative h-64">
            {/* Left nodes */}
            <div className="absolute left-0 top-0 space-y-6">
              <div className="w-20 h-6 bg-gray-600 rounded"></div>
              <div className="w-20 h-6 bg-gray-600 rounded"></div>
              <div className="w-20 h-6 bg-gray-600 rounded"></div>
              <div className="w-20 h-6 bg-gray-600 rounded"></div>
            </div>

            {/* Middle connectors */}
            <div className="absolute left-24 top-6 space-y-12">
              <div className="w-16 h-6 bg-gray-600 rounded"></div>
              <div className="w-16 h-6 bg-gray-600 rounded"></div>
            </div>

            {/* Right side */}
            <div className="absolute left-48 top-14">
              <div className="w-20 h-6 bg-gray-600 rounded"></div>
            </div>

            {/* Red connector lines (visual accent) */}
            <div className="absolute inset-0 border-l-2 border-r-2 border-red-500 opacity-60 rounded-xl"></div>
          </div>
        </div>

        {/* ================= UPCOMING ================= */}
        <div className="space-y-6">
          
          {/* Card 1 */}
          <div className="border border-gray-700 rounded-xl p-5 bg-[#151515]">
            <h2 className="text-lg font-semibold mb-4">
              Event in Mumbai
            </h2>

            <div className="flex justify-between text-sm text-gray-300 mb-6">
              <div>
                <p className="text-gray-400">Date</p>
                <p>11/11/25</p>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p>BKC</p>
              </div>
              <div>
                <p className="text-gray-400">Category</p>
                <p>Lorem</p>
              </div>
            </div>

            <button className="w-full bg-red-500 py-2 rounded-md font-semibold">
              REGISTER
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-700 rounded-xl p-5 bg-[#151515]">
            <h2 className="text-lg font-semibold mb-4">
              Event in Delhi
            </h2>

            <div className="flex justify-between text-sm text-gray-300 mb-6">
              <div>
                <p className="text-gray-400">Date</p>
                <p>11/11/25</p>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p>BKC</p>
              </div>
              <div>
                <p className="text-gray-400">Category</p>
                <p>Lorem</p>
              </div>
            </div>

            <button className="w-full bg-red-500 py-2 rounded-md font-semibold">
              REGISTER
            </button>
          </div>
        </div>

        {/* ================= PAST RESULTS ================= */}
        <div className="border border-gray-700 rounded-xl p-5 bg-[#151515] space-y-6">
          
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">
                Bengaluru Regionals
              </h3>
              <p className="text-gray-400 text-sm">Lorem Ipsum</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}