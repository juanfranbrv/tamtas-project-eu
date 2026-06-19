# TaMTAS Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un sitio institucional completo en Astro que explique TaMTAS, publique sus resultados y conecte con socios, herramientas y repositorios.

**Architecture:** Astro generará páginas estáticas y colecciones tipadas para contenido evolutivo. Los componentes serán mayoritariamente HTML y CSS, con JavaScript nativo aislado para navegación móvil y revelados progresivos.

**Tech Stack:** Astro, TypeScript, CSS nativo, Astro Content Collections, Vitest y navegador integrado.

---

### Task 1: Base del proyecto y contrato de contenido

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/content.config.ts`
- Create: `tests/content.test.ts`

- [ ] Escribir una prueba que exija las rutas, socios, idiomas y métricas públicas del proyecto.
- [ ] Ejecutar `npm test` y comprobar que falla porque los módulos todavía no existen.
- [ ] Crear la configuración mínima de Astro y el modelo de contenido.
- [ ] Ejecutar `npm test` y comprobar que pasa.

### Task 2: Datos verificables y enlaces externos

**Files:**
- Create: `src/data/project.ts`
- Create: `src/data/navigation.ts`
- Modify: `tests/content.test.ts`

- [ ] Añadir pruebas para los cinco socios, cinco idiomas, stakeholders y herramientas existentes.
- [ ] Ejecutar la prueba y observar el fallo esperado.
- [ ] Implementar los datos a partir de la propuesta: UOC, BSC, Surrey, DCU, Tartu, CRG, IEC, Conradh na Gaeilge, TBXTools, MTUOC y TransQuest.
- [ ] Ejecutar las pruebas.

### Task 3: Sistema visual y layout global

**Files:**
- Create: `src/styles/global.css`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `tests/layout.test.ts`

- [ ] Probar que el layout incluye skip link, metadatos, navegación principal y pie.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Implementar tokens, tipografía local, foco, navegación y estructura responsive.
- [ ] Ejecutar las pruebas.

### Task 4: Inicio y visualización del prisma

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/components/PrismHero.astro`
- Create: `src/components/ProjectStats.astro`
- Create: `src/components/ResearchPipeline.astro`
- Create: `src/components/LanguageField.astro`
- Create: `src/components/PartnerGrid.astro`
- Create: `tests/home.test.ts`

- [ ] Probar que la portada contiene propósito, métricas, proceso, idiomas, socios y recursos abiertos.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Implementar la portada y la animación del prisma con SVG de marca y CSS.
- [ ] Ejecutar las pruebas.

### Task 5: Páginas interiores

**Files:**
- Create: `src/pages/project.astro`
- Create: `src/pages/research.astro`
- Create: `src/pages/outputs.astro`
- Create: `src/pages/news/index.astro`
- Create: `src/pages/consortium.astro`
- Create: `src/pages/resources.astro`
- Create: `src/pages/404.astro`
- Create: `tests/routes.test.ts`

- [ ] Probar que todas las rutas previstas existen y contienen un `h1` específico.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Implementar cada página con contenido real y estados honestos para resultados futuros.
- [ ] Ejecutar las pruebas.

### Task 6: Colecciones y contenido inicial

**Files:**
- Create: `src/content/news/project-launch.md`
- Create: `src/content/outputs/project-website.md`
- Create: `src/content/resources/tbxtools.md`
- Create: `src/components/ContentListing.astro`
- Create: `tests/collections.test.ts`

- [ ] Probar los campos obligatorios y el orden cronológico.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Añadir entradas iniciales y listados reutilizables.
- [ ] Ejecutar las pruebas.

### Task 7: Interacciones y accesibilidad

**Files:**
- Create: `src/scripts/site.ts`
- Modify: `src/components/Header.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Create: `tests/interactions.test.ts`

- [ ] Probar los atributos del menú, el cierre mediante Escape y la compatibilidad con movimiento reducido.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Implementar menú móvil y revelados con `IntersectionObserver`.
- [ ] Ejecutar las pruebas.

### Task 8: Recursos de marca, SEO y compilación

**Files:**
- Create: `public/brand/*`
- Create: `public/robots.txt`
- Modify: `astro.config.mjs`
- Modify: `src/layouts/BaseLayout.astro`
- Create: `tests/seo.test.ts`

- [ ] Probar canonical, Open Graph, iconos, sitemap y datos estructurados.
- [ ] Ejecutar la prueba y comprobar el fallo.
- [ ] Copiar los recursos oficiales y completar SEO.
- [ ] Ejecutar `npm test`, `npm run check` y `npm run build`.

### Task 9: Verificación visual

**Files:**
- Modify: archivos visuales que presenten defectos durante la revisión.

- [ ] Iniciar el servidor local.
- [ ] Validar identidad, contenido, consola y navegación.
- [ ] Capturar escritorio y móvil.
- [ ] Corregir desbordamientos, contraste, espaciado o errores.
- [ ] Repetir pruebas, comprobación de Astro y compilación.

