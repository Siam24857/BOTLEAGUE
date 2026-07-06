import React from "react";

const cards = [
  {
    title: "BECOME A JUDGE",
  },
  {
    title: "VOLUNTEER",
  },
  {
    title: "COMMUNITY MEMBER",
  },
];

export default function JoinEcosystem() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-12">
        JOIN THE ECOSYSTEM
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-xl p-6 bg-[#0d0d0d]"
          >
            {/* Card Title */}
            <h2 className="text-lg font-semibold tracking-widest mb-8">
              {card.title}
            </h2>

            {/* Inputs */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-2 text-sm outline-none focus:border-red-500"
              />

              <input
                type="text"
                placeholder="Location"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-2 text-sm outline-none focus:border-red-500"
              />

              <input
                type="text"
                placeholder="Enroll"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-2 text-sm outline-none focus:border-red-500"
              />
            </div>

            {/* Button */}
            <button className="w-full mt-8 bg-[#ff4b4b] hover:bg-red-600 transition-all duration-200 py-3 rounded-md font-semibold tracking-wide">
              SIGN UP
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}