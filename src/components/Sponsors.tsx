const sponsors = [
  { name: "NIT DELHI", abbr: "NIT" },
  { name: "INDIAN BIT", abbr: "IB" },
  { name: "NIT SILCHAR", abbr: "NS" },
  { name: "ROBO COMPANY", abbr: "RC" },
  { name: "IIT BOMBAY", abbr: "IIT" },
  { name: "ROBO COMPANY", abbr: "RC" },
];

export default function Sponsors() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.25em] mb-14">
        SPONSORS
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-60">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-[10px]">
              {sponsor.abbr}
            </div>
            <span className="text-[10px] font-bold">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}