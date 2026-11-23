# Portfolio Christian Sobotta

My personal portfolio website as a frontend developer, built with Angular.

**Live:** [christian-sobotta.de](https://christian-sobotta.de)

## About the project

The site is a one-pager with the sections Hero, About me, Skills, Portfolio, References and Contact, plus separate pages for the legal notice and the privacy policy.

- Available in German and English, the chosen language is saved in the browser
- Responsive layout for desktop, tablet and mobile
- Contact form with validation, sent via a small PHP mail script
- All pages are prerendered at build time, so the site runs on regular web hosting without Node.js

## Tech stack

- Angular 22 (standalone components, signals, reactive forms)
- TypeScript
- SCSS
- Angular SSR for prerendering
- PHP for the contact form
- Vitest for unit tests

## Getting started

Requirements: Node.js 22.22 or 24.15 (or newer) and npm.

```bash
git clone https://github.com/chrisk2708/Portfolio.git
cd Portfolio
npm install
npm start
```

The development server runs at `http://localhost:4200`. The contact form only works on a server with PHP, so locally it shows the error message after sending.

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm start`     | Starts the development server           |
| `npm run build` | Creates the production build in `dist/` |
| `npm test`      | Runs the unit tests                     |

## Project structure

```
public/
├── assets/          images, icons, fonts and global SCSS
├── sendMail.php     mail script for the contact form
└── .htaccess        HTTPS redirect and fallback to the start page
src/app/
├── hero/ about/ skills/ projects/ testimonials/ contact/
├── header/ footer/
├── imprint/ privacy/
├── interfaces/      data types for projects, skills and references
└── services/        translations and scrolling to anchors
```

## Deployment

```bash
npm run build
```

Upload the contents of `dist/Portfolio/browser/` to the web space. The `server/` folder is not needed, because every page is already prerendered.

## Contact

Christian Sobotta

- Website: [christian-sobotta.de](https://christian-sobotta.de)
- LinkedIn: [christian-sobotta](https://www.linkedin.com/in/christian-sobotta-16786b450/)
- GitHub: [chrisk2708](https://github.com/chrisk2708)
