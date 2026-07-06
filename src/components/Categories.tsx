 
import {
  Brain,
  UserCog,
  Lightbulb,
  Bot,
  Rocket,
  Trophy,
  Briefcase,
} from "lucide-react";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    desc: "From one-off events to a year-round competitive season.",
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    desc: "Your professional robotics legacy, tracked and verified.",
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    desc: "Benchmark your skills against the best engineers in India.",
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    desc: "Turning arena victories into real-world industry opportunities.",
  },
];

const categories = [
  {
    title: "MINI MAKERS",
    subtitle: "Where Creativity Meets Logic.",
    icon: Rocket,
    active: true,
  },
  {
    title: "JUNIOR INNOVATORS",
    subtitle: "Engineering & Strategy Fundamentals.",
    icon: Lightbulb,
  },
  {
    title: "YOUNG ENGINEERS",
    subtitle: "Advanced Wireless & Autonomous Control.",
    icon: UserCog,
  },
  {
    title: "ROBO MINDS",
    subtitle: "Elite Professional Sports & Robotics.",
    icon: Brain,
  },
];

export default function BotLeagueSection() {
  return (
    <section className="bg-[#151515] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-black uppercase tracking-wider mb-14">
          WHAT IS BOTLEAGUE?
        </h2>

        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-y-12 gap-x-16">

            {features.map((item) => (
              <div key={item.number}>
                <h3 className="text-red-500 text-3xl font-bold">
                  {item.number}
                </h3>

                <h4 className="text-3xl font-bold mt-2 uppercase">
                  {item.title}
                </h4>

                <p className="text-gray-400 mt-3 text-lg leading-relaxed">
                  "{item.desc}"
                </p>
              </div>
            ))}

          </div>

          {/* Right Fake Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/450/450"
              width={400}
              height={400}
              alt="robot"
              className="rounded-xl opacity-80"
            />
          </div>

        </div>

        {/* Categories */}
        <div className="mt-24">

          <h2 className="text-5xl font-black uppercase tracking-wider mb-12">
            Categories
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition duration-300 p-8 ${
                    item.active
                      ? "border-yellow-500 bg-[#242424]"
                      : "border-gray-700 bg-[#202020] hover:border-yellow-500"
                  }`}
                >
                  <div className="w-20 h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-8">
                    <Icon
                      size={40}
                      className="text-yellow-400"
                    />
                  </div>

                  <h3 className="text-3xl font-bold uppercase leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <button className="mt-10 uppercase tracking-widest text-red-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More →
                  </button>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}