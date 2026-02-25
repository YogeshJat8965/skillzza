import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="w-full"
      style={{ backgroundColor: '#0F1114', height: '60px' }}
    >
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 h-full flex justify-between items-center">
        {/* Navigation Links - LEFT SIDE */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Interns
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            K - 12
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Universities
          </a>
          <a
            href="#"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Companies
          </a>
        </div>

        {/* Log in - RIGHT SIDE */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img
            src="/img/user.png"
            alt=""
            className="w-6 h-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span
            className="text-white"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Log in
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
