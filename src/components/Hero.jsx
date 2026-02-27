import React from 'react';

const Hero = () => {
  return (
    <section
      className="w-full relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[907px]"
      style={{ backgroundImage: 'url(/img/Group%2037827.png)' }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 pt-8 sm:pt-12 lg:pt-0 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left — Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]">
              The AI-Powered Career Engine for Tomorrow's Talent
            </h1>

            <p className="mb-6 sm:mb-8 font-[Lato] text-[#71717B] font-normal leading-relaxed text-[15px] sm:text-base md:text-[17px] lg:text-lg">
              From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                className="text-white text-[13px] sm:text-sm lg:text-[15px] font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity font-[DM_Sans]"
                style={{ background: 'linear-gradient(90deg, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)' }}
              >
                Start Your Journey
              </button>

              <button className="bg-white text-[#CA2C2E] text-[13px] sm:text-sm lg:text-base font-semibold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg border border-[#CC2B2E] cursor-pointer hover:bg-gray-100 transition-all font-[Lato]">
                How It Works
              </button>
            </div>
          </div>

          {/* Right — Image (actual img tag, not empty div) */}
          <div className="flex-1 relative flex justify-center lg:justify-end w-full z-20">
            <img
              src="/img/02.png"
              alt="AI Career Engine illustration"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[918px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
