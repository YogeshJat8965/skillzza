import React from 'react';

const SkillzzaEcosystem = () => {
  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F3EBF9 35%, #E8D8F0 55%, #F3EBF9 80%, #FFFFFF 100%)' }}
    >
      {/* Header */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 text-center mb-8 sm:mb-10 lg:mb-14">
        <h2 className="mb-3 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
          Skillzza Ecosystem
        </h2>
        <p className="font-[Lato] text-[#71717B] font-normal italic leading-relaxed text-base sm:text-lg lg:text-xl">
          Empowering Every Learner, Every Step of the Way
        </p>
      </div>

      {/* Diagram */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <img
          src="/img/Group 37832.svg"
          alt="Skillzza Ecosystem diagram showing five interconnected platforms"
          className="w-full h-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default SkillzzaEcosystem;
