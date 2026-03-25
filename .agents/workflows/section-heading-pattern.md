---
description: Standard section heading pattern used across all pages in the Skillzza website
---

# Section Heading Pattern

This pattern MUST be used for all section headings across the entire Skillzza website.

## Typography
```
font-family: League Spartan
font-weight: 700 (Bold)
font-size: 48px (use clamp for responsiveness: clamp(32px, 4vw, 48px))
line-height: 100%
letter-spacing: 0%
text-align: center
```

## Colors
```
color: #CF0C0C (red)
```

## Text Shadow
```
text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25)
(equivalent to box-shadow: 0px 4px 0px 0px #00000040 in design spec)
```

## JSX Implementation Example
```jsx
<h2
  style={{
    fontFamily: 'League Spartan, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(32px, 4vw, 48px)',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#CF0C0C',
    textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
  }}
>
  Section Heading Text Here
</h2>
```

## Notes
- Always use League Spartan font (imported via Google Fonts)
- Font import: `@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');`
- The heading color is always #CF0C0C (red)
- The text shadow gives a subtle depth effect
- No italic styles — all text should be normal/upright
