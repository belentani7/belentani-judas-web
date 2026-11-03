# BIBLIA.md — belentani-judas-web

Doctrina del producto: visión, misión, reglas de desarrollo, arquitectura, stack, decisiones de diseño y convenciones del ecosistema belentani7.

---

## 1. Visión

Ser la capa del sistema operativo creativo del universo Judas ("BELENTANI_OS // JUDAS-CORE"): la capa que organiza la obra, no la obra en sí. Una web creativa que sirve como sistema operativo del organismo artístico Judas.

## 2. Misión

Ofrecer `belentani-judas-web`, una aplicación Vite + React + TypeScript + Tailwind que:
- Organice la experiencia Judas en torno a un sistema operativo creativo (paneles de agentes, secuencia de boot, header, footer, rejilla de gemas, héroe, lluvia de código rojo).
- Despliegue en Vercel (`vercel.json`, salida `dist/public`).
- No versionar secretos: `.env.example` documenta variables, `.env` está en `.gitignore`.
- Incluya pruebas de humo y de producción (`tests/smoke.test.js`, `tests/production.test.js`, `tests/test_forge_smoke.py`).
- Cuente con `STORY.md` como punto de entrada narrativo de la obra.

## 3. Reglas de desarrollo

- Protocolo spec-first: PRD → SRS → Design Doc → ADR → Plan → Tests GWT.
- Test-Driven Development: pruebas antes de la implementación (`node:test` en `tests/`).
- Impeccable (diseño frontend): pre-ship checklist obligatoria (sin gradient text, sin side-stripe borders, sin eyebrow en cada sección, hero heading <= 6rem, foco visible, estados vacío/error/carga, touch targets >= 44px).
- Cambios reversibles, uno a uno. No romper nada.
- No commitear secretos. Ejecutar gitleaks antes de cada push.
- CODEOWNERS: `@belentani7` revisión requerida.
- Commits: `type(scope): summary`.
- Lint con oxlint.

## 4. Arquitectura

```
index.html  (punto de entrada, #root, favicon.svg, Google Fonts)
  ↓
src/main.tsx  (bootstrap React)
src/App.tsx   (componente raíz)
src/App.css, src/index.css  (estilos Tailwind)
src/components/  (AgentsPanel, BootSequence, Footer, GemsGrid, Header, Hero, RedCodingRain)
src/assets/  (hero.png, vite.svg)
tests/  (smoke.test.js, production.test.js, test_forge_smoke.py)
public/  (favicon.svg, humans.txt, icons.svg, robots.txt, security.txt, sitemap.xml, .well-known/ai.txt)
```

## 5. Stack tecnológico

- Lenguaje: TypeScript ~6.0.2.
- UI: React 19.2.8, React DOM 19.2.8.
- Build: Vite 8.2.2, @vitejs/plugin-react 6.1.0, @tailwindcss/vite 4.3.3, Tailwind 4.3.3.
- Estilos: Tailwind Merge, Autoprefixer, PostCSS.
- Animaciones: framer-motion 14.1.0, GSAP 3.15.0, @gsap/react.
- Iconos: lucide-react.
- Pruebas: `node:test` (smoke, production), Python `pytest` (test_forge_smoke.py).
- Despliegue: Vercel (`vercel.json`, `dist/public`).
- Lint: oxlint.
- Scripts: `dev` (`vite`), `build` (`tsc -b && vite build`), `test` (`npm run build && node --test tests/production.test.js`), `lint` (`oxlint`), `preview`.

## 6. Tokens de diseño (CANON) — Belentani

- Negro vacío: `#05030a`
- Rojo neón: `#ff073a` (usado en `focus-visible` de index.html)
- Dorado Zion: `#d4af37`
- Cyan señal: `#4de8e0`

## 7. Convenciones de commit

`type(scope): summary` donde `type ∈ {feat, fix, docs, chore, refactor, test, perf, style}`.

Ejemplo: `fix(index): corregir focus-visible a token CANON #ff073a`.

## 8. Seguridad

- Secret scanning mediante gitleaks (`.gitleaks.toml` con reglas propias del ecosistema Belentani).
- `.env.example` sin valores reales; `.env` en `.gitignore`.
- Firma de commits requerida; mínimo 2 revisores (`@belentani7`).
- Security workflow con CodeQL (`.github/workflows`).
