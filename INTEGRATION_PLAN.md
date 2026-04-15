# Skillzza — Selective Integration Plan

## Understanding

- **Organization repo** = source of truth (teammate's code). Everything there stays untouched.
- **Your repo** (`https://github.com/YogeshJat8965/skillzza.git`) = you only need 7 specific pages + their assets.
- **Do NOT merge** — no `git merge`, no `git pull`. Only `git checkout` specific files.
- **Do NOT touch**: Navbar, SecondNavbar, Footer, HomePage, or any existing org files.

---

## YOUR 7 PAGES — Full Dependency Map

### Page Files (src/pages/)
```
1. OurPathwayPage.jsx          (Company dropdown)
2. AboutPage.jsx               (Company dropdown)
3. PartnerCollaborationPage.jsx (Company dropdown)
4. InsightsPage.jsx            (Insights)
5. JobSimulationPage.jsx       (Explore dropdown)
6. XperiencePlatformPage.jsx   (Products dropdown)
7. AIHackNexPage.jsx           (Products dropdown)
```

### Component Dependencies
```
InsightsPage.jsx → imports Insights.jsx component
(All other pages are self-contained — no component imports needed)
```

### Bundled Assets (src/assets/) — imported with `import` statements
```
AIHackNexPage needs the ENTIRE folder:
  src/assets/AI Hacknex/     (53 files, ~17 MB)

XperiencePlatformPage needs the ENTIRE folder:
  src/assets/Xperience Platform – 1/   (67 files, ~18 MB)
```

### Public Assets (public/) — referenced via URL strings like `/Company/...`

**OurPathwayPage** needs:
```
public/Company/25412d49d304b2df2e2cae48121b10e56bca89fb.png
public/Company/1image.png, 2image.png, 3image.png, 4image.png
public/Company/1icon.png, 2icon.png, 3icon.png, 4icon.png
public/Company/Get Started TodayIndividuals.png
public/Company/Get Started TodayOrganizations.png
public/Company/Get Started TodayCommunities.png
public/Company/Partnership EcosystemIcon1-4.png
public/Company/Who We Serveicon1-6.png
public/Company/lastIcon1-4.png
public/Company/ourPathwayLatImage.png
public/Company/persons.png, rural.png, underemployed.png
public/Company/women.png, working.png, youth.png
public/Company/skillzzaLogo.png
public/Company/Ready to Transform Your LifeBacckgroundImage.png
public/Company/premium_photo-*.avif
→ SAFEST: Copy entire public/Company/ folder
```

**AboutPage** needs:
```
public/Company/about/  (entire folder — 5 files)
```

**PartnerCollaborationPage** needs:
```
public/Company/collaboration/  (entire folder — 19 files)
```

**JobSimulationPage** needs:
```
public/simulation/nvidia-logo-horiz-blk-16x9 1.png
public/simulation/pngwing.com.png
→ Copy entire public/simulation/ folder
```

**XperiencePlatformPage** needs images from `public/img/`:
```
public/img/Group 41584.png
public/img/Group 41361.png
public/img/young-female-teacher-*.png
public/img/Image 408.png
public/img/Mask Group 120.png
public/img/Mask Group 122.png
public/img/Group 41595.svg, 41596.svg, 41597.svg, 41598.svg
public/img/Group 41585-41600 (various)
public/img/management-service_10404416.svg
public/img/digital-business_17323178.svg
public/img/g5073.svg
public/img/layer1.svg
public/img/Group 41599.svg
→ SAFEST: Copy entire public/img/ folder
```

**InsightsPage** — uses only Unsplash external URLs + Insights component.
The Insights component needs:
```
public/img/Mask Group 96.png
public/img/Mask Group 112.png
public/img/Mask Group 98.png
public/img/Group 34192.svg
public/img/Group 34199.svg
→ Already covered when copying public/img/
```

---

## STEP-BY-STEP COMMANDS

### Step 1 — Clone the Organization Repo (Fresh Clone)

```bash
cd ~/Desktop/INTERNSHIP

# Clone org repo using PAT
git clone https://<YOUR_PAT>@github.com/<ORG_NAME>/<ORG_REPO>.git skillzza-org

cd skillzza-org
```

### Step 2 — Create Your Feature Branch

```bash
git checkout -b feat/yogesh-pages
```

### Step 3 — Add Your Personal Repo as a Remote

```bash
git remote add yogesh https://github.com/YogeshJat8965/skillzza.git
git fetch yogesh main
```

### Step 4 — Selectively Checkout ONLY Your Pages

```bash
# ── 4a. Page files ──
git checkout yogesh/main -- src/pages/OurPathwayPage.jsx
git checkout yogesh/main -- src/pages/AboutPage.jsx
git checkout yogesh/main -- src/pages/PartnerCollaborationPage.jsx
git checkout yogesh/main -- src/pages/InsightsPage.jsx
git checkout yogesh/main -- src/pages/JobSimulationPage.jsx
git checkout yogesh/main -- src/pages/XperiencePlatformPage.jsx
git checkout yogesh/main -- src/pages/AIHackNexPage.jsx

# ── 4b. Insights component (dependency of InsightsPage) ──
git checkout yogesh/main -- src/components/Insights.jsx

# ── 4c. Bundled assets (src/assets/) ──
git checkout yogesh/main -- "src/assets/AI Hacknex"
git checkout yogesh/main -- "src/assets/Xperience Platform – 1"

# ── 4d. Public assets ──
git checkout yogesh/main -- public/Company
git checkout yogesh/main -- public/simulation
git checkout yogesh/main -- public/img
```

> **NOTE**: `git checkout <remote>/<branch> -- <path>` copies ONLY those specific
> files/folders from your repo into the working tree, WITHOUT merging anything.
> Existing org files that are NOT in the checkout paths remain completely untouched.

### Step 5 — Add Routes to App.jsx (MANUAL EDIT)

Open `src/App.jsx` in the org repo and add your routes. You need to:

1. Add these **imports** (only if they don't already exist):
```jsx
import OurPathwayPage from './pages/OurPathwayPage'
import AboutPage from './pages/AboutPage'
import PartnerCollaborationPage from './pages/PartnerCollaborationPage'
import InsightsPage from './pages/InsightsPage'
import JobSimulationPage from './pages/JobSimulationPage'
import XperiencePlatformPage from './pages/XperiencePlatformPage'
import AIHackNexPage from './pages/AIHackNexPage'
```

2. Add these **routes** inside `<Routes>` (only if they don't already exist):
```jsx
<Route path="/company/our-pathway" element={<OurPathwayPage />} />
<Route path="/company/about" element={<AboutPage />} />
<Route path="/company/partner-collaboration" element={<PartnerCollaborationPage />} />
<Route path="/insights" element={<InsightsPage />} />
<Route path="/explore/job-simulation" element={<JobSimulationPage />} />
<Route path="/products/xperience-platform" element={<XperiencePlatformPage />} />
<Route path="/products/ai-hacknex" element={<AIHackNexPage />} />
```

> **IMPORTANT**: If any of these routes or imports already exist in the org App.jsx,
> skip them. If the org already has different pages at these routes, check with
> your teammate before overwriting.

### Step 6 — Install Any Missing Dependencies

```bash
# Check if react-icons is installed (your pages might use it)
npm ls react-icons 2>/dev/null || npm install react-icons

# Check if react-router-dom is installed
npm ls react-router-dom 2>/dev/null || npm install react-router-dom
```

### Step 7 — Verify the Build

```bash
npm install
npm run build
```

If there are errors, they will tell you exactly which file or import is missing.
Fix any remaining path issues.

### Step 8 — Test Locally

```bash
npm run dev
```

Visit each of your 7 pages in the browser:
- http://localhost:5173/company/our-pathway
- http://localhost:5173/company/about
- http://localhost:5173/company/partner-collaboration
- http://localhost:5173/insights
- http://localhost:5173/explore/job-simulation
- http://localhost:5173/products/xperience-platform
- http://localhost:5173/products/ai-hacknex

Also verify the Home page still works: http://localhost:5173/

### Step 9 — Commit and Push

```bash
git add -A
git commit -m "feat: add Yogesh's pages (Company, Insights, JobSim, Products)"
git push origin feat/yogesh-pages
```

### Step 10 — Open a Pull Request

Go to the org repo on GitHub and create a PR from `feat/yogesh-pages` → `main`.

---

## Summary of What Gets Copied vs What Stays Untouched

| What | Action |
|---|---|
| Org's Navbar, SecondNavbar, Footer | ❌ NOT TOUCHED |
| Org's HomePage | ❌ NOT TOUCHED |
| Org's existing components | ❌ NOT TOUCHED |
| Org's existing routes | ❌ NOT TOUCHED |
| Your 7 page files | ✅ ADDED to src/pages/ |
| Your Insights.jsx component | ✅ ADDED to src/components/ |
| Your src/assets/AI Hacknex/ | ✅ ADDED |
| Your src/assets/Xperience Platform – 1/ | ✅ ADDED |
| Your public/Company/ | ✅ ADDED |
| Your public/simulation/ | ✅ ADDED |
| Your public/img/ | ⚠️ MERGED (adds your images; existing img/ files may be overwritten if same name) |
| App.jsx routes | ✏️ MANUALLY EDITED to add 7 new routes |

---

## Risk: public/img/ Overlap

The `public/img/` folder likely has SOME files in the org repo too (logo, etc.).
When you `git checkout yogesh/main -- public/img`, it will overwrite files with
the same name. If the org's `public/img/` has different content for same-named
files, you could break their pages.

**Safe alternative**: Instead of checking out the entire `public/img/` folder,
checkout only the specific files your pages need:

```bash
git checkout yogesh/main -- "public/img/Group 41584.png"
git checkout yogesh/main -- "public/img/Group 41361.png"
git checkout yogesh/main -- "public/img/Image 408.png"
git checkout yogesh/main -- "public/img/Mask Group 120.png"
git checkout yogesh/main -- "public/img/Mask Group 122.png"
git checkout yogesh/main -- "public/img/Mask Group 96.png"
git checkout yogesh/main -- "public/img/Mask Group 112.png"
git checkout yogesh/main -- "public/img/Mask Group 98.png"
git checkout yogesh/main -- "public/img/Group 34192.svg"
git checkout yogesh/main -- "public/img/Group 34199.svg"
git checkout yogesh/main -- "public/img/Group 41595.svg"
git checkout yogesh/main -- "public/img/Group 41596.svg"
git checkout yogesh/main -- "public/img/Group 41597.svg"
git checkout yogesh/main -- "public/img/Group 41598.svg"
git checkout yogesh/main -- "public/img/Group 41599.svg"
git checkout yogesh/main -- "public/img/Group 41585.png"
git checkout yogesh/main -- "public/img/Group 41587.png"
git checkout yogesh/main -- "public/img/Group 41588.png"
git checkout yogesh/main -- "public/img/Group 41589.png"
git checkout yogesh/main -- "public/img/Group 41600.png"
git checkout yogesh/main -- "public/img/young-female-teacher-headphones-having-video-conference-call-with-teenage-girl-student-using-laptop-home-online-lesson-elearning-distance-remote-class.png"
git checkout yogesh/main -- "public/img/management-service_10404416.svg"
git checkout yogesh/main -- "public/img/digital-business_17323178.svg"
git checkout yogesh/main -- "public/img/g5073.svg"
git checkout yogesh/main -- "public/img/layer1.svg"
```
