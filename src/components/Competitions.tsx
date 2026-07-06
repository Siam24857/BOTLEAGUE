"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  category: string;
}

interface PastResult {
  title: string;
  subtitle: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const UPCOMING_EVENTS: UpcomingEvent[] = [
  { title: "Event in Mumbai", date: "11/11/25", location: "BKC",   category: "Lorem" },
  { title: "Event in Delhi",  date: "11/11/25", location: "BKC",   category: "Lorem" },
];

const PAST_RESULTS: PastResult[] = [
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
];

// ─── Tournament Bracket SVG ───────────────────────────────────────────────────

function TournamentBracket() {
  const slotW = 90;
  const slotH = 28;
  const slotRx = 5;
  const slotFill = "#3a3a3a";
  const lineColor = "#e53e3e";
  const lw = 1.5;

  // Left column slots (x=10)
  const leftSlots = [
    { x: 10, y: 30 },
    { x: 10, y: 80 },
    { x: 10, y: 160 },
    { x: 10, y: 210 },
  ];

  // Mid column slots (x=150)
  const midSlots = [
    { x: 150, y: 55 },
    { x: 150, y: 185 },
  ];

  // Final slot (x=290)
  const finalSlot = { x: 290, y: 120 };

  return (
    <svg viewBox="0 0 420 275" className="w-full h-full" aria-hidden>
      {/* Left slots */}
      {leftSlots.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={slotW} height={slotH} rx={slotRx} fill={slotFill} />
      ))}

      {/* Mid slots */}
      {midSlots.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={slotW} height={slotH} rx={slotRx} fill={slotFill} />
      ))}

      {/* Final slot */}
      <rect x={finalSlot.x} y={finalSlot.y} width={slotW} height={slotH} rx={slotRx} fill={slotFill} />

      {/* Lines: left[0] → mid[0] */}
      <polyline
        points={`
          ${leftSlots[0].x + slotW},${leftSlots[0].y + slotH / 2}
          ${130},${leftSlots[0].y + slotH / 2}
          ${130},${midSlots[0].y + slotH / 2}
          ${midSlots[0].x},${midSlots[0].y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />

      {/* Lines: left[1] → mid[0] */}
      <polyline
        points={`
          ${leftSlots[1].x + slotW},${leftSlots[1].y + slotH / 2}
          ${130},${leftSlots[1].y + slotH / 2}
          ${130},${midSlots[0].y + slotH / 2}
          ${midSlots[0].x},${midSlots[0].y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />

      {/* Lines: left[2] → mid[1] */}
      <polyline
        points={`
          ${leftSlots[2].x + slotW},${leftSlots[2].y + slotH / 2}
          ${130},${leftSlots[2].y + slotH / 2}
          ${130},${midSlots[1].y + slotH / 2}
          ${midSlots[1].x},${midSlots[1].y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />

      {/* Lines: left[3] → mid[1] */}
      <polyline
        points={`
          ${leftSlots[3].x + slotW},${leftSlots[3].y + slotH / 2}
          ${130},${leftSlots[3].y + slotH / 2}
          ${130},${midSlots[1].y + slotH / 2}
          ${midSlots[1].x},${midSlots[1].y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />

      {/* Lines: mid[0] → final */}
      <polyline
        points={`
          ${midSlots[0].x + slotW},${midSlots[0].y + slotH / 2}
          ${270},${midSlots[0].y + slotH / 2}
          ${270},${finalSlot.y + slotH / 2}
          ${finalSlot.x},${finalSlot.y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />

      {/* Lines: mid[1] → final */}
      <polyline
        points={`
          ${midSlots[1].x + slotW},${midSlots[1].y + slotH / 2}
          ${270},${midSlots[1].y + slotH / 2}
          ${270},${finalSlot.y + slotH / 2}
          ${finalSlot.x},${finalSlot.y + slotH / 2}
        `}
        fill="none" stroke={lineColor} strokeWidth={lw}
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CompetitionsAndEvents() {
  return (
    <div
      className="min-h-screen bg-[#0f0a0a] text-white px-6 sm:px-10 lg:px-16 py-12"
      style={{
        background: "radial-gradient(ellipse at 80% 40%, rgba(120,10,10,0.45) 0%, transparent 60%), #0f0a0a",
        fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500&display=swap');
      `}</style>

      {/* ── Page Heading ── */}
      <h1
        className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest mb-10"
        style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", letterSpacing: "0.08em" }}
      >
        Competitions &amp; Events
      </h1>

      {/* ── Three Columns ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* ══ COL 1 — LIVE NOW ══ */}
        <div>
          <p
            className="text-[#e53e3e] text-sm font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", letterSpacing: "0.14em" }}
          >
            Live Now
          </p>

          <div
            className="rounded-xl border border-[#2a2a2a] bg-[#161010] p-5"
            style={{ minHeight: 320 }}
          >
            {/* Card header */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <p
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  Bengaluru Regionals
                </p>
                <p className="text-[#888] text-sm mt-0.5" style={{ fontFamily: "'Barlow', Arial, sans-serif" }}>
                  Lorem Ipsum
                </p>
              </div>
              <span className="mt-1 shrink-0 bg-[#e53e3e] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Ongoing
              </span>
            </div>

            <div className="h-px bg-[#2a2a2a] my-4" />

            {/* Bracket */}
            <div className="h-[220px]">
              <TournamentBracket />
            </div>
          </div>
        </div>

        {/* ══ COL 2 — UPCOMING ══ */}
        <div>
          <p
            className="text-white text-sm font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", letterSpacing: "0.14em" }}
          >
            Upcoming
          </p>

          <div className="flex flex-col gap-4">
            {UPCOMING_EVENTS.map((ev, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#2a2a2a] bg-[#161010] p-5"
              >
                <p
                  className="text-white text-xl font-bold mb-4"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  {ev.title}
                </p>

                {/* Meta row */}
                <div className="grid grid-cols-3 gap-2 mb-5 text-sm" style={{ fontFamily: "'Barlow', Arial, sans-serif" }}>
                  <div>
                    <p className="text-[#888] mb-0.5">Date</p>
                    <p className="text-white font-medium">{ev.date}</p>
                  </div>
                  <div>
                    <p className="text-[#888] mb-0.5">Location</p>
                    <p className="text-white font-medium">{ev.location}</p>
                  </div>
                  <div>
                    <p className="text-[#888] mb-0.5">Category</p>
                    <p className="text-white font-medium">{ev.category}</p>
                  </div>
                </div>

                {/* Register button */}
                <button
                  className="w-full py-3 bg-[#e53e3e] hover:bg-[#c53030] text-white font-bold uppercase tracking-widest rounded-md transition-colors text-sm"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", letterSpacing: "0.14em" }}
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ══ COL 3 — PAST RESULTS ══ */}
        <div>
          <p
            className="text-white text-sm font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", letterSpacing: "0.14em" }}
          >
            Past Results
          </p>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#161010] p-5 flex flex-col gap-0">
            {PAST_RESULTS.map((r, i) => (
              <div key={i}>
                <div className="py-4">
                  <p
                    className="text-white text-lg font-bold"
                    style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                  >
                    {r.title}
                  </p>
                  <p
                    className="text-[#888] text-sm mt-0.5"
                    style={{ fontFamily: "'Barlow', Arial, sans-serif" }}
                  >
                    {r.subtitle}
                  </p>
                </div>
                {i < PAST_RESULTS.length - 1 && (
                  <div className="h-px bg-[#2a2a2a]" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}