import React from 'react';

const Challenge = () => {
  const cards = [
    { stat: '69%', title: 'The Recruitment Crisis', desc: 'Nearly 69% of organizations report ongoing difficulties recruiting for full-time roles reflecting persistent hiring challenges across sectors.' },
    { stat: '74%', title: 'The AI Training Gap', desc: 'Although 74% of employees use AI tools at work, only 33% have received formal training to use them effectively and safely.' },
    { stat: '59%', title: 'The Reskilling Imperative', desc: 'By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025.' },
    { stat: '63%', title: 'Skills Are the Biggest Barrier', desc: 'With 63% of employers citing skill gaps as the top barrier to transformation, 85% plan to prioritize workforce upskilling.' },
  ];

  return (
    <section className="w-full bg-white pb-12 sm:pb-16 lg:pb-20 relative" style={{ marginTop: '-80px', paddingTop: '80px', zIndex: 10 }}>
      {/* Heading */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="mb-3 sm:mb-4 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
            The Challenge
          </h2>
          <h3 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[42px]">
            A Widening Skill Gap
          </h3>
          <p className="max-w-4xl mx-auto font-[Lato] text-[#71717B] font-normal leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg">
            As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left — Image (actual img, hidden on mobile) */}
          <div className="hidden lg:block flex-shrink-0 w-[40%] xl:w-auto">
            <img
              src="/img/Group%2037831.png"
              alt="Skill gap illustration"
              className="w-full max-w-[778px] h-auto object-contain"
            />
          </div>

          {/* Right — Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 flex-1 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#D02C2F] rounded-lg p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col justify-center items-start text-left min-h-[220px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[366px]"
              >
                <h4 className="mb-2 sm:mb-3 font-[DM_Sans] text-white font-bold leading-none text-[36px] sm:text-5xl md:text-6xl lg:text-[72px]">
                  {card.stat}
                </h4>
                <h5 className="mb-3 sm:mb-4 font-[DM_Sans] text-white font-semibold leading-tight text-base sm:text-lg md:text-xl lg:text-2xl">
                  {card.title}
                </h5>
                <p className="font-[Lato] text-white font-normal leading-normal text-sm sm:text-[15px] lg:text-base">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
