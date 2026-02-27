import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Interns', 'K - 12', 'Universities', 'Companies'];

  return (
    <nav className="w-full bg-[#0F1114]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 h-[50px] md:h-[60px] flex justify-between items-center">
        {/* Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-sm lg:text-[15px] xl:text-base font-medium hover:opacity-80 transition-opacity font-[Lato]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger — Mobile only */}
        <button
          className="md:hidden text-white p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>

        {/* Log in */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/img/user.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-white text-sm font-semibold font-[Lato]">Log in</span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#0F1114]">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-white text-[15px] font-medium py-3 border-b border-white/10 hover:opacity-80 transition-opacity font-[Lato]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
