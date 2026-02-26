import React from 'react';

const OurPartners = () => {
  const firstRowPartners = [
    { img: '/img/Group%2023862.png', alt: 'NSDC' },
    { img: '/img/Group%2034185.png', alt: 'Adobe' },
    { img: '/img/Group%2023863.png', alt: 'Meta' },
    { img: '/img/Mask%20Group%2030.png', alt: 'Microsoft' },
    { img: '/img/Group%2023839.png', alt: 'Google' },
  ];

  const secondRowPartners = [
    { img: '/img/Group%2023838.png', alt: 'Startup India' },
    { img: '/img/Group%2023867.png', alt: 'Ministry of MSME' },
    { img: '/img/Group%2023868.png', alt: 'Startup India' },
    { img: '/img/Group%2023869.png', alt: 'HP' },
    { img: '/img/Group%2023864.png', alt: 'AWS' },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#0F1114',
            }}
          >
            Our Partners
          </h2>
          <p 
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#71717B',
            }}
          >
            Take your skill transformation to the next level.
          </p>
        </div>

        {/* First Row - Scrolling Right to Left */}
        <div className="relative mb-8" style={{ height: '112px' }}>
          <div 
            className="absolute flex gap-8"
            style={{
              animation: 'scrollRightToLeft 30s linear infinite',
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...firstRowPartners, ...firstRowPartners, ...firstRowPartners].map((partner, index) => (
              <div
                key={`first-${index}`}
                style={{
                  width: '293px',
                  height: '112px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img 
                  src={partner.img} 
                  alt={partner.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left to Right */}
        <div className="relative" style={{ height: '112px' }}>
          <div 
            className="absolute flex gap-8"
            style={{
              animation: 'scrollLeftToRight 30s linear infinite',
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...secondRowPartners, ...secondRowPartners, ...secondRowPartners].map((partner, index) => (
              <div
                key={`second-${index}`}
                style={{
                  width: '293px',
                  height: '112px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img 
                  src={partner.img} 
                  alt={partner.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
