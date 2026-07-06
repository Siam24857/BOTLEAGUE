export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      {/* Top divider line */}
      <div className="border-t border-gray-700 mb-8" />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* QUICK LINKS */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest mb-4">
            QUICK LINKS
          </h2>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-gray-400 text-sm">
            <div className="space-y-2">
              <p>The Arena</p>
              <p>Episodes</p>
              <p>National Rankings</p>
              <p>Programs</p>
              <p>Rulebooks</p>
            </div>

            <div className="space-y-2">
              <p>Join the Team</p>
              <p>Sponsorships</p>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Legal</p>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest mb-4">
            SOCIAL MEDIA
          </h2>

          <div className="flex items-center gap-5 text-gray-300">
            {/* You can replace with react-icons */}
            
            {/* YouTube */}
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              ▶
            </div>

            {/* Instagram */}
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              ◎
            </div>

            {/* Facebook */}
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              f
            </div>

            {/* Twitter */}
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              ✦
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}