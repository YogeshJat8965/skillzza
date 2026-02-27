import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navLinks = ['Interns', 'K - 12', 'Universities', 'Companies'];

  const handleToggle = () => {
    if (mobileMenuOpen) {
      // Close with animation
      setIsAnimating(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
            clip-path: inset(0 0 100% 0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }
        @keyframes navSlideUp {
          from {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0 0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
            clip-path: inset(0 0 100% 0);
          }
        }
        @keyframes navFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes navFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .nav-dropdown-enter {
          animation: navSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .nav-dropdown-exit {
          animation: navSlideUp 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
        .nav-backdrop-enter {
          animation: navFadeIn 0.3s ease forwards;
        }
        .nav-backdrop-exit {
          animation: navFadeOut 0.3s ease forwards;
        }
        .nav-link-stagger {
          opacity: 0;
          animation: navSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <nav className="w-full bg-[#0F1114] relative z-[60]">
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
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ transition: 'transform 0.3s ease' }}
            >
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

        {/* Mobile Dropdown — OVERLAY with smooth animation */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className={`md:hidden fixed inset-0 bg-black/40 z-[58] ${isAnimating ? 'nav-backdrop-exit' : 'nav-backdrop-enter'}`}
              style={{ top: '50px' }}
              onClick={handleToggle}
            />
            {/* Dropdown */}
            <div className={`md:hidden absolute left-0 right-0 top-full bg-[#0F1114] z-[59] shadow-2xl border-t border-white/10 ${isAnimating ? 'nav-dropdown-exit' : 'nav-dropdown-enter'}`}>
              <div className="px-4 py-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link}
                    href="#"
                    className="nav-link-stagger block text-white text-[15px] font-medium py-3 border-b border-white/10 hover:opacity-80 transition-opacity font-[Lato]"
                    style={{ animationDelay: `${0.05 + index * 0.06}s` }}
                    onClick={() => { setMobileMenuOpen(false); setIsAnimating(false); }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
