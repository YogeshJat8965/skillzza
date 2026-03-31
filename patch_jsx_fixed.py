import re

with open('src/pages/OurPathwayPage.jsx', 'r') as f:
    text = f.read()

# First replace the CSS section correctly
bad_css_start = "          /* page scoped mobile typography fixes */"
bad_css_end = "          .pathway-cards-grid {"

if bad_css_start in text and bad_css_end in text:
    to_replace = text[text.find(bad_css_start):text.find(bad_css_end)]
    new_css = """          /* Safe mobile typography fixes */
          .mob-title { font-size: 36px !important; line-height: 1.15 !important; white-space: normal !important; text-align: center !important; }
          .mob-subtitle { font-size: 24px !important; white-space: normal !important; text-align: center !important; }
          .mob-desc { font-size: 16px !important; white-space: normal !important; text-align: center !important; }
          .mob-desc-left { font-size: 16px !important; white-space: normal !important; text-align: left !important; }
          .mob-card-sdg { font-size: 36px !important; }
          .mob-card-title { font-size: 22px !important; line-height: 1.2 !important; }
          .mob-card-desc { font-size: 16px !important; }
          .mob-highlight-title { font-size: 22px !important; line-height: 1.2 !important;}
          .mob-highlight-desc { font-size: 16px !important; text-align: left !important; }
          .mob-serve-title { font-size: 20px !important; white-space: normal !important; }
          .mob-pill { font-size: 16px !important; min-width: 140px !important; width: 100% !important; padding: 12px 20px !important; }
          .mob-tab-btn { font-size: 18px !important; width: 100% !important; height: auto !important; padding: 14px !important; }
          .mob-cta-title { font-size: 32px !important; line-height: 1.2 !important; white-space: normal !important; text-align: center !important; }
          .mob-cta-desc { font-size: 16px !important; text-align: center !important; white-space: normal !important; }
          /* Allow unwrapping of spans in paragraph */
          .mob-wrap-spans span { white-space: normal !important; }
"""
    text = text.replace(to_replace, new_css)


def repl(pattern, replacement):
    global text
    text = re.sub(pattern, replacement, text, flags=re.DOTALL)

# Remove the tag from the group matching to avoid duplication.
# We will match `style={{...}}` and put `className="..." style={{...}}` instead.
# For some reason, the previous script matched the tag name.

def add_class(find_block, class_name):
    global text
    if find_block in text:
        text = text.replace(find_block, f'className="{class_name}"\n              {find_block}')

# 1. Our Commitment
# Our commitment small top text
p_commitment_sub = """style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}"""
add_class(p_commitment_sub, "mob-subtitle")

p_commitment_title = """style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.05',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
                marginBottom: '16px',
              }}"""
add_class(p_commitment_title, "mob-title")

p_commitment_desc = """style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                leadingTrim: 'none',
                color: '#3F3F46',
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
              }}"""
add_class(p_commitment_desc, "mob-desc mob-wrap-spans")

# 2. Cards Grid -> inside loop
# we can use exact match since they are repeated exactly
card_sdg = """style={{
                        fontFamily: 'League Spartan, sans-serif',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '1',"""
text = text.replace(card_sdg, 'className="mob-card-sdg"\n                        ' + card_sdg)

card_title = """style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: '28px',
                        lineHeight: '1.25',"""
text = text.replace(card_title, 'className="mob-card-title"\n                        ' + card_title)

card_desc = """style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '400',
                      fontSize: '22px',
                      lineHeight: '1.4',"""
text = text.replace(card_desc, 'className="mob-card-desc"\n                      ' + card_desc)


# 3. Pathway Difference
diff_sub = "The Skillzza Pathway Difference"
# Let's string match the parent p manually using sub
text = re.sub(r'(<p\n\s*style=\{\{\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 400,\n\s*fontSize: \'32px\')', r'<p className="mob-subtitle"\n              style={{\n                fontFamily: \'League Spartan, sans-serif\',\n                fontWeight: 400,\n                fontSize: \'32px\'', text)

text = re.sub(r'(<h2\n\s*style=\{\{\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 700,\n\s*fontSize: \'48px\')', r'<h2 className="mob-title"\n              style={{\n                fontFamily: \'League Spartan, sans-serif\',\n                fontWeight: 700,\n                fontSize: \'48px\'', text)

text = re.sub(r'(<h3\n\s*style=\{\{\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 600,\n\s*fontSize: \'30px\')', r'<h3 className="mob-highlight-title"\n                    style={{\n                      fontFamily: \'League Spartan, sans-serif\',\n                      fontWeight: 600,\n                      fontSize: \'30px\'', text)

text = re.sub(r'(<p\n\s*style=\{\{\n\s*fontFamily: \'DM Sans, sans-serif\',\n\s*fontWeight: 400,\n\s*fontSize: \'18px\')', r'<p className="mob-highlight-desc"\n                    style={{\n                      fontFamily: \'DM Sans, sans-serif\',\n                      fontWeight: 400,\n                      fontSize: \'18px\'', text)


# 4. Who we serve
text = re.sub(r'(<div\n\s*style=\{\{\n\s*color: \'#FFFFFF\',\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 600,\n\s*fontSize: \'24px\')', r'<div className="mob-serve-title"\n                      style={{\n                          color: \'#FFFFFF\',\n                        fontFamily: \'League Spartan, sans-serif\',\n                        fontWeight: 600,\n                        fontSize: \'24px\'', text)


# 5. Partnership Ecosystem
# pills already done mostly but we can add mob-pill
text = text.replace('className="pathway-pill"', 'className="pathway-pill mob-pill"')


# 6. Get Started
text = text.replace('className="pathway-tab-btn"', 'className="pathway-tab-btn mob-tab-btn"')

text = re.sub(r'(<div\n\s*style=\{\{\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 700,\n\s*fontSize: \'30px\')', r'<div className="mob-title"\n                style={{\n                  fontFamily: \'League Spartan, sans-serif\',\n                  fontWeight: 700,\n                  fontSize: \'30px\'', text)

text = re.sub(r'(<ul\n\s*style=\{\{\n\s*listStyle: \'none\',\n\s*padding: 0,\n\s*margin: 0,\n\s*display: \'flex\',\n\s*flexDirection: \'column\',\n\s*gap: \'18px\',\n\s*fontFamily: \'DM Sans, sans-serif\',\n\s*fontSize: \'20px\')', r'<ul className="mob-desc-left"\n                style={{\n                  listStyle: \'none\',\n                  padding: 0,\n                  margin: 0,\n                  display: \'flex\',\n                  flexDirection: \'column\',\n                  gap: \'18px\',\n                  fontFamily: \'DM Sans, sans-serif\',\n                  fontSize: \'20px\'', text)


# 7. CTA
text = re.sub(r'(<h2\n\s*style=\{\{\n\s*fontFamily: \'League Spartan, sans-serif\',\n\s*fontWeight: 600,\n\s*fontSize: \'42px\')', r'<h2 className="mob-cta-title"\n              style={{\n                fontFamily: \'League Spartan, sans-serif\',\n                fontWeight: 600,\n                fontSize: \'42px\'', text)

text = re.sub(r'(<p\n\s*style=\{\{\n\s*fontFamily: \'DM Sans, sans-serif\',\n\s*fontWeight: 400,\n\s*fontSize: \'16px\')', r'<p className="mob-cta-desc"\n              style={{\n                fontFamily: \'DM Sans, sans-serif\',\n                fontWeight: 400,\n                fontSize: \'16px\'', text)


with open('src/pages/OurPathwayPage.jsx', 'w') as f:
    f.write(text)

