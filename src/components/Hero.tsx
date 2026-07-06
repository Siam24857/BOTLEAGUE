import { liveEvent } from "../data/data";
import bgImage from "../assete/Banner.png";  

const Hero = () => {
  return (
    <header
      className="hero-gradient flex flex-col justify-center px-10 md:px-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LIVE STATUS */}
      <div className="absolute top-8 right-10 flex items-center gap-2 bg-black/50 backdrop-blur px-4 py-1 rounded-full border border-bot-red text-[10px] font-bold uppercase tracking-widest text-bot-red z-10">
        <span className="w-2 h-2 bg-bot-red rounded-full animate-pulse"></span>
        {liveEvent.status} |{" "}
        <span className="text-white">{liveEvent.action}</span>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl pt-20 relative z-10">
        <h1 className="text-5xl md:text-7xl heading-font font-bold mb-4 leading-tight">
          INDIA'S ULTIMATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            ROBOTICS ARENA
          </span>
        </h1>

        <p className="text-gray-400 mb-8 max-w-lg">
          Build.Compete.Rank. The National Ecosystem for Robotics Arena. Join the
          revolution of autonomous machines.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-bot-red text-white font-bold text-sm uppercase tracking-wider rounded">
            Create Account
          </button>

          <button className="px-8 py-3 bg-transparent border border-white text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-white/10">
            Explore Events
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;