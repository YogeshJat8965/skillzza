import re

with open('src/pages/OurPathwayPage.jsx', 'r') as f:
    text = f.read()

bad_css_start = "          /* page scoped mobile typography fixes */"
bad_css_end = "          .pathway-cards-grid {"

to_replace = text[text.find(bad_css_start):text.find(bad_css_end)]

new_css = """          /* Safe mobile typography fixes */
          .mob-title { font-size: 36px !important; line-height: 1.15 !important; white-space: normal !important; }
          .mob-subtitle { font-size: 24px !important; white-space: normal !important; }
          .mob-desc { font-size: 16px !important; white-space: normal !important; }
          .mob-card-sdg { font-size: 36px !important; }
          .mob-card-title { font-size: 22px !important; line-height: 1.2 !important; }
          .mob-card-desc { font-size: 16px !important; }
          .mob-highlight-title { font-size: 22px !important; }
          .mob-highlight-desc { font-size: 16px !important; }
          .mob-serve-title { font-size: 20px !important; white-space: normal !important; }
          .mob-pill { font-size: 16px !important; min-width: 140px !important; width: 100% !important; padding: 12px 20px !important; }
          .mob-tab-btn { font-size: 18px !important; width: 100% !important; height: auto !important; padding: 14px !important; }
          .mob-cta-title { font-size: 32px !important; line-height: 1.2 !important; white-space: normal !important; }
          /* Allow unwrapping of spans in paragraph */
          .mob-wrap-spans span { white-space: normal !important; }
"""

text = text.replace(to_replace, new_css)

with open('src/pages/OurPathwayPage.jsx', 'w') as f:
    f.write(text)

