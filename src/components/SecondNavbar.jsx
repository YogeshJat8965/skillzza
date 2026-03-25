import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const companyCloseTimeoutRef = useRef(null);
  
  const navLinks = ['Products', 'Use Cases', 'School of Technology', 'Explore', 'Insights', 'Company'];
  
  const productPages = [
    { name: 'Xperience Platform', path: '/products/xperience-platform' },
    { name: 'AI HackNex', path: '/products/ai-hacknex' },
  ];

  const companyPages = [
    { name: 'Our Pathway', path: '/company/our-pathway' },
    { name: 'About', path: '/company/about' },
  ];

  const clearProductsCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openProductsDropdown = () => {
    clearProductsCloseTimeout();
    setProductsDropdownOpen(true);
  };

  const closeProductsDropdownWithDelay = () => {
    clearProductsCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 220);
  };

  const clearCompanyCloseTimeout = () => {
    if (companyCloseTimeoutRef.current) {
      clearTimeout(companyCloseTimeoutRef.current);
      companyCloseTimeoutRef.current = null;
    }
  };

  const openCompanyDropdown = () => {
    clearCompanyCloseTimeout();
    setCompanyDropdownOpen(true);
  };

  const closeCompanyDropdownWithDelay = () => {
    clearCompanyCloseTimeout();
    companyCloseTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
      companyCloseTimeoutRef.current = null;
    }, 220);
  };

  useEffect(() => () => { clearProductsCloseTimeout(); clearCompanyCloseTimeout(); }, []);

  const handleToggle = () => {
    if (mobileMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileProductsOpen(false);
        setMobileCompanyOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
      setMobileProductsOpen(false);
      setMobileCompanyOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes nav2SlideDown {
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
        @keyframes nav2SlideUp {
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
        @keyframes nav2FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes nav2FadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .nav2-dropdown-enter {
          animation: nav2SlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .nav2-dropdown-exit {
          animation: nav2SlideUp 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
        .nav2-backdrop-enter {
          animation: nav2FadeIn 0.3s ease forwards;
        }
        .nav2-backdrop-exit {
          animation: nav2FadeOut 0.3s ease forwards;
        }
        .nav2-link-stagger {
          opacity: 0;
          animation: nav2SlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .nav2-btn-stagger {
          opacity: 0;
          animation: nav2SlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 relative">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 h-[60px] md:h-[70px] lg:h-[80px] flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/img/SKillzza Logo 123-01.png" alt="Skillzza Logo" className="h-10 sm:h-12 lg:h-16 w-auto" />
          </Link>

          {/* Nav Links — Desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => {
              const isProducts = link === 'Products';
              const isCompany = link === 'Company';
              const hasDropdown = isProducts || isCompany;
              return (
                <div 
                  key={link}
                  className="relative"
                  onMouseEnter={() => {
                    if (isProducts) openProductsDropdown();
                    if (isCompany) openCompanyDropdown();
                  }}
                  onMouseLeave={() => {
                    if (isProducts) closeProductsDropdownWithDelay();
                    if (isCompany) closeCompanyDropdownWithDelay();
                  }}
                >
                  <a
                    href="#"
                    className="text-[#0F1114] text-sm xl:text-[15px] font-normal hover:opacity-70 transition-opacity flex items-center gap-1 font-[Lato]"
                  >
                    {link}
                    <svg width="10" height="7" viewBox="0 0 12 8" fill="none" className="mt-0.5">
                      <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  
                  {/* Products Dropdown */}
                  {isProducts && productsDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[200px] z-50"
                      onMouseEnter={openProductsDropdown}
                      onMouseLeave={closeProductsDropdownWithDelay}
                    >
                      {productPages.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className="block px-6 py-3 text-[#0F1114] text-sm font-normal hover:bg-gray-50 transition-colors font-[Lato]"
                          onClick={() => {
                            clearProductsCloseTimeout();
                            setProductsDropdownOpen(false);
                          }}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Company Dropdown */}
                  {isCompany && companyDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[200px] z-50"
                      onMouseEnter={openCompanyDropdown}
                      onMouseLeave={closeCompanyDropdownWithDelay}
                    >
                      {companyPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-6 py-3 text-[#0F1114] text-sm font-normal hover:bg-gray-50 transition-colors font-[Lato]"
                          onClick={() => {
                            clearCompanyCloseTimeout();
                            setCompanyDropdownOpen(false);
                          }}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
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
              onClick={handleToggle}
              aria-label="Toggle navigation"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F1114" strokeWidth="2"
                style={{ transition: 'transform 0.3s ease' }}
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown — OVERLAY with smooth animation */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className={`lg:hidden fixed inset-0 bg-black/30 z-[48] ${isAnimating ? 'nav2-backdrop-exit' : 'nav2-backdrop-enter'}`}
              style={{ top: '110px' }}
              onClick={handleToggle}
            />
            {/* Dropdown */}
            <div className={`lg:hidden absolute left-0 right-0 top-full bg-white z-[49] shadow-2xl border-t border-gray-100 ${isAnimating ? 'nav2-dropdown-exit' : 'nav2-dropdown-enter'}`}>
              <div className="px-4 py-2">
                {navLinks.map((link, index) => {
                  const isProducts = link === 'Products';
                  const isCompany = link === 'Company';
                  if (isProducts) {
                    return (
                      <div
                        key={link}
                        className="nav2-link-stagger border-b border-gray-100"
                        style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                      >
                        <button
                          type="button"
                          className="w-full py-3 text-[#0F1114] text-base font-normal hover:opacity-70 transition-opacity font-[Lato] flex items-center justify-between"
                          onClick={() => setMobileProductsOpen((prev) => !prev)}
                          aria-expanded={mobileProductsOpen}
                        >
                          <span>{link}</span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}>
                            <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {mobileProductsOpen && (
                          <div className="pb-2">
                            {productPages.map((product) => (
                              <Link
                                key={product.path}
                                to={product.path}
                                className="block pl-4 pr-2 py-2 text-[#0F1114] text-sm font-normal hover:opacity-70 transition-opacity font-[Lato]"
                                onClick={() => { setMobileProductsOpen(false); setMobileMenuOpen(false); setIsAnimating(false); }}
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  if (isCompany) {
                    return (
                      <div
                        key={link}
                        className="nav2-link-stagger border-b border-gray-100"
                        style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                      >
                        <button
                          type="button"
                          className="w-full py-3 text-[#0F1114] text-base font-normal hover:opacity-70 transition-opacity font-[Lato] flex items-center justify-between"
                          onClick={() => setMobileCompanyOpen((prev) => !prev)}
                          aria-expanded={mobileCompanyOpen}
                        >
                          <span>{link}</span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`}>
                            <path d="M1 1L6 6L11 1" stroke="#0F1114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {mobileCompanyOpen && (
                          <div className="pb-2">
                            {companyPages.map((page) => (
                              <Link
                                key={page.path}
                                to={page.path}
                                className="block pl-4 pr-2 py-2 text-[#0F1114] text-sm font-normal hover:opacity-70 transition-opacity font-[Lato]"
                                onClick={() => { setMobileCompanyOpen(false); setMobileMenuOpen(false); setIsAnimating(false); }}
                              >
                                {page.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link}
                      href="#"
                      className="nav2-link-stagger block py-3 text-[#0F1114] text-base font-normal border-b border-gray-100 hover:opacity-70 transition-opacity font-[Lato]"
                      style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                      onClick={() => { setMobileMenuOpen(false); setIsAnimating(false); }}
                    >
                      {link}
                    </a>
                  );
                })}
                {/* Buttons in mobile menu */}
                <div className="flex flex-col gap-3 pt-4 pb-3">
                  <button
                    className="nav2-btn-stagger sm:hidden text-white text-[15px] font-bold py-3 px-7 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity w-full font-[Lato]"
                    style={{ background: 'linear-gradient(to right, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)', animationDelay: `${0.05 + navLinks.length * 0.05}s` }}
                  >
                    Book a Demo
                  </button>
                  <button
                    className="nav2-btn-stagger lg:hidden bg-[#FFC7C8] text-[#CA2C2E] text-[15px] font-semibold py-3 px-7 rounded-lg border border-[#CC2B2E] cursor-pointer hover:bg-red-50 transition-colors w-full font-[Lato]"
                    style={{ animationDelay: `${0.1 + navLinks.length * 0.05}s` }}
                  >
                    Product Tour
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default SecondNavbar;
