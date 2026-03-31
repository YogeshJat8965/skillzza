import re

with open('src/pages/OurPathwayPage.jsx', 'r') as f:
    text = f.read()

def repl(pattern, replacement):
    global text
    text = re.sub(pattern, replacement, text, flags=re.DOTALL)

# 1. Our Commitment
repl(r'(style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'32px\',\s*lineHeight: \'1\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*color: \'#0F0F0F\',\s*marginBottom: \'12px\',\s*\}\}\s*>\s*Our Commitment)',
     r'className="mob-subtitle" \1')

repl(r'(style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'48px\',\s*lineHeight: \'1.05\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*color: \'#CF0C0C\',\s*textShadow: \'0px 4px 0px rgba\(0, 0, 0, 0.25\)\',\s*marginBottom: \'16px\',\s*\}\}\s*>\s*Building a More Equitable World Through Skills)',
     r'className="mob-title" \1')

repl(r'(style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 300,\s*fontStyle: \'normal\',\s*fontSize: \'28px\',\s*lineHeight: \'1\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*leadingTrim: \'none\',\s*color: \'#3F3F46\',\s*width: \'100%\',\s*maxWidth: \'1280px\',\s*margin: \'0 auto\',\s*\}\}\s*>)',
     r'className="mob-desc mob-wrap-spans" \1')

# 2. Cards Grid -> inside loop
repl(r'(<h3\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: \'700\',\s*fontSize: \'48px\')',
     r'<h3 className="mob-card-sdg" \1')

repl(r'(<p\s*style=\{\{\s*fontFamily: \'DM Sans, sans-serif\',\s*fontWeight: \'700\',\s*fontSize: \'28px\')',
     r'<p className="mob-card-title" \1')

repl(r'(<p\s*style=\{\{\s*fontFamily: \'DM Sans, sans-serif\',\s*fontWeight: \'400\',\s*fontSize: \'22px\')',
     r'<p className="mob-card-desc" \1')

# 3. Pathway Difference
repl(r'(<p\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'32px\',\s*lineHeight: \'1\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*color: \'#0F0F0F\',\s*marginBottom: \'14px\',\s*\}\}\s*>\s*The Skillzza Pathway Difference)',
     r'<p className="mob-subtitle" \1')

repl(r'(<h2\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'48px\',\s*lineHeight: \'1\',\s*color: \'#CF0C0C\',\s*textShadow: \'0px 4px 0px rgba\(0, 0, 0, 0.25\)\',\s*\}\}\s*>\s*Building a More Equitable World Through Skills)',
     r'<h2 className="mob-title" \1')

repl(r'(<h3\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 600,\s*fontSize: \'30px\')',
     r'<h3 className="mob-highlight-title" \1')

repl(r'(<p\s*style=\{\{\s*fontFamily: \'DM Sans, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'18px\')',
     r'<p className="mob-highlight-desc" \1')

# 4. Who we serve
repl(r'(<p\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'32px\',\s*lineHeight: \'1\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*color: \'#0F0F0F\',\s*marginBottom: \'12px\',\s*\}\}\s*>\s*Who We Serve)',
     r'<p className="mob-subtitle" \1')

repl(r'(<h2\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'48px\',\s*lineHeight: \'1\',\s*color: \'#CF0C0C\',\s*textShadow: \'0px 4px 0px rgba\(0, 0, 0, 0.25\)\',\s*\}\}\s*>\s*Creating Opportunities for Everyone)',
     r'<h2 className="mob-title" \1')

repl(r'(<div\s*style=\{\{\s*color: \'#FFFFFF\',\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 600,\s*fontSize: \'24px\')',
     r'<div className="mob-serve-title" \1')

# 5. Partnership Ecosystem
repl(r'(<p\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'32px\',\s*lineHeight: 1,\s*color: \'#0F0F0F\',\s*marginBottom: \'10px\',\s*\}\}\s*>\s*Partnership Ecosystem)',
     r'<p className="mob-subtitle" \1')

repl(r'(<h2\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'48px\',\s*lineHeight: 1,\s*color: \'#C00F0F\',\s*textShadow: \'0px 4px 0px rgba\(0, 0, 0, 0.25\)\',\s*marginBottom: \'42px\',\s*\}\}\s*>\s*Collaborating for Greater Impact)',
     r'<h2 className="mob-title" \1')

repl(r'(className="pathway-pill")(\s*style=\{\{)', r'\1 \2') # We already handled pill in mob-pill but let's add it
text = text.replace('className="pathway-pill"', 'className="pathway-pill mob-pill"')

# 6. Get Started
repl(r'(<p\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 400,\s*fontSize: \'32px\',\s*lineHeight: \'1\',\s*letterSpacing: \'0%\',\s*textAlign: \'center\',\s*color: \'#0F0F0F\',\s*marginBottom: \'12px\',\s*\}\}\s*>\s*Get Started Today)',
     r'<p className="mob-subtitle" \1')

repl(r'(<h2\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'48px\',\s*lineHeight: \'1.05\',\s*color: \'#CF0C0C\',\s*textShadow: \'0px 4px 0px rgba\(0, 0, 0, 0.25\)\',\s*marginBottom: \'18px\',\s*\}\}\s*>\s*Choose Your Path to Impact)',
     r'<h2 className="mob-title" \1')

repl(r'(className="pathway-tab-btn")', r'className="pathway-tab-btn mob-tab-btn"')

repl(r'(<div\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 700,\s*fontSize: \'30px\',\s*color: \'#8A0303\',\s*\}\}\s*>\s*\{activeTabContent\.heading\})',
     r'<div className="mob-title" \1')

repl(r'(<ul\s*style=\{\{\s*listStyle: \'none\',\s*padding: 0,\s*margin: 0,\s*display: \'flex\',\s*flexDirection: \'column\',\s*gap: \'18px\',\s*fontFamily: \'DM Sans, sans-serif\',\s*fontSize: \'20px\')',
     r'<ul className="mob-desc" \1')

# 7. CTA
repl(r'(<h2\s*style=\{\{\s*fontFamily: \'League Spartan, sans-serif\',\s*fontWeight: 600,\s*fontSize: \'42px\')',
     r'<h2 className="mob-cta-title" \1')


with open('src/pages/OurPathwayPage.jsx', 'w') as f:
    f.write(text)

