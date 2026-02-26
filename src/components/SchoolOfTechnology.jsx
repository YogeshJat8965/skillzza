import React from 'react';

const SchoolOfTechnology = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          {/* Left Side - Image */}
          <div 
            style={{
              left: '0px',
              width: '650px',
              height: '665px',
              background: 'transparent url(/img/Group%2037833.png) 0% 0% no-repeat padding-box',
              backgroundSize: 'contain',
              opacity: 1,
            }}
          >
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 px-12 lg:px-24 xl:px-32">
            {/* Main Heading */}
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
              School of Technology
            </h2>

            {/* Subheading */}
            <h3 
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '1.2',
                color: '#71717B',
              }}
            >
              Elevate Your Expertise with Future-Ready Skills
            </h3>

            {/* Description */}
            <p 
              className="mb-12"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.
            </p>

            {/* Areas of Expertise */}
            <h4 
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              Areas of Expertise
            </h4>

            {/* Tags/Pills */}
            <div className="flex flex-wrap gap-4">
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                AI & Quantum
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Sustainability & Climate Action
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Aerial Intelligence
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Design Thinking
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                EV & E-Mobility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolOfTechnology;
