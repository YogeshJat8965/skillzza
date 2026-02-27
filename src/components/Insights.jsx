import React from 'react';

const InsightCard = ({ bgColor, imgSrc, imgAlt, tag, tagColor, title, buttonText }) => (
  <div className={`rounded-xl overflow-hidden flex flex-col h-full`} style={{ background: bgColor }}>
    <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[320px] overflow-hidden flex-shrink-0">
      <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
      {tag && (
        <span className="inline-block self-start py-1 px-3.5 rounded-full text-white text-xs sm:text-[13px] font-medium font-[DM_Sans] mb-3" style={{ background: tagColor }}>
          {tag}
        </span>
      )}
      <h3 className="font-[DM_Sans] text-[#0F1114] font-semibold leading-snug text-base sm:text-[17px] lg:text-lg xl:text-xl mb-4 flex-1">
        {title}
      </h3>
      <button className="self-start h-10 sm:h-11 px-4 sm:px-5 bg-transparent border border-[#0F1114] rounded-lg font-[DM_Sans] text-[#0F1114] text-xs sm:text-[13px] font-medium cursor-pointer hover:bg-[#0F1114] hover:text-white transition-all whitespace-nowrap">
        {buttonText}
      </button>
    </div>
  </div>
);

const Insights = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
            Insights
          </h2>
          <button className="h-10 sm:h-11 px-4 sm:px-6 bg-transparent border border-[#0F1114] rounded-lg font-[DM_Sans] text-[#0F1114] text-sm font-medium cursor-pointer hover:bg-[#0F1114] hover:text-white transition-all">
            View all the resources
          </button>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">
          {/* Left Column — Blog Card */}
          <div className="w-full lg:w-[28%] xl:w-1/4 flex-shrink-0">
            <div className="bg-[#F4F4FF] rounded-xl overflow-hidden flex flex-col h-full">
              <div className="w-full h-[180px] sm:h-[220px] lg:h-[250px] xl:h-[280px] overflow-hidden flex-shrink-0">
                <img src="/img/Mask%20Group%2096.png" alt="AI Assistant" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <img src="/img/Group%2034192.svg" alt="Icon" className="w-9 h-9 sm:w-10 sm:h-10" />
                </div>
                <h3 className="font-[DM_Sans] text-[#0F1114] font-semibold leading-snug text-base sm:text-[17px] lg:text-lg mb-5 flex-1">
                  Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI
                </h3>
                <button className="self-start h-10 sm:h-11 px-4 sm:px-5 bg-transparent border border-[#0F1114] rounded-lg font-[DM_Sans] text-[#0F1114] text-xs sm:text-[13px] font-medium cursor-pointer hover:bg-[#0F1114] hover:text-white transition-all whitespace-nowrap">
                  Read the Blog
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6">
            {/* Top Row — 2 Cards */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <div className="flex-1">
                <InsightCard
                  bgColor="#F4E3CC"
                  imgSrc="/img/Mask%20Group%20112.png"
                  imgAlt="AI Robot"
                  tag="Research & Insights"
                  tagColor="#E87444"
                  title="2025 AI Talent & Salary Benchmark Report"
                  buttonText="Read the reports"
                />
              </div>
              <div className="flex-1">
                <InsightCard
                  bgColor="#F7C9C9"
                  imgSrc="/img/Mask%20Group%2098.png"
                  imgAlt="Digital Interface"
                  tag="Research & Insights"
                  tagColor="#D02C2F"
                  title={<>The Skill Blueprint<br />AI & The Future of Work</>}
                  buttonText="Explore the Case studies"
                />
              </div>
            </div>

            {/* Bottom — Podcast Card */}
            <div className="bg-[#B6DFF5] rounded-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-7 lg:p-8">
              <div className="flex-1">
                <span className="inline-block py-1 px-3.5 bg-[#4A9FD8] rounded-full text-white text-xs sm:text-[13px] font-medium font-[DM_Sans] mb-3">
                  Podcast
                </span>
                <h3 className="font-[DM_Sans] text-[#0F1114] font-semibold leading-snug text-lg sm:text-xl md:text-2xl mb-3">
                  Skills DECODED:<br />
                  Conversations that matter.
                </h3>
                <p className="font-[DM_Sans] text-[#0F1114] font-normal leading-relaxed text-xs sm:text-[13px] lg:text-sm xl:text-[15px] m-0">
                  Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <img src="/img/Group%2034199.svg" alt="Microphone" className="w-12 sm:w-14 lg:w-16 xl:w-20 h-auto object-contain" />
                <button className="h-10 sm:h-11 px-4 sm:px-5 bg-transparent border border-[#0F1114] rounded-lg font-[DM_Sans] text-[#0F1114] text-xs sm:text-[13px] font-medium cursor-pointer hover:bg-[#0F1114] hover:text-white transition-all whitespace-nowrap">
                  Listen now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
