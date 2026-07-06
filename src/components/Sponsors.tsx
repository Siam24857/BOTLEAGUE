const sponsors = [
  { name: "NIT DELHI", logo:  "https://awkward-scarlet-ip0v2afq.edgeone.dev/images__1_-removebg-preview%201.png" },
  { name: "INDIAN BIT", logo:  "https://amused-magenta-pdiqkih5.edgeone.dev/images__3_-removebg-preview%201.png" },
  { name: "NIT SILCHAR", logo:  "https://civic-pink-mz3s5jzh.edgeone.dev/download-removebg-preview%20(1)%201.png"  },
  { name: "ROBO COMPANY", logo:  "https://well-ivory-tssbmvhr.edgeone.dev/images__2_-removebg-preview%201.png"},
  { name: "IIT BOMBAY", logo:  "https://then-brown-f2n8ripw.edgeone.dev/images-removebg-preview%201.png" },
  { name: "ROBO COMPANY", logo:  "https://vocal-harlequin-gc2pt1he.edgeone.dev/download__1_-removebg-preview%201.png" },
];

export default function Sponsors() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-[0.25em] mb-14">
        SPONSORS
      </h2>

      {/* GRID (IMPORTANT: 3 columns like image) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-20">

        {sponsors.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">

            {/* LOGO CIRCLE */}
            <div className="  rounded-full   flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="w-55 h-55 object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider leading-tight">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}