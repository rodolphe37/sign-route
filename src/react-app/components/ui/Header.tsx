import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // <--- permet de savoir sur quelle route on est

  const links = [
    { name: "Accueil", path: "/" },
    { name: "Théorie", path: "/theorie" },
    { name: "Catégories", path: "/categories" },
    { name: "À propos", path: "/about" },
  ];

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                className="max-w-12 max-h-12 object-contain"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-lg font-bold">SignalRoute</h1>
            <p className="text-xs text-muted-foreground">
              Tous les panneaux routiers français
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-1 py-1 text-foreground"
            >
              <span className="hover:text-primary transition">{link.name}</span>
              {/* Soulignement animé */}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-secondary transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col gap-3 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="relative px-2 py-2 text-foreground"
              >
                <span className="transition-colors duration-300 hover:text-primary">
                  {link.name}
                </span>
                {/* Soulignement animé */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
