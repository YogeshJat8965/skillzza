import React from 'react';

const SecondNavbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200" style={{ height: '80px' }}>
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 h-full flex justify-between items-center">
        {/* Logo - LEFT SIDE */}
        <div className="flex-shrink-0">
          <img
            src="/img/SKillzza Logo 123-01.png"
            alt="Skillzza Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Navigation Links - CENTER */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            Products
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            Use Cases
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            School of Technology
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            Explore
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            Insights
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#0F1114',
            }}
          >
            Company
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px' }}>
              <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Buttons - RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Book a Demo Button */}
          <button
            className="text-white hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(to right, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)',
              fontFamily: "'Lato', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              padding: '12px 28px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Book a Demo
          </button>

          {/* Product Tour Button */}
          <button
            className="hover:bg-red-50 transition-colors"
            style={{
              background: '#FFC7C8',
              border: '1px solid #CC2B2E',
              color: '#CA2C2E',
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Product Tour
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
