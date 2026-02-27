import React from 'react';

const SchoolOfTechnology = () => {
  const tags = ['AI & Quantum', 'Sustainability & Climate Action', 'Aerial Intelligence', 'Design Thinking', 'EV & E-Mobility'];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left — Image (actual img tag) */}
          <div className="w-full lg:w-auto flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-0">
            <img
              src="/img/Group%2037833.png"
              alt="School of Technology illustration"
              className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[550px] xl:max-w-[650px] h-auto object-contain mx-auto lg:mx-0"
            />
          </div>

          {/* Right — Content */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <h2 className="mb-3 sm:mb-4 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
              School of Technology
            </h2>

            <h3 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#71717B] font-semibold leading-tight text-lg sm:text-xl md:text-2xl">
              Elevate Your Expertise with Future-Ready Skills
            </h3>

            <p className="mb-8 sm:mb-12 font-[Lato] text-[#71717B] font-normal leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg">
              Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.
            </p>

            <h4 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-lg sm:text-xl md:text-2xl">
              Areas of Expertise
            </h4>

            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#D4EDFA] rounded-full py-2.5 px-4 sm:px-5 font-[DM_Sans] text-[#0F1114] font-medium text-xs sm:text-sm lg:text-base"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolOfTechnology;
