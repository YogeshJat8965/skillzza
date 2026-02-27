import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  const linkColumns = [
    { title: 'Products', items: ['The Potential Meter AI', 'Xperience Platform', 'Hirenest', 'Talent Transformation', 'AI Hacknex'] },
    { title: 'Use Case', items: ['Student Advantage Package', 'Campus Enablement Package', 'Enterprise Talent Solutions Package', 'Government & Csr Impact Package'] },
    { title: 'School of Technology', items: ['ByteMinds-The School of AI & Data', 'Gasca-Global School Of Sustainability & Climate Action', 'Centre Of Digital & Design Excellence', 'School Of Ev & E- Mobility', 'Udaan Aerial Intelligence'] },
    { title: 'Explore', items: ['Job Simulations Master', 'Explore Domains', 'Career Trajectory', 'Skillza Persona'] },
    { title: 'Insights', items: ['Skill Blueprint', 'The Skill Digest', 'AI Talent Research Hub', 'The Skill Unplugged Podcast', 'Skillzza Live'] },
    { title: 'Company', items: ['About us', 'Our Methodology', 'What We Do', 'Our Pathway', 'Partner Collaboration', 'Responsible AI'] },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaLinkedinIn, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaYoutube, href: '#' },
    { Icon: FaPinterestP, href: '#' },
  ];

  return (
    <footer className="w-full bg-[#F4F4F5] pt-8 sm:pt-10 lg:pt-[60px] pb-6 sm:pb-8 lg:pb-10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Left — Logo + Address */}
          <div className="md:col-span-3">
            <div className="mb-6 sm:mb-8">
              <img
                src="/img/SKillzza%20Logo%20123-01.png"
                alt="Skillzza Logo"
                className="w-[200px] sm:w-[240px] lg:w-[260px] xl:w-[288px] h-auto"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="font-[DM_Sans] text-[#71717B] text-sm sm:text-[15px] font-semibold mb-2.5">
                Registered Office
              </h3>
              <p className="font-[Lato] text-[#71717B] text-xs sm:text-[13px] font-normal leading-relaxed">
                Skillzza, WeWork India, Chromium, CTS No. 106/1-5<br />
                Jogeshwari—Vikhroli Link Road, Milind Nagar,<br />
                Powai, Mumbai – 400076
              </p>
            </div>

            <div>
              <h3 className="font-[DM_Sans] text-[#71717B] text-sm sm:text-[15px] font-semibold mb-2.5">
                Our Presence
              </h3>
              <p className="font-[Lato] text-[#71717B] text-xs sm:text-[13px] font-normal">
                Mumbai | Thane | Raipur | Delhi
              </p>
            </div>
          </div>

          {/* Right — Link Columns */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-[DM_Sans] text-[#71717B] text-sm sm:text-[15px] font-semibold mb-3 sm:mb-3.5">
                  {column.title}
                </h3>
                <ul className="list-none p-0 m-0">
                  {column.items.map((item, index) => (
                    <li key={index} className="mb-2 sm:mb-2.5">
                      <a
                        href="#"
                        className="font-[Lato] text-[#71717B] text-xs sm:text-[13px] font-normal no-underline hover:text-[#0F1114] transition-colors break-words"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end">
          <div>
            <h3 className="mb-3 text-center md:text-left font-[DM_Sans] text-[#71717B] text-sm sm:text-[15px] font-semibold">
              Stay Connected
            </h3>
            <div className="flex gap-2 sm:gap-3 lg:gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#71717B] hover:text-[#0F1114] transition-colors"
                >
                  <Icon size={18} />
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
        <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between">
            {/* Left Side - Links */}
            <div className="flex items-center gap-8">
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
  );
};

export default Footer;
