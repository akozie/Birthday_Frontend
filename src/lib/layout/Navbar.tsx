import { Link, useLocation } from "@tanstack/react-router";

export const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    // { to: "/", label: "Home" },
    { to: "/memories", label: "Birthday Wishes" },
    // { to: "/viewmemories", label: "The Keepsake" },
    { to: "/guestbook", label: "Guestbook" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-3 py-3 backdrop-blur-xs">
      <div className="w-full flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-3xl shadow-2xl">
        
        {/* Branding or Logo placeholder */}
        <Link to="/" className="text-white font-black tracking-tighter text-xl">
          B-DAY <span className="text-pink-500"> </span>
        </Link>

        {/* Links */}
        <div className="flex gap-1">
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? "bg-white text-slate-900 shadow-lg" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};