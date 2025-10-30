# Wiki Jurídica Criminológica - Repo listo para publicar

Este repositorio incluye:
- `index.html` → versión estática y lista para publicar (GitHub Pages / Netlify).
- `content/*.md` → archivos Markdown por cada concepto (fáciles de editar o importar).
- `react_app/` → scaffold básico de una app React + Tailwind (core files).
- Instrucciones para añadir autenticación con Firebase (Google) y control de permisos.

## Publicar la versión estática
1. Subir `index.html` a GitHub Pages (coloca en branch `gh-pages` o en `docs/`).
2. O desplegar en Netlify arrastrando el archivo o apuntando a un repo.

## Markdown / export
- Los archivos `.md` están en `content/`. Úsalos para generar páginas individuales, importar a un CMS o convertir a MDX.

## React + Tailwind (scaffold)
Dentro de `react_app/` encontrarás los archivos básicos para iniciar:
- `package.json` (dependencias mínimas)
- `public/index.html`
- `src/App.jsx`, `src/index.jsx`, `src/styles.css`
- `tailwind.config.js`, `postcss.config.js`

### Para correr la app React:
```bash
cd react_app
npm install
npm run dev
```

## Autenticación (sugerencia: Firebase)
1. Crear un proyecto en Firebase Console y habilitar Google Auth.
2. Copia tu `firebaseConfig` en `src/firebase-config.example.js`.
3. Implementa reglas y control de edición (lectura pública, edición solo para usuarios autorizados).
4. También puedes usar Netlify Identity o Auth0.

## Exportar / Generar
- `index.html` incluye botón para descargar página completa y exportar Markdown/JSON (solo en la versión del editor).

---

He incluido instrucciones y archivos básicos. Si quieres, puedo:
- 1) Generar un repo ZIP (listo para subir) — ya está preparado para descargar.
- 2) Completar la app React con rutas por concepto y editor Markdown integrado.
- 3) Implementar la integración de Firebase Auth en el código React (con variables de entorno).
- 4) Subir a un repo público en GitHub (necesitaré que me autorices o compartas un repo).

Dime qué deseas ahora: ¿descargas el ZIP, o quieres que complete la app React + autenticación ahora mismo?
