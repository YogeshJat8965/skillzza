import React from 'react';

const Challenge = () => {
  return (
    <section className="w-full bg-white pb-16 lg:pb-20 relative" style={{ marginTop: '-80px', paddingTop: '80px', zIndex: 10 }}>
      {/* Heading and Description */}
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 lg:mb-16">
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
            The Challenge
          </h2>
          <h3 
            className="mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#0F1114',
            }}
          >
            A Widening Skill Gap
          </h3>
          <p 
            className="max-w-4xl mx-auto"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#71717B',
            }}
          >
            As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1920px] mx-auto">
        <div className="flex gap-6 items-start">
          {/* Left Side - Image */}
          <div 
            style={{
              background: 'transparent url(/img/Group%2037831.png) 0% 0% no-repeat padding-box',
              width: '778px',
              height: '756px',
              opacity: 1,
            }}
          >
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6" style={{ width: '998px' }}>
            {/* Card 1: 69% */}
            <div 
              style={{
                background: '#D02C2F 0% 0% no-repeat padding-box',
                borderRadius: '8px',
                opacity: 1,
                width: '487px',
                height: '366px',
                padding: '32px 40px 40px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
                letterSpacing: '-0.5px',
              }}
            >
              <h4 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: '1',
                  color: '#FFFFFF',
                  marginBottom: '14px',
                }}
              >
                69%
              </h4>
              <h5 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                The Recruitment Crisis
              </h5>
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: '#FFFFFF',
                }}
              >
                Nearly 69% of organizations report <br /> ongoing difficulties recruiting for full-time <br /> roles reflecting persistent hiring <br /> challenges across sectors.
              </p>
            </div>

            {/* Card 2: 74% */}
            <div 
              style={{
                background: '#D02C2F 0% 0% no-repeat padding-box',
                borderRadius: '8px',
                opacity: 1,
                width: '487px',
                height: '366px',
                padding: '32px 40px 40px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <h4 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: '1',
                  color: '#FFFFFF',
                  marginBottom: '14px',
                }}
              >
                74%
              </h4>
              <h5 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                The AI Training Gap
              </h5>
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: '#FFFFFF',
                }}
              >
                Although 74% of employees use AI tools  at work, only 33% have received formal training to use them effectively and safely.
              </p>
            </div>

            {/* Card 3: 59% */}
            <div 
              style={{
                background: '#D02C2F 0% 0% no-repeat padding-box',
                borderRadius: '8px',
                opacity: 1,
                width: '487px',
                height: '366px',
                padding: '32px 40px 40px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <h4 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: '1',
                  color: '#FFFFFF',
                  marginBottom: '14px',
                }}
              >
                59%
              </h4>
              <h5 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                The Reskilling Imperative
              </h5>
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: '#FFFFFF',
                }}
              >
                By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025.
              </p>
            </div>

            {/* Card 4: 63% */}
            <div 
              style={{
                background: '#D02C2F 0% 0% no-repeat padding-box',
                borderRadius: '8px',
                opacity: 1,
                width: '487px',
                height: '366px',
                padding: '32px 40px 40px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <h4 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '96px',
                  fontWeight: 700,
                  lineHeight: '1',
                  color: '#FFFFFF',
                  marginBottom: '14px',
                }}
              >
                63%
              </h4>
              <h5 
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '32px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  marginBottom: '24px',
                }}
              >
                Skills Are the Biggest Barrier
              </h5>
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: '#FFFFFF',
                }}
              >
                With 63% of employers citing skill gaps as the top barrier to transformation, 85% plan to prioritize workforce upskilling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
