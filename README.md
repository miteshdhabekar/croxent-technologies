# Croxent Technologies Website

React 19 + Vite + Tailwind CSS v4, React Router, Motion (framer-motion), React Hook Form, Lucide icons.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

## Structure
```
src/
  components/ layout/ navigation/ common/ cards/ forms/
  pages/      Home, About, Services, ServiceDetail, Industries, Solutions,
              Careers, Insights, BlogDetail, Contact, PrivacyPolicy, Terms, NotFound
  data/       services, industries, technologies, projects, articles, approach
  config/     company.js   <- all contact details and API settings
  hooks/      useSeo.js    (title, description, Open Graph, canonical per page)
  utils/      submitForm.js (backend integration point), formatDate.js
public/       favicon, robots.txt, sitemap.xml, _redirects (Netlify)
vercel.json   SPA rewrite for Vercel
```

## Replace placeholders
1. Edit `src/config/company.js`: set `contact.email`, `phone`, `address`, `emailHref` (e.g. `mailto:...`), `phoneHref` (`tel:...`) and `social.linkedin`. Fields starting with `PLACEHOLDER` display as "to be added" and render no link.
2. Copy `.env.example` to `.env` and set `VITE_SITE_URL`.
3. In `public/robots.txt` and `public/sitemap.xml`, replace `www.example.com` with your domain.
4. The legal pages are drafts: have a lawyer review `PrivacyPolicy.jsx` and `Terms.jsx`.

## Content
- Technologies: `src/data/technologies.js`
- Case studies: `src/data/projects.js` (illustrative concepts; replace with verified work)
- Articles: `src/data/articles.js` (`date` stays `null` and `isSample: true` until genuinely published)
- Open roles: the `openRoles` array in `src/pages/Careers.jsx` (empty shows the no-openings message)

## Forms and backend
Forms (`/contact`, `/careers`) call `submitForm()` in `src/utils/submitForm.js`.
- Without `VITE_API_BASE_URL`, the form says it is not connected and the message was not sent. Success shows only after a real 2xx response.
- Set `VITE_API_BASE_URL` to your Spring Boot API. It receives JSON `POST` requests at `/api/contact` and `/api/talent` (configurable in `company.js`).
- A hidden honeypot field is included. Also add server-side validation, rate limiting and CAPTCHA on the API.
- Never put secrets in `VITE_` variables; they are public in the browser bundle.

## Deploy
- **Vercel:** import the repo, framework Vite. `vercel.json` handles SPA routing.
- **Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles SPA routing.

## Testing done
Production build; all routes (including 404s) at 375/768/1280px with no console errors or horizontal overflow; form validation and honest failure state; blog filter; mobile menu.
