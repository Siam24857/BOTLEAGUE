import React from "react";
import bgImage from "../assete/About.png"

const competitions = [
  {
    title: "Robo Race",
    image: "https://picsum.photos/seed/robo1/600/400",
  },
  {
    title: "Line Follower",
    image: "https://picsum.photos/seed/robo2/600/400",
  },
  {
    title: "RC Racing",
    image: "https://picsum.photos/seed/robo3/600/400",
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: "https://picsum.photos/seed/robo4/600/400",
  },
  {
    title: "Robo Hockey",
    image: "https://picsum.photos/seed/robo5/600/400",
  },
  {
    title: "Robo War",
    image: "https://picsum.photos/seed/robo6/600/400",
  },
];

const CompetitionDisciplines: React.FC = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute bottom-0 right-0 w-[750px] opacity-70 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-red-500 uppercase tracking-[4px] font-semibold text-lg mb-2">
          Sports
        </p>

        <h2 className="text-white uppercase text-5xl md:text-6xl font-bold mb-14">
          Competition Disciplines
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitions.map((item, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              {/* Title */}
              <div className="h-20 flex items-center justify-center px-4">
                <h3
                  className={`text-white font-semibold text-center leading-tight ${
                    item.title.length > 20
                      ? "text-lg"
                      : "text-3xl"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionDisciplines;