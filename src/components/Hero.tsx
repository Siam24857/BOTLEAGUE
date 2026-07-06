import { liveEvent } from "../data/data";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center  overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute ">
        <img
          src="https://cdn.oreateai.com/aiimage/nano/916d7f22634e33453f07a7f9/41f4b21c41a95f29bab7ca65ce6ff866"
          alt="background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* DARK OVERLAY (KEEP VERY LIGHT) */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* LIVE STATUS */}
      <div className="absolute top-8 right-10 flex items-center gap-2 bg-black/50 backdrop-blur px-4 py-1 rounded-full border border-bot-red text-[10px] font-bold uppercase tracking-widest text-bot-red z-10">
        <span className="w-2 h-2 bg-bot-red rounded-full animate-pulse"></span>
        {liveEvent.status} |{" "}
        <span className="text-white">{liveEvent.action}</span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10  pt-20 p-14">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
         INDIA’S ULTIMATE<br></br>ROBOTICS ARENA
        
        </h1>

        <p className="text-gray-300 mb-8 max-w-lg">
          Build.Compete.Rank. The National Ecosystem for Robotics Arena. Join the revolution of autonomous machines.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-red-500 text-white font-bold text-sm uppercase rounded">
            Create Account
          </button>

          <button className="px-8 py-3 border border-white text-white font-bold text-sm uppercase rounded hover:bg-white/10">
            Explore Events
          </button>
        </div>
      </div>

    </header>
  );
};

export default Hero;