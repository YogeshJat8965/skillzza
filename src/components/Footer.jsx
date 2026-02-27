import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @media (max-width: 767px) {
          .footer-logo {
            width: 180px !important;
            height: auto !important;
          }
          .footer-link-col h3 {
            font-size: 15px !important;
          }
          .footer-link-col a {
            font-size: 13px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
          .footer-bottom-links {
            flex-direction: column !important;
            gap: 8px !important;
            align-items: center !important;
          }
        }
      `}</style>
      <footer
        ref={footerRef}
        className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        style={{
          width: '100%',
          background: '#F4F4F5',
          paddingTop: '60px',
          paddingBottom: '0',
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32">
          {/* Main Layout - Logo/Address on Left, Links on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left Column - Logo and Address */}
            <div className="md:col-span-3">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src="/img/SKillzza%20Logo%20123-01.png"
                  alt="Skillzza Logo"
                  className="footer-logo"
                  style={{
                    width: '288px',
                    height: '85px',
                    opacity: 1,
                  }}
                />
              </div>

              {/* Registered Office */}
              <div className="mb-8">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '12px',
                  }}
                >
                  Registered Office
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#71717B',
                  }}
                >
                  Skillzza, WeWork India, Chromium, CTS No. 106/1-5<br />
                  Jogeshwari—Vikhroli Link Road, Milind Nagar,<br />
                  Powai, Mumbai – 400076
                </p>
              </div>

              {/* Our Presence */}
              <div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '12px',
                  }}
                >
                  Our Presence
                </h3>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#71717B',
                  }}
                >
                  Mumbai | Thane | Raipur | Delhi
                </p>
              </div>
            </div>

            {/* Right Grid - 6 Columns of Links on desktop, 2 cols on mobile */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Products */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  Products
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['The Potential Meter AI', 'Xperience Platform', 'Hirenest', 'Talent Transformation', 'AI Hacknex'].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Case */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  Use Case
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Student Advantage Package',
                    'Campus Enablement Package',
                    'Enterprise Talent Solutions Package',
                    'Government & Csr Impact Package'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* School of Technology */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  School of Technology
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'ByteMinds-The School of AI & Data',
                    'Gasca-Global School Of Sustainability & Climate Action',
                    'Centre Of Digital & Design Excellence',
                    'School Of Ev & E- Mobility',
                    'Udaan Aerial Intelligence'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  Explore
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Job Simulations Master',
                    'Explore Domains',
                    'Career Trajectory',
                    'Skillza Persona'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insights */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  Insights
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Skill Blueprint',
                    'The Skill Digest',
                    'AI Talent Research Hub',
                    'The Skill Unplugged Podcast',
                    'Skillzza Live'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="footer-link-col">
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#71717B',
                    marginBottom: '16px',
                  }}
                >
                  Company
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'About us',
                    'Our Methodology',
                    'What We Do',
                    'Our Pathway',
                    'Partner Collaboration',
                    'Responsible AI'
                  ].map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#71717B',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#0F1114'}
                        onMouseLeave={(e) => e.target.style.color = '#71717B'}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stay Connected - Social Media Icons */}
          <div className="flex justify-center md:justify-end">
            <div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#71717B',
                  marginLeft: '12px',
                }}
              >
                Stay Connected
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: FaFacebookF, href: '#' },
                  { Icon: FaLinkedinIn, href: '#' },
                  { Icon: FaInstagram, href: '#' },
                  { Icon: FaTwitter, href: '#' },
                  { Icon: FaYoutube, href: '#' },
                  { Icon: FaPinterestP, href: '#' }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#71717B',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F1114'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#71717B'}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Red Bar */}
        <div
          style={{
            width: '100%',
            background: '#A21515',
            paddingTop: '16px',
            paddingBottom: '16px',
            marginTop: '40px',
          }}
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32">
            <div className="footer-bottom-bar flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left Side - Links */}
              <div className="footer-bottom-links flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
                <a
                  href="#"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Disclaimer
                </a>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Privacy Policy
                </a>
              </div>



              {/* Right Side - Company Name */}
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                }}
              >
                Edgespark IT Ventures Pvt.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
