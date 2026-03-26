import React from 'react'

function PartnerCollaborationPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .collab-page {
          width: 100%;
          background: #f5f5f5;
          font-family: 'Poppins', sans-serif;
        }

        .collab-hero {
          position: relative;
          width: 100%;
          min-height: clamp(320px, 36vw, 470px);
          background-image: url('/Company/collaboration/heroSectionImage.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.8);
        }

        .collab-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7, 7, 12, 0.86) 0%, rgba(7, 7, 12, 0.62) 32%, rgba(7, 7, 12, 0.32) 56%, rgba(7, 7, 12, 0.12) 100%);
        }

        .collab-hero__inner {
          position: relative;
          z-index: 1;
          height: 100%;
          min-height: clamp(320px, 36vw, 470px);
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: clamp(28px, 5vw, 70px) clamp(22px, 6vw, 72px);
        }

        .collab-hero__title {
          margin: 0;
          font-size: clamp(36px, 4.2vw, 48px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: 0;
          color: #ffffff;
          max-width: 520px;
        }

        .collab-hero__title-highlight {
          color: #f3ad3a;
        }

        .collab-partners {
          background: #e8e8e8;
          padding: clamp(44px, 6vw, 70px) clamp(18px, 4vw, 34px) clamp(56px, 8vw, 78px);
        }

        .collab-partners__heading {
          margin: 0 auto 20px;
          max-width: 100%;
          font-size: clamp(26px, 2.4vw, 38px);
          font-weight: 600;
          line-height: 1;
          color: #101010;
          text-align: center;
          white-space: nowrap;
          display: block;
        }

        .collab-partners__intro {
          max-width: 1060px;
          margin: 0 auto clamp(26px, 3.4vw, 38px);
          font-size: clamp(16px, 1.7vw, 24px);
          line-height: 1.42;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #3f3f3f;
          text-align: center;
        }

        .collab-partners__grid {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .corporate-partnerships {
          background: #f5f5f5;
          padding: clamp(40px, 6vw, 72px) clamp(18px, 5vw, 60px) clamp(50px, 7vw, 80px);
        }

        .corporate-content {
          max-width: 1040px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          align-items: center;
        }

        .corporate-content__eyebrow {
          margin: 0;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #f3ad3a;
        }

        .corporate-content__title {
          margin: 0;
          font-size: clamp(30px, 3vw, 46px);
          font-weight: 600;
          color: #121212;
        }

        .corporate-content__subtitle {
          margin: 0;
          font-size: clamp(20px, 2.1vw, 30px);
          font-weight: 500;
          color: #1f1f1f;
        }

        .corporate-content__description {
          margin: 6px 0 0;
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.55;
          color: #374151;
        }

        .govt-overview {
          background: #f5f5f5;
          padding: clamp(10px, 2vw, 16px) clamp(18px, 5vw, 60px) clamp(40px, 6vw, 72px);
        }

        .govt-overview__content {
          max-width: 1040px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          align-items: center;
        }

        .govt-overview__title {
          margin: 0;
          font-size: clamp(30px, 3vw, 46px);
          font-weight: 600;
          color: #121212;
        }

        .govt-overview__subtitle {
          margin: 0;
          font-size: clamp(20px, 2.1vw, 30px);
          font-weight: 500;
          color: #1f1f1f;
        }

        .govt-overview__description {
          margin: 6px 0 0;
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.55;
          color: #374151;
        }

        .corporate-proof {
          background: #f5f5f5;
          padding: clamp(40px, 6vw, 80px) clamp(18px, 6vw, 70px) clamp(50px, 7vw, 90px);
        }

        .corporate-proof__inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: clamp(28px, 4.5vw, 70px);
        }

        .corporate-proof__content {
          flex: 1 1 56%;
        }

        .corporate-proof__heading {
          margin: 0 0 22px;
          font-size: clamp(23px, 2.3vw, 34px);
          font-weight: 600;
          color: #111827;
        }

        .corporate-proof__block + .corporate-proof__block {
          margin-top: 22px;
        }

        .corporate-proof__subheading {
          margin: 0 0 10px;
          font-size: clamp(17px, 1.9vw, 24px);
          font-weight: 600;
          color: #111827;
        }

        .corporate-proof__list {
          margin: 0;
          padding-left: 18px;
          font-size: clamp(14px, 1.3vw, 17px);
          line-height: 1.48;
          color: #1f2937;
        }

        .corporate-proof__list li + li {
          margin-top: 7px;
        }

        .corporate-proof__figure {
          flex: 0 0 auto;
          width: 360px;
        }

        .corporate-proof__image {
          width: 360px;
          height: 470px;
          border-radius: 22px;
          object-fit: cover;
          display: block;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.18);
        }

        .corporate-impact {
          background: #f5f5f5;
          padding: clamp(40px, 6vw, 80px) clamp(18px, 6vw, 70px) clamp(60px, 8vw, 100px);
        }

        .corporate-impact__inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          gap: clamp(28px, 5vw, 80px);
        }

        .corporate-impact__figure {
          flex: 0 0 auto;
          width: 380px;
          display: flex;
        }

        .corporate-impact__image {
          width: 380px;
          height: 480px;
          border-radius: 20px;
          box-shadow: 0 18px 35px rgba(15, 23, 42, 0.18);
          object-fit: cover;
          display: block;
        }

        .corporate-impact__content {
          flex: 1 1 52%;
        }

        .corporate-impact__heading {
          margin: 0 0 18px;
          font-size: clamp(23px, 2.2vw, 32px);
          font-weight: 600;
          color: #0f172a;
        }

        .corporate-impact__block + .corporate-impact__block {
          margin-top: 18px;
        }

        .corporate-impact__subheading {
          margin: 0 0 8px;
          font-size: clamp(16px, 1.9vw, 22px);
          font-weight: 600;
          color: #111827;
        }

        .corporate-impact__list {
          margin: 0;
          padding-left: 20px;
          font-size: clamp(13px, 1.3vw, 17px);
          line-height: 1.48;
          color: #1f2937;
        }

        .corporate-impact__list li + li {
          margin-top: 8px;
        }

        .partnership-models {
          background: #efefef;
          padding: clamp(48px, 6vw, 88px) clamp(18px, 6vw, 74px) clamp(64px, 8vw, 110px);
        }

        .partnership-models__inner {
          max-width: 1180px;
          margin: 0 auto;
          text-align: center;
        }

        .partnership-models__eyebrow {
          margin: 0;
          font-size: 14px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ee9735;
        }

        .partnership-models__heading {
          margin: 10px auto 16px;
          font-size: clamp(28px, 2.6vw, 40px);
          font-weight: 600;
          color: #0f172a;
          max-width: 600px;
          white-space: nowrap;
        }

        .partnership-models__intro {
          max-width: 720px;
          margin: 0 auto clamp(26px, 4vw, 40px);
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.6;
          color: #374151;
        }

        .partnership-models__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: clamp(18px, 3vw, 28px);
        }

        .partnership-models__card {
          position: relative;
          background: linear-gradient(135deg, #ffffff, #fdf5e4);
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.12);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .partnership-models__card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(243, 173, 58, 0.45), rgba(243, 173, 58, 0));
          opacity: 0.9;
          pointer-events: none;
        }

        .partnership-models__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 55px rgba(15, 23, 42, 0.18);
        }

        .partnership-models__card-title {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 600;
          color: #111827;
        }

        .partnership-models__card-text {
          margin: 0;
          font-size: 16px;
          line-height: 1.55;
          color: #4b5563;
        }

        .partnership-models__cta {
          margin: clamp(28px, 4vw, 42px) auto 0;
          font-size: clamp(18px, 1.8vw, 24px);
          font-weight: 500;
          color: #0f172a;
        }

        .collab-partners__card {
          background: #f3f3f3;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 9px rgba(30, 41, 59, 0.14);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .collab-partners__card-image {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
        }

        .collab-partners__card-title {
          min-height: 92px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px 14px;
          font-size: clamp(28px, 1.9vw, 40px);
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: 0.005em;
          color: #121212;
        }

        @media (max-width: 1200px) {
          .collab-partners__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .collab-hero {
            min-height: 290px;
            background-position: center;
          }

          .collab-hero__inner {
            min-height: 290px;
            align-items: center;
            padding: 26px 24px;
          }

          .collab-hero__title {
            font-size: clamp(22px, 7.2vw, 36px);
            max-width: 270px;
          }

          .collab-partners {
            padding: 30px 16px 48px;
          }

          .collab-partners__heading {
            font-size: clamp(20px, 5.4vw, 26px);
            margin-bottom: 12px;
          }

          .collab-partners__intro {
            font-size: clamp(16px, 4.1vw, 20px);
            line-height: 1.45;
            margin-bottom: 24px;
          }

          .collab-partners__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .collab-partners__card-image {
            height: 150px;
            object-fit: cover;
          }

          .collab-partners__card-title {
            min-height: 70px;
            font-size: clamp(16px, 4.4vw, 22px);
            padding: 14px 10px;
          }

          .corporate-content__eyebrow {
            font-size: 13px;
            letter-spacing: 0.14em;
          }

          .corporate-proof__inner {
            flex-direction: column-reverse;
          }

          .corporate-proof__figure,
          .corporate-proof__content {
            width: 100%;
          }

          .corporate-proof__image {
            border-radius: 20px;
          }

          .corporate-impact__inner {
            flex-direction: column;
            align-items: center;
          }

          .corporate-impact__figure,
          .corporate-impact__content {
            width: 100%;
          }

          .corporate-impact__figure {
            width: 100%;
          }

          .corporate-impact__image {
            border-radius: 20px;
            width: 100%;
            height: auto;
          }

          .partnership-models__grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 520px) {
          .collab-partners__grid {
            grid-template-columns: 1fr;
          }
        }

        .collab-cta {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          padding: clamp(56px, 8vw, 100px) clamp(22px, 6vw, 72px);
          text-align: center;
        }

        .collab-cta__inner {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
        }

        .collab-cta__title {
          margin: 0;
          font-size: clamp(30px, 3.2vw, 46px);
          font-weight: 700;
          color: #f3ad3a;
          line-height: 1.15;
        }

        .collab-cta__text {
          margin: 0;
          font-size: clamp(16px, 1.7vw, 22px);
          line-height: 1.6;
          color: #cbd5e1;
          font-weight: 400;
        }

        .collab-cta__tagline {
          margin: 8px 0 0;
          font-size: clamp(18px, 1.9vw, 26px);
          font-weight: 600;
          color: #ffffff;
          font-style: italic;
        }
      `}</style>
      <main className="collab-page">
        {/* ===== HERO ===== */}
        <section className="collab-hero">
          <div className="collab-hero__inner">
            <h1 className="collab-hero__title">
              <span className="collab-hero__title-highlight">Empowering</span> Futures
              <br />
              Together
            </h1>
          </div>
        </section>

        {/* ===== STRATEGIC PARTNERSHIPS GRID ===== */}
        <section className="collab-partners">
          <h2 className="collab-partners__heading">Strategic Partnerships That Transform Futures</h2>
            <p className="collab-partners__intro">
                Skillzza forges strategic alliances across sectors to drive meaningful skill development and innovation. Our collaborative approach delivers customized solutions that meet the unique needs of corporates, governments, and educational institutions creating shared value and sustainable impact.
            </p>
          <div className="collab-partners__grid">
            <article className="collab-partners__card">
              <img className="collab-partners__card-image" src="/Company/collaboration/corporates.jpg" alt="Corporates" />
              <h3 className="collab-partners__card-title">Corporates</h3>
            </article>
            <article className="collab-partners__card">
              <img className="collab-partners__card-image" src="/Company/collaboration/govtCardImg.jpg" alt="Government" />
              <h3 className="collab-partners__card-title">Government</h3>
            </article>
            <article className="collab-partners__card">
              <img className="collab-partners__card-image" src="/Company/collaboration/school_unversity_img.jpeg" alt="Educational institutions" />
              <h3 className="collab-partners__card-title">Educational Institutions</h3>
            </article>
          </div>
        </section>

        {/* ===== CORPORATE PARTNERSHIPS OVERVIEW ===== */}
        <section className="corporate-partnerships">
          <div className="corporate-content">
            <h3 className="corporate-content__title">Corporate Partnerships</h3>
            <h4 className="corporate-content__subtitle">Upskill Your Workforce. Empower Innovation.</h4>
            <p className="corporate-content__description">
              In today's rapidly evolving business landscape, organizations need agile, skilled talent to stay competitive.
              Skillzza partners with forward-thinking companies to create future-ready upskilling and reskilling programs that align with your strategic vision.
            </p>
          </div>
        </section>

        {/* ===== WHY CHOOSE SKILLZZA (Corporate - text left, image right) ===== */}
        <section className="corporate-proof">
          <div className="corporate-proof__inner">
            <div className="corporate-proof__content">
              <h3 className="corporate-proof__heading">Why Choose Skillzza as Your Learning Partner?</h3>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Tailored Workforce Solutions</h4>
                <ul className="corporate-proof__list">
                  <li>Custom learning ecosystems designed for your industry's specific challenges</li>
                  <li>Scalable programs that grow with your organization</li>
                  <li>ROI-focused training that delivers measurable results</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Enhanced Employee Experience</h4>
                <ul className="corporate-proof__list">
                  <li>Cutting-edge skills development that boosts engagement and retention</li>
                  <li>Career progression pathways that attract top talent</li>
                  <li>Performance-driven learning that increases productivity</li>
                </ul>
              </div>
            </div>
            <figure className="corporate-proof__figure">
              <img
                className="corporate-proof__image"
                src="/Company/collaboration/for_corporate_only_img1.jpg"
                alt="Corporate leaders collaborating during a learning session"
              />
            </figure>
          </div>
        </section>

        {/* ===== FUTURE-FIRST PARTNERSHIPS (Corporate - image left, text right) ===== */}
        <section className="corporate-impact">
          <div className="corporate-impact__inner">
            <figure className="corporate-impact__figure">
              <img
                className="corporate-impact__image"
                src="/Company/collaboration/corporate%20partnership%20image%202.jpg"
                alt="Professionals collaborating during a corporate partnership workshop"
              />
            </figure>
            <div className="corporate-impact__content">
              <h3 className="corporate-impact__heading">Future-First Partnerships That Deliver Impact</h3>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Future-Focused Curriculum</h4>
                <ul className="corporate-impact__list">
                  <li>AI, emerging technologies, and digital transformation training</li>
                  <li>Leadership development and soft skills enhancement</li>
                  <li>Sustainability and green skills for responsible business growth</li>
                </ul>
              </div>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Meaningful CSR Impact</h4>
                <ul className="corporate-impact__list">
                  <li>Purpose-driven programs that uplift underserved communities</li>
                  <li>Skills-based social impact initiatives with measurable outcomes</li>
                  <li>Employee volunteer opportunities that build team culture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTNERSHIP MODELS CARDS (Corporate) ===== */}
        <section className="partnership-models">
          <div className="partnership-models__inner">
            <h3 className="partnership-models__heading">Partnership Models We Offer</h3>
            <div className="partnership-models__grid">
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Custom Learning Academies</h4>
                <p className="partnership-models__card-text">End-to-end skill development programs tailored to your workforce.</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Innovation Challenges</h4>
                <p className="partnership-models__card-text">Hackathons and bootcamps to discover and nurture internal talent.</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">CSR Skill Initiatives</h4>
                <p className="partnership-models__card-text">Community-focused programs that create social value while engaging employees.</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Skillzza Xperience Platform</h4>
                <p className="partnership-models__card-text">Immersive virtual simulations for hands-on learning and assessment.</p>
              </article>
            </div>
            <p className="partnership-models__cta">Ready to build a workforce that's skilled for today and prepared for tomorrow?</p>
          </div>
        </section>

        {/* ===== GOVERNMENT PARTNERSHIPS OVERVIEW ===== */}
        <section className="govt-overview">
          <div className="govt-overview__content">
            <h3 className="govt-overview__title">Government Partnerships</h3>
            <h4 className="govt-overview__subtitle">Building a Skilled Nation Together</h4>
            <p className="govt-overview__description">
              Skillzza collaborates with government bodies at every level to design scalable, sustainable skill
              development programs that bridge workforce gaps, accelerate economic growth, and promote social equity
              across communities.
            </p>
          </div>
        </section>

        {/* ===== HOW WE EMPOWER GOVERNMENTS (text left, image right) ===== */}
        <section className="corporate-proof">
          <div className="corporate-proof__inner">
            <div className="corporate-proof__content">
              <h3 className="corporate-proof__heading">How We Empower Governments:</h3>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Policy-Integrated Programs</h4>
                <ul className="corporate-proof__list">
                  <li>Co-develop initiatives aligned with national development goals and UN SDGs</li>
                  <li>Evidence-based program design with clear success metrics</li>
                  <li>Flexible implementation models adapted to local contexts</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Employment-Ready Training</h4>
                <ul className="corporate-proof__list">
                  <li>Industry-specific upskilling in high-demand sectors (AI, EV, renewable energy, healthcare)</li>
                  <li>Job placement partnerships with leading employers</li>
                  <li>Entrepreneurship development for economic self-reliance</li>
                </ul>
              </div>
            </div>
            <figure className="corporate-proof__figure">
              <img
                className="corporate-proof__image"
                src="/Company/collaboration/howWeSupportGovt_image1.jpg"
                alt="Government partnership collaboration for skill development"
              />
            </figure>
          </div>
        </section>

        {/* ===== PUBLIC-PRIVATE PARTNERSHIPS (image left, text right) ===== */}
        <section className="corporate-impact">
          <div className="corporate-impact__inner">
            <figure className="corporate-impact__figure">
              <img
                className="corporate-impact__image"
                src="/Company/collaboration/KeyGovtCollaborationAreas_image2.jpg"
                alt="Key government collaboration areas"
              />
            </figure>
            <div className="corporate-impact__content">
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Public-Private Partnerships</h4>
                <ul className="corporate-impact__list">
                  <li>Collaborative funding and implementation models</li>
                  <li>Industry expertise combined with public reach</li>
                  <li>Sustainable programs with long-term impact</li>
                </ul>
              </div>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Technology-Enabled Delivery</h4>
                <ul className="corporate-impact__list">
                  <li>Digital-first platforms for accessible, scalable learning</li>
                  <li>Real-time progress tracking and impact measurement</li>
                  <li>Mobile-friendly solutions for diverse populations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRIORITY FOCUS AREAS (text left, image right) ===== */}
        <section className="corporate-proof">
          <div className="corporate-proof__inner">
            <div className="corporate-proof__content">
              <h3 className="corporate-proof__heading">Priority Focus Areas:</h3>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Youth Empowerment</h4>
                <ul className="corporate-proof__list">
                  <li>Job-ready skills for emerging workforce</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Women's Economic Participation</h4>
                <ul className="corporate-proof__list">
                  <li>Gender-inclusive skill programs</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Rural Development</h4>
                <ul className="corporate-proof__list">
                  <li>Bringing opportunities to underserved regions</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Green Transition</h4>
                <ul className="corporate-proof__list">
                  <li>Skills for sustainable economy jobs</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Digital Inclusion</h4>
                <ul className="corporate-proof__list">
                  <li>Bridging the digital divide through skill development</li>
                </ul>
              </div>
            </div>
            <figure className="corporate-proof__figure">
              <img
                className="corporate-proof__image"
                src="/Company/collaboration/GovImage3.jpeg"
                alt="Priority focus areas for government partnerships"
              />
            </figure>
          </div>
        </section>

        {/* ===== OUR PROVEN ENGAGEMENT PROCESS CARDS (Government) ===== */}
        <section className="partnership-models">
          <div className="partnership-models__inner">
            <h3 className="partnership-models__heading">Our Proven Engagement Process:</h3>
            <div className="partnership-models__grid">
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Vision Alignment</h4>
                <p className="partnership-models__card-text">Understanding your development priorities and constraints</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Strategic Co-Creation</h4>
                <p className="partnership-models__card-text">Designing impactful, evidence-based programs</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Technology-Enabled Delivery</h4>
                <p className="partnership-models__card-text">Implementing with digital tools for scale and efficiency</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Impact Measurement</h4>
                <p className="partnership-models__card-text">Continuous monitoring and evaluation for sustainable success</p>
              </article>
            </div>
            <p className="partnership-models__cta">Together, let's build a skilled and future-ready nation.</p>
          </div>
        </section>

        {/* ===== EDUCATIONAL PARTNERSHIPS OVERVIEW ===== */}
        <section className="govt-overview">
          <div className="govt-overview__content">
            <h3 className="govt-overview__title">Educational Partnerships</h3>
            <h4 className="govt-overview__subtitle">Empowering Students for Tomorrow's World</h4>
            <p className="govt-overview__description">
              Skillzza partners with schools and educational institutions to equip young minds with
              essential 21st-century skills. Our programs go beyond traditional academics to inspire
              innovation, creativity, and leadership—preparing students to become tomorrow's
              changemakers.
            </p>
          </div>
        </section>

        {/* ===== WHY EDUCATIONAL INSTITUTIONS CHOOSE SKILLZZA (image left, text right) ===== */}
        <section className="corporate-impact">
          <div className="corporate-impact__inner">
            <figure className="corporate-impact__figure">
              <img
                className="corporate-impact__image"
                src="/Company/collaboration/education%20image%203.png"
                alt="Educational partnerships skill development"
              />
            </figure>
            <div className="corporate-impact__content">
              <h3 className="corporate-impact__heading">Why Educational Institutions Choose Skillzza:</h3>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Holistic Skill Development</h4>
                <ul className="corporate-impact__list">
                  <li>Critical thinking, communication, collaboration, and creativity</li>
                  <li>Social-emotional learning integrated with technical skills</li>
                  <li>Growth mindset and resilience building</li>
                </ul>
              </div>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Future-Ready Learning</h4>
                <ul className="corporate-impact__list">
                  <li>Hands-on exposure to AI, robotics, and emerging technologies</li>
                  <li>Sustainability education and climate action projects</li>
                  <li>Design thinking and entrepreneurship workshops</li>
                </ul>
              </div>
              <div className="corporate-impact__block">
                <h4 className="corporate-impact__subheading">Real-World Application</h4>
                <ul className="corporate-impact__list">
                  <li>Project-based learning with industry connections</li>
                  <li>Hackathons and innovation challenges</li>
                  <li>Community problem-solving initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CAREER & EDUCATOR EXCELLENCE (text left, image right) ===== */}
        <section className="corporate-proof">
          <div className="corporate-proof__inner">
            <div className="corporate-proof__content">
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Career & College Preparation</h4>
                <ul className="corporate-proof__list">
                  <li>Industry-aligned curriculum development</li>
                  <li>Higher education pathway guidance</li>
                  <li>Professional skill development and networking</li>
                </ul>
              </div>
              <div className="corporate-proof__block">
                <h4 className="corporate-proof__subheading">Educator Excellence</h4>
                <ul className="corporate-proof__list">
                  <li>Teacher training in modern pedagogies and digital tools</li>
                  <li>Professional development workshops</li>
                  <li>Collaborative curriculum design support</li>
                </ul>
              </div>
            </div>
            <figure className="corporate-proof__figure">
              <img
                className="corporate-proof__image"
                src="/Company/collaboration/education%20image2.jpeg"
                alt="Educator excellence and career preparation"
              />
            </figure>
          </div>
        </section>

        {/* ===== COMPREHENSIVE PROGRAM OFFERINGS (image left, text right) ===== */}
        <section className="corporate-impact">
          <div className="corporate-impact__inner">
            <figure className="corporate-impact__figure">
              <img
                className="corporate-impact__image"
                style={{ borderRadius: 0, boxShadow: 'none' }}
                src="/Company/collaboration/education%20Image1.png"
                alt="Comprehensive educational program offerings"
              />
            </figure>
            <div className="corporate-impact__content">
              <h3 className="corporate-impact__heading">Comprehensive Program Offerings:</h3>
              <div className="corporate-impact__block">
                <ul className="corporate-impact__list">
                  <li><strong>Skill Development Bootcamps:</strong> Intensive programs in technology, creativity, and leadership</li>
                  <li><strong>STEM Innovation Labs:</strong> Hands-on science, technology, engineering, and math experiences</li>
                  <li><strong>Sustainability Champions:</strong> Environmental leadership and climate action programs</li>
                  <li><strong>Creative Arts Integration:</strong> Design thinking, media, and artistic expression workshops</li>
                  <li><strong>Career Exploration:</strong> Industry mentorship and professional skill development</li>
                  <li><strong>Teacher Excellence Programs:</strong> Educator training and curriculum enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR IMPACT COMMITMENT CARDS (Education) ===== */}
        <section className="partnership-models">
          <div className="partnership-models__inner">
            <h3 className="partnership-models__heading">Our Impact Commitment:</h3>
            <div className="partnership-models__grid">
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Future Workforce Readiness</h4>
                <p className="partnership-models__card-text">Skills and mindset for tomorrow's job market</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Inclusive Access</h4>
                <p className="partnership-models__card-text">Reaching underserved and diverse student communities</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Sustainability Leadership</h4>
                <p className="partnership-models__card-text">Inspiring climate action and environmental stewardship</p>
              </article>
              <article className="partnership-models__card">
                <h4 className="partnership-models__card-title">Leadership Development</h4>
                <p className="partnership-models__card-text">Building confidence, resilience, and social responsibility</p>
              </article>
            </div>
            <p className="partnership-models__cta">Let's shape the innovators and leaders of tomorrow—together.</p>
          </div>
        </section>

        {/* ===== CTA - READY TO PARTNER ===== */}
        <section className="collab-cta">
          <div className="collab-cta__inner">
            <h2 className="collab-cta__title">Ready to Partner with Skillzza?</h2>
            <p className="collab-cta__text">
              Contact us today to explore how we can create impactful, sustainable skill development programs tailored to your unique needs and goals.
            </p>
            <p className="collab-cta__tagline">Together, we're not just building skills, we're building futures.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default PartnerCollaborationPage
