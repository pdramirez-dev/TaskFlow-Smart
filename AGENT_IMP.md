# TaskFlow Smart Landing Page Implementation Specification

## Project Objective

Build a production-ready marketing landing page for **TaskFlow Smart**, an AI task manager iOS app.

The site must:

• Provide Apple App Store Privacy Policy URL  
• Provide Support URL  
• Provide Marketing URL  
• Present the app professionally  
• Deploy automatically via GitHub Pages  
• Be lightweight and fast  
• Follow modern SaaS landing standards  

---

# Repository

GitHub Repository:

https://github.com/pdramirez-dev/TaskFlow-Smart

Deployment target:

https://pdramirez-dev.github.io/TaskFlow-Smart/

---

# Tech Stack

Framework:
Astro (latest)

Language:
TypeScript

Styling:
TailwindCSS

Deployment:
GitHub Pages

CI/CD:
GitHub Actions

Rendering:
Static generation only

No SSR required.

Astro static output is ideal because GitHub Pages hosts static sites. :contentReference[oaicite:0]{index=0}

---

# Core Requirements

## Functional

Create:

/ → Landing page  
/privacy → Privacy Policy  
/support → Support page  
/404 → Custom error page  

## Non-Functional

Must be:

Responsive  
Fast  
Static  
Accessible  
SEO friendly  
Minimal JS  
No backend  
No database  
No authentication  

---

# Branding

App Name:

TaskFlow Smart

Subtitle:

AI Task Manager & Daily Planner

Tagline:

Organize your day with AI

Tone:

Modern  
Minimal  
Apple style  
Professional  
Clean  

Design inspiration:

Apple
Notion
Todoist
Things app

---

# Site Architecture

Pages:

src/pages/index.astro  
src/pages/privacy.astro  
src/pages/support.astro  
src/pages/404.astro  

Layouts:

src/layouts/BaseLayout.astro

Components:

src/components/Header.astro  
src/components/Footer.astro  
src/components/Hero.astro  
src/components/Features.astro  
src/components/FeatureCard.astro  
src/components/CTA.astro  
src/components/Screenshots.astro  

---

# Required File Structure

TaskFlow-Smart/

public/
favicon.svg
icon.png
screenshots/

src/

components/
Header.astro
Footer.astro
Hero.astro
FeatureCard.astro
Features.astro
CTA.astro
Screenshots.astro

layouts/
BaseLayout.astro

pages/
index.astro
privacy.astro
support.astro
404.astro

styles/
global.css

.github/workflows/
deploy.yml

astro.config.mjs
package.json
tsconfig.json
README.md

---

# Astro Configuration

astro.config.mjs:

IMPORTANT:

GitHub Pages requires site + base config.

Astro must know repo path because GitHub Pages deploys under:

username.github.io/repository-name :contentReference[oaicite:1]{index=1}

Use:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({

site:
'https://pdramirez-dev.github.io',

base:
'/TaskFlow-Smart',

integrations:
[tailwind()]

});