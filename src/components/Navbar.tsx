import { navigation } from '../data/data';

const Navbar = () => {
  return (
    <nav className="bg-black/90 border-b border-gray-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="text-bot-red font-bold text-2xl heading-font flex items-center">
          <span className="mr-2">⚡</span>
          BOTLEAGUE
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider text-gray-300">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-bot-red transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-5 py-2 text-xs font-bold border border-gray-600 rounded hover:bg-white hover:text-black transition uppercase">
          Login
        </button>
        <button className="px-5 py-2 text-xs font-bold bg-bot-red text-white rounded hover:bg-red-600 transition uppercase">
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
