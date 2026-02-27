import React, { useState } from 'react';

const Partnerships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, icon: '/img/g2475.svg', title: 'Schools / Universities', description: 'Partnering to Cultivate the Next Generation of Leaders', bgColor: '#E6E6E6' },
    { id: 2, icon: '/img/corporation.svg', title: 'Corporates', description: 'Driving Business Success through Workforce', bgColor: '#E6E6E6' },
    { id: 3, icon: '/img/government.svg', title: 'Government', description: 'Building a Skilled Workforce for a Stronger', bgColor: '#E6E6E6' },
    { id: 4, icon: '/img/Group%2023779.svg', title: 'Become our upskilling partner', description: 'Join Us in Shaping the Future of Work', bgColor: '#EAE8E8' },
  ];

  return (
    <section
      className="w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[873px]"
      style={{ backgroundImage: 'url(/img/Group%2037834.png)' }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 w-full py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center">
          {/* Left — Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
              Partnerships For <br className="hidden sm:block" />Impact
            </h2>
            <p className="mb-4 sm:mb-6 font-[Lato] text-[#71717B] font-normal leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg">
              At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce.
            </p>
            <p className="font-[Lato] text-[#71717B] font-normal leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg">
              Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
            </p>
          </div>

          {/* Right — Cards */}
          <div className="flex-1 w-full max-w-[650px] mx-auto lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`cursor-pointer transition-colors duration-300 flex flex-col justify-start p-5 sm:p-6 lg:p-7 min-h-[180px] sm:min-h-[200px] ${index === 1 || index === 3 ? 'sm:mt-[60px]' : ''}`}
                  style={{
                    background: hoveredCard === card.id ? '#9268A8' : card.bgColor,
                    boxShadow: '0px 3px 6px #00000029',
                    borderRadius: index === 0 ? '8px' : '20px',
                  }}
                >
                  <div className="mb-3 sm:mb-4">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 sm:w-11 sm:h-11 transition-all duration-300"
                      style={{ filter: hoveredCard === card.id ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)' }}
                    />
                  </div>
                  <h3
                    className="mb-2 sm:mb-3 font-[DM_Sans] font-semibold leading-tight text-base sm:text-lg lg:text-xl transition-colors duration-300"
                    style={{ color: hoveredCard === card.id ? '#FFFFFF' : '#0F1114' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-[Lato] font-normal leading-normal text-sm sm:text-[15px] lg:text-base transition-colors duration-300"
                    style={{ color: hoveredCard === card.id ? '#FFFFFF' : '#71717B' }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
