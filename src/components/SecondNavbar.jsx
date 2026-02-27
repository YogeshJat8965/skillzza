import React, { useState } from 'react';

const SecondNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Products', 'Use Cases', 'School of Technology', 'Explore', 'Insights', 'Company'];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 h-[60px] md:h-[70px] lg:h-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/img/SKillzza Logo 123-01.png" alt="Skillzza Logo" className="h-10 sm:h-12 lg:h-16 w-auto" />
        </div>

        {/* Nav Links — Desktop (lg+) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#0F1114] text-sm xl:text-[15px] font-normal hover:opacity-70 transition-opacity flex items-center gap-1 font-[Lato]"
            >
              {link}
              <svg width="10" height="7" viewBox="0 0 12 8" fill="none" className="mt-0.5">
                <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Right side — Buttons + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Book a Demo — hidden below sm */}
          <button className="hidden sm:block text-white text-xs md:text-sm font-bold py-2.5 px-4 md:px-5 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity font-[Lato]"
            style={{ background: 'linear-gradient(to right, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)' }}>
            Book a Demo
          </button>

          {/* Product Tour — hidden below lg */}
          <button className="hidden lg:block bg-[#FFC7C8] text-[#CA2C2E] text-sm font-semibold py-2.5 px-5 rounded-lg border border-[#CC2B2E] cursor-pointer hover:bg-red-50 transition-colors font-[Lato]">
            Product Tour
          </button>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F1114" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-[#0F1114] text-base font-normal border-b border-gray-100 hover:opacity-70 transition-opacity font-[Lato]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          {/* Buttons in mobile menu */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="sm:hidden text-white text-[15px] font-bold py-3 px-7 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity w-full font-[Lato]"
              style={{ background: 'linear-gradient(to right, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)' }}>
              Book a Demo
            </button>
            <button className="lg:hidden bg-[#FFC7C8] text-[#CA2C2E] text-[15px] font-semibold py-3 px-7 rounded-lg border border-[#CC2B2E] cursor-pointer hover:bg-red-50 transition-colors w-full font-[Lato]">
              Product Tour
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SecondNavbar;
