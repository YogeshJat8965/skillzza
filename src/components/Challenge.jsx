import React, { useState, useEffect, useRef } from 'react';

const Challenge = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
    description: false,
    image: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
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
      { ref: titleRef, type: 'title' },
      { ref: subtitleRef, type: 'subtitle' },
      { ref: descriptionRef, type: 'description' },
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

    return () =>observer.disconnect();
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
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(30px) scale(0.85) rotate(3deg);
          }
          60% {
            opacity: 1;
            transform: translateX(-5px) translateY(-5px) scale(1.02) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-card-slide {
          animation: cardSlideIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.25s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.5s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.75s;
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
            ref={titleRef}
            className={`mb-4 ${isVisible.title ? 'animate-fade-in-down' : 'opacity-0'}`}
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
            ref={subtitleRef}
            className={`mb-6 ${isVisible.subtitle ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}
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
            ref={descriptionRef}
            className={`max-w-4xl mx-auto ${isVisible.description ? 'animate-scale-in delay-200' : 'opacity-0'}`}
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
              className={isVisible.card1 ? 'animate-card-slide' : 'opacity-0'}
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
              ref={card2Ref}
              className={isVisible.card2 ? 'animate-card-slide delay-200' : 'opacity-0'}
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
              ref={card3Ref}
              className={isVisible.card3 ? 'animate-card-slide delay-400' : 'opacity-0'}
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
              ref={card4Ref}
              className={isVisible.card4 ? 'animate-card-slide delay-600' : 'opacity-0'}
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
    </>
  );
};

export default Challenge;
