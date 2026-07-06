import { disciplines } from '../data/data';

const Disciplines = () => {
  return (
    <section className="py-24 px-10 md:px-20 bg-bot-dark">
      <span className="text-bot-red text-xs font-bold tracking-widest uppercase">
        Sports
      </span>
      <h2 className="text-4xl heading-font mt-2 mb-12 uppercase">
        Competition Disciplines
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {disciplines.map((discipline) => (
          <div
            key={discipline.name}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition duration-500"
              src={discipline.image}
              alt={discipline.name}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
              <h4 className="text-xs font-bold uppercase">{discipline.name}</h4>
            </div>
          </div>
        ))}
        {/* Background pattern fill */}
        <div className="col-span-2 hidden md:flex items-center justify-center opacity-20">
          <div className="grid grid-cols-8 gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
