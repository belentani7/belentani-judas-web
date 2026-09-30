# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

---

## Parte del universo Belentani

Este repositorio es una de las puertas del universo artistico de **Pedro Belentani**.
El mapa completo, con todos los nodos y su papel, vive en el nodo central:

**<https://belentani.es>** — repo [\`belentani_Omega\`](https://github.com/belentani7/belentani_Omega)

| Nodo | Papel |
|---|---|
| [Belentani Omega](https://belentani.es) | Sitio oficial (nodo central) |
| [The Judas Experience](https://belentani7.github.io/belentani-judas-experience/) | La obra central |
| [Omega Immersive Portal](https://belentani-omega-immersive-portal.vercel.app) | Portal inmersivo 3D |
| [Galeria de Versiones](https://belentani7.github.io/belentani-omega-showcase/) | Todas las versiones |
| [ARCHIVO VIVO](https://belentani7.github.io/belentani-artista-unified/) | Archivo de la obra |
| [Belentani — Judas Era](https://belentani7.github.io/belentani-es-neon/) | Portfolio visual |
| [NOIACORE LAB](https://belentani.vercel.app) | Laboratorio |

Identidad compartida: negro \`#000000\` · rojo neon \`#ff073a\` · dorado Zion \`#d4af37\` · cyan \`#4de8e0\` · Orbitron + Share Tech Mono · 432 Hz.
