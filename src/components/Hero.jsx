import React from 'react';

const Hero = () => {
  return (
    <section 
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/img/Group%2037827.png)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        minHeight: '907px',
        opacity: 1,
      }}
    >
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 pt-0 pb-16 lg:pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 max-w-2xl">
            {/* Main Heading */}
            <h1 
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              The AI-Powered Career Engine for Tomorrow's Talent
            </h1>

            {/* Subheading */}
            <p 
              className="mb-8"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Start Your Journey Button */}
              <button
                className="transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(90deg, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)',
                  borderRadius: '8px',
                  padding: '18px 40px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                Start Your Journey
              </button>

              {/* How It Works Button */}
              <button
                className="transition-all hover:bg-gray-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '18px 40px',
                  border: '1px solid #CC2B2E',
                  cursor: 'pointer',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#CA2C2E',
                }}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative flex justify-center lg:justify-end" style={{ zIndex: 20 }}>
            <div 
              className="relative"
              style={{
                background: 'transparent url(/img/02.png) 0% 0% no-repeat padding-box',
                width: '918px',
                height: '918px',
                opacity: 1,
                backgroundSize: 'contain',
                zIndex: 20,
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
