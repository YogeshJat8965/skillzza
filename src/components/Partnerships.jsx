import React, { useState, useEffect, useRef } from 'react';

const Partnerships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    content: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const contentRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: contentRef, type: 'content' },
      { ref: card1Ref, type: 'card1' },
      { ref: card2Ref, type: 'card2' },
      { ref: card3Ref, type: 'card3' },
      { ref: card4Ref, type: 'card4' },
    ];

    refs.forEach(({ ref, type }) => {
      if (ref.current) {
        ref.current.dataset.elementType = type;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    { id: 1, icon: '/img/g2475.svg', title: 'Schools / Universities', description: 'Partnering to Cultivate the Next Generation of Leaders', bgColor: '#E6E6E6' },
    { id: 2, icon: '/img/corporation.svg', title: 'Corporates', description: 'Driving Business Success through Workforce', bgColor: '#E6E6E6' },
    { id: 3, icon: '/img/government.svg', title: 'Government', description: 'Building a Skilled Workforce for a Stronger', bgColor: '#E6E6E6' },
    { id: 4, icon: '/img/Group%2023779.svg', title: 'Become our upskilling partner', description: 'Join Us in Shaping the Future of Work', bgColor: '#EAE8E8' },
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
  const cardVisibility = [isVisible.card1, isVisible.card2, isVisible.card3, isVisible.card4];
  const cardDelays = ['', '', '', ''];

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(400px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slide-from-right {
          animation: slideInFromRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    <section
      className="w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[873px]"
      style={{ backgroundImage: 'url(/img/Group%2037834.png)' }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 w-full py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center justify-center">
          {/* Left — Content */}
          <div 
            ref={contentRef}
            className={`flex-1 max-w-xl lg:text-left text-center ${isVisible.content ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-[64px]">
              Partnerships For <br className="hidden sm:block" />Impact
            </h2>
            <p className="mb-4 sm:mb-6 font-[Lato] text-[#71717B] font-normal leading-relaxed text-[24px]">
              At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce.
            </p>
            <p className="font-[Lato] text-[#71717B] font-normal leading-relaxed text-[24px]">
              Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
            </p>
          </div>

          {/* Right — Cards */}
          <div className="flex-1 w-full max-w-[650px] mx-auto lg:mx-0 gap-x-[12px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-14 gap-y-0">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={cardRefs[index]}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`cursor-pointer transition-all duration-300 ease-out flex flex-col justify-start p-5 sm:p-6 lg:p-7 h-[240px] sm:h-[260px] ${index === 1 || index === 3 ? 'sm:mt-[60px]' : ''} ${cardVisibility[index] ? `animate-slide-from-right ${cardDelays[index]}` : 'opacity-0'}`}
                  style={{
                    background: hoveredCard === card.id ? '#9268A8' : card.bgColor,
                    boxShadow: hoveredCard === card.id ? '0px 20px 40px rgba(0, 0, 0, 0.15)' : '0px 3px 6px #00000029',
                    borderRadius: index === 0 ? '8px' : '20px',
                    transform: hoveredCard === card.id ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
                  }}
                >
                  <div className="mb-3 sm:mb-4">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 sm:w-11 sm:h-11 transition-all duration-300"
                      style={{ 
                        filter: hoveredCard === card.id ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                        transform: hoveredCard === card.id ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)'
                      }}
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
    </>
  );
};

export default Partnerships;
