import React, { useState } from 'react';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    countryCode: '+91',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section 
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: `url('/img/Group%2037835.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '1000px',
      }}
    >
      <div className="max-w-[1920px] mx-auto flex items-center py-40">
        {/* Left - Business Image */}
        <div className="flex-shrink-0">
          <img 
            src="/img/businesspeople-having-discussion-office.png" 
            alt="Business meeting"
            style={{
              width: '1000px',
              height: '640px',
            //   objectFit: 'contain',
            }}
          />
        </div>

        {/* Right - Form Section */}
        <div className="flex-1 px-12 lg:px-16 xl:px-20">
            {/* Heading */}
            <h2 
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '60px',
                fontWeight: 500,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              Partner with us<br />
              To make a Difference
            </h2>

            {/* Description */}
            <p 
              className="mb-12"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#414040',
                maxWidth: '440px',
              }}
            >
              Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: '60px',
                    padding: '0 20px',
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px',
                    color: '#71717B',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: '60px',
                    padding: '0 20px',
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px',
                    color: '#71717B',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Mobile Number with Country Code */}
              <div className="flex gap-3 mb-4" style={{ maxWidth: '440px' }}>
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={{
                    width: '95px',
                    height: '60px',
                    padding: '0 12px',
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    color: '#71717B',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="+91">India +91</option>
                  <option value="+1">USA +1</option>
                  <option value="+44">UK +44</option>
                </select>

                {/* Mobile Number Input */}
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{
                    flex: 1,
                    height: '60px',
                    padding: '0 20px',
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '16px',
                    color: '#71717B',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: '60px',
                    background: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#1a1a1a'}
                  onMouseLeave={(e) => e.target.style.background = '#000000'}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
};

export default PartnerForm;
