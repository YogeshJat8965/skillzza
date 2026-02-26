import React from 'react';

const Insights = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        {/* Main Content - 2 Columns */}
        <div className="flex gap-8 mb-6">
          {/* Left Column - Heading + Button + Purple Card */}
          <div style={{ width: 'auto' }}>
            {/* Heading */}
            <h2
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
                marginTop: '40px',
              }}
            >
              Insights
            </h2>

            {/* View all resources button */}
            <button
              className="mb-8"
              style={{
                height: '48px',
                padding: '0 24px',
                background: 'transparent',
                border: '1px solid #0F1114',
                borderRadius: '8px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: '#0F1114',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '30px',
                marginBottom: '80px',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0F1114';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#0F1114';
              }}
            >
              View all the resources
            </button>

            {/* Purple Card */}
            <div
              style={{
                width: '505px',
                height: '861px',
                background: '#F4F4FF',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
                <img
                  src="/img/Mask%20Group%2096.png"
                  alt="AI Assistant"
                  style={{
                    width: '100%',
                    height: '449px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon */}
                <div style={{ marginBottom: '60px', marginTop: '40px' }}>
                  <img
                    src="/img/Group%2034192.svg"
                    alt="Icon"
                    style={{
                      width: '56px',
                      height: '56px',
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '30px',
                    fontWeight: 600,
                    lineHeight: '1.4',
                    color: '#393939',
                    marginBottom: 'auto',
                    paddingBottom: '24px',
                  }}
                >
                  Skill Gaps to Skill Maps: <br /> The Future of Adaptive <br /> Career Assessment <br /> with AI
                </h3>

                {/* Button */}
                <button
                  style={{
                    marginBottom: '20px',
                    width: '173px',
                    height: '48px',
                    padding: '0 16px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                >
                  Read the Blog
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Cards Side by Side */}
          <div style={{ flex: 1, display: 'flex', gap: '24px' }}>
            {/* Card 2 - AI Talent Report (Robot - Beige) */}
            <div
              style={{
                width: '491px',
                height: '776px',
                background: '#F4E3CC',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
                <img
                  src="/img/Mask%20Group%20112.png"
                  alt="AI Robot"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Tag */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    width: '206px',
                    height: '50px',
                    background: '#E87444',
                    borderRadius: '20px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    marginBottom: '40px',
                    marginTop: '40px',
                  }}
                >
                  Research & Insights
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                    color: '#393939',
                    marginBottom: 'auto',
                    paddingBottom: '24px',
                  }}
                >
                  2025 AI Talent & <br /> Salary Benchmark Report
                </h3>

                {/* Button */}
                <button
                  style={{
                    width: '188px',
                    height: '48px',
                    padding: '0 16px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                >
                  Read the reports
                </button>
              </div>
            </div>

            {/* Card 3 - Skill Blueprint (Digital Interface - Pink) */}
            <div
              style={{
                // bottom: '0',
                marginTop: '60px',
                width: '508px',
                height: '712px',
                background: '#F7C9C9',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
                <img
                  src="/img/Mask%20Group%2098.png"
                  alt="Digital Interface"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Tag */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    width: '206px',
                    height: '50px',
                    background: '#D02C2F',
                    borderRadius: '20px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    marginBottom: '40px',
                    marginTop: '40px',
                  }}
                >
                  Research & Insights
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '30px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                    color: '#393939',
                    marginBottom: 'auto',
                    paddingBottom: '24px',
                  }}
                >
                  The Skill Blueprint<br />
                  AI & The Future of Work
                </h3>

                {/* Button */}
                <button
                  style={{
                    width: '259px',
                    height: '48px',
                    padding: '0 16px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                >
                  Explore the Case studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Full Width Podcast Card */}
        <div
          style={{
            marginTop: '-370px',
            width: '1023px',
            height: '348px',
            marginLeft: '530px',
            background: '#B6DFF5',
            borderRadius: '12px',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            {/* Tag */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '206px',
                height: '50px',
                background: '#4A9FD8',
                borderRadius: '20px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '50px',
              }}
            >
              Podcast
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '30px',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#393939',
                marginBottom: '16px',
              }}
            >
              Skills DECODED:<br />
              Conversations that matter.
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.7',
                color: '#393939',
                maxWidth: '700px',
              }}
            >
              Tune in to The Skillzza Talks podcast where leaders, innovators, <br /> and changemakers unpack the skills reshaping careers, industries, <br /> and societies. Practical, insightful, and future-ready.
            </p>
          </div>

          {/* Right - Icon + Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <img
              src="/img/Group%2034199.svg"
              alt="Microphone"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
              }}
            />
            <button
              style={{
                height: '48px',
                padding: '0 16px',
                background: 'transparent',
                border: '1px solid #0F1114',
                borderRadius: '8px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: '#0F1114',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0F1114';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#0F1114';
              }}
            >
              Listen now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
