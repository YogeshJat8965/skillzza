import React, { useState } from 'react';

const Partnerships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      icon: '/img/g2475.svg',
      title: 'Schools / Universities',
      description: 'Partnering to Cultivate the Next Generation of Leaders',
      bgColor: '#E6E6E6',
      borderRadius: '8px',
    },
    {
      id: 2,
      icon: '/img/corporation.svg',
      title: 'Corporates',
      description: 'Driving Business Success through Workforce',
      bgColor: '#E6E6E6',
      borderRadius: '20px',
    },
    {
      id: 3,
      icon: '/img/government.svg',
      title: 'Government',
      description: 'Building a Skilled Workforce for a Stronger',
      bgColor: '#E6E6E6',
      borderRadius: '20px',
    },
    {
      id: 4,
      icon: '/img/Group%2023779.svg',
      title: 'Become our upskilling partner',
      description: 'Join Us in Shaping the Future of Work',
      bgColor: '#EAE8E8',
      borderRadius: '20px',
    },
  ];

  return (
    <section 
      className="w-full relative flex items-center justify-center"
      style={{
        width: '100%',
        height: '873px',
        background: 'transparent url(/img/Group%2037834.png) 0% 0% no-repeat padding-box',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }}
    >
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 h-full flex items-center pt-20">
        <div className="flex gap-12 w-full">
          {/* Left Side - Content */}
          <div className="flex-1 max-w-xl">
            <h2 
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              Partnerships For <br /> Impact
            </h2>
            <p 
              className="mb-6"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce.
            </p>
            <p 
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
            </p>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="relative flex items-center" style={{ width: '650px', height: '520px' }}>
            <div className="relative" style={{ width: '650px', height: '520px' }}>
            {/* Card 1: Schools/Universities - Top Left */}
            <div
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '310px',
                height: '215px',
                background: hoveredCard === 1 ? '#9268A8 0% 0% no-repeat padding-box' : '#E6E6E6 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '8px',
                opacity: 1,
                padding: '32px 24px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={cards[0].icon} 
                  alt={cards[0].title}
                  style={{
                    width: '50px',
                    height: '50px',
                    filter: hoveredCard === 1 ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: hoveredCard === 1 ? '#FFFFFF' : '#0F1114',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[0].title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: hoveredCard === 1 ? '#FFFFFF' : '#71717B',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[0].description}
              </p>
            </div>

            {/* Card 2: Corporates - Top Right (offset down) */}
            <div
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'absolute',
                top: '60px',
                left: '340px',
                width: '310px',
                height: '215px',
                background: hoveredCard === 2 ? '#9268A8 0% 0% no-repeat padding-box' : '#E6E6E6 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '20px',
                opacity: 1,
                padding: '32px 24px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={cards[1].icon} 
                  alt={cards[1].title}
                  style={{
                    width: '50px',
                    height: '50px',
                    filter: hoveredCard === 2 ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: hoveredCard === 2 ? '#FFFFFF' : '#0F1114',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[1].title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: hoveredCard === 2 ? '#FFFFFF' : '#71717B',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[1].description}
              </p>
            </div>

            {/* Card 3: Government - Bottom Left */}
            <div
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'absolute',
                top: '235px',
                left: '0px',
                width: '310px',
                height: '215px',
                background: hoveredCard === 3 ? '#9268A8 0% 0% no-repeat padding-box' : '#E6E6E6 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '20px',
                opacity: 1,
                padding: '32px 24px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={cards[2].icon} 
                  alt={cards[2].title}
                  style={{
                    width: '50px',
                    height: '50px',
                    filter: hoveredCard === 3 ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: hoveredCard === 3 ? '#FFFFFF' : '#0F1114',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[2].title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: hoveredCard === 3 ? '#FFFFFF' : '#71717B',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[2].description}
              </p>
            </div>

            {/* Card 4: Become our upskilling partner - Bottom Right */}
            <div
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'absolute',
                top: '295px',
                left: '340px',
                width: '310px',
                height: '215px',
                background: hoveredCard === 4 ? '#9268A8 0% 0% no-repeat padding-box' : '#EAE8E8 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                borderRadius: '20px',
                opacity: 1,
                padding: '32px 24px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img 
                  src={cards[3].icon} 
                  alt={cards[3].title}
                  style={{
                    width: '50px',
                    height: '50px',
                    filter: hoveredCard === 4 ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: hoveredCard === 4 ? '#FFFFFF' : '#0F1114',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[3].title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: hoveredCard === 4 ? '#FFFFFF' : '#71717B',
                  transition: 'color 0.3s ease',
                }}
              >
                {cards[3].description}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
