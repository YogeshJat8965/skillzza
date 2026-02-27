import React, { useState, useEffect, useRef } from 'react';

const Challenge = () => {
  const [isVisible, setIsVisible] = useState({
    image: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const [counters, setCounters] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
  });
  
  const imageRef = useRef(null);
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
        // Toggle visibility - animations run every time element enters viewport
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: imageRef, type: 'image' },
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

  // Animate counters when cards become visible
  useEffect(() => {
    const targetValues = {
      card1: 69,
      card2: 74,
      card3: 59,
      card4: 63,
    };

    const animateCounter = (cardKey, targetValue) => {
      if (!isVisible[cardKey]) {
        // Reset counter when card leaves viewport
        setCounters(prev => ({ ...prev, [cardKey]: 0 }));
        return;
      }

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCounters(prev => ({ ...prev, [cardKey]: targetValue }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [cardKey]: Math.floor(increment * currentStep) }));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const cleanup1 = animateCounter('card1', targetValues.card1);
    const cleanup2 = animateCounter('card2', targetValues.card2);
    const cleanup3 = animateCounter('card3', targetValues.card3);
    const cleanup4 = animateCounter('card4', targetValues.card4);

    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
      cleanup4 && cleanup4();
    };
  }, [isVisible.card1, isVisible.card2, isVisible.card3, isVisible.card4]);

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
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    <section 
      className="w-full bg-white pb-16 lg:pb-20 relative" 
      style={{ 
        marginTop: '-80px', 
        paddingTop: '80px', 
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      
      {/* Heading and Description */}
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#0F1114',
              marginBottom: '16px',
            }}
          >
            The Challenge
          </h2>
          <h3 
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#0F1114',
              marginBottom: '24px',
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
            ref={imageRef}
            className={isVisible.image ? 'animate-slide-in-left' : 'opacity-0'}
            style={{
              background: '#F8F8F8 url(/img/Group%2037831.png) center center no-repeat',
              backgroundSize: 'contain',
              width: '778px',
              height: '756px',
              opacity: 1,
              borderRadius: '8px',
            }}
          >
          </div>

          {/* Right Side - Stats Cards */}
          <div 
            className="grid grid-cols-2 gap-6" 
            style={{ 
              width: '998px',
            }}
          >
            {/* Card 1: 69% */}
            <div 
              ref={card1Ref}
              className={isVisible.card1 ? 'animate-slide-from-right' : 'opacity-0'}
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
                {counters.card1}%
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
              ref={card2Ref}
              className={isVisible.card2 ? 'animate-slide-from-right delay-300' : 'opacity-0'}
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
                {counters.card2}%
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
              ref={card3Ref}
              className={isVisible.card3 ? 'animate-slide-from-right delay-600' : 'opacity-0'}
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
                {counters.card3}%
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
              ref={card4Ref}
              className={isVisible.card4 ? 'animate-slide-from-right delay-900' : 'opacity-0'}
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
                {counters.card4}%
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
    </>
  );
};

export default Challenge;
