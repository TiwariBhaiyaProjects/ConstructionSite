import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navLinks, companyInfo } from "@/data/companyData";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {companyInfo.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>{companyInfo.gstin}</span>
            <span>|</span>
            <span>{companyInfo.msme}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl md:text-2xl">
                  RC
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg md:text-xl text-foreground">
                  Rajnandini
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">
                  Construction
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container-custom py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
