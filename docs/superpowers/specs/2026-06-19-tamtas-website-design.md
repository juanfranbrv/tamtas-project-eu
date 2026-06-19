# Diseño del sitio web de TaMTAS

## Objetivo

Crear el centro público del proyecto TaMTAS: explicar el propósito científico con lenguaje accesible, presentar el consorcio, publicar avances y ofrecer acceso permanente a resultados, publicaciones, conjuntos de datos, repositorios y demostradores.

## Audiencias

- Personal investigador y profesionales de tecnologías del lenguaje.
- Responsables de políticas científicas, educativas y lingüísticas.
- Traductores, comunicadores científicos y docentes.
- Comunidades lingüísticas y ciudadanía interesada en acceder a ciencia en su idioma.

## Enfoque visual

El sitio convierte el símbolo del prisma de TaMTAS en su sistema narrativo. Las partículas representan documentos científicos, terminología y datos complejos. Al atravesar el prisma se convierten en tres líneas claras: traducción, control terminológico y adaptación para distintas audiencias.

La composición será luminosa, asimétrica y accesible. Tendrá una expresividad propia sin perder credibilidad institucional.

### Parámetros

- Variancia visual: 8/10.
- Intensidad de movimiento: 5/10.
- Densidad: 4/10.
- Tema único: claro.
- Radio de superficies: 24 px; controles: 16 px; etiquetas: cápsula.

### Paleta

- Tinta: `#073B4C`.
- Azul: `#0077C8`.
- Verde: `#54B948`.
- Amarillo: `#FFC20E`.
- Turquesa: `#16A085`.
- Fondo principal: `#F4F4F5`.
- Superficie: `#FFFFFF`.
- Línea: `#E4E4E7`.
- Texto secundario: `#5F6670`.

El azul actuará como color de acción. Verde, amarillo y turquesa aparecerán en el relato visual y en categorías semánticas, no como llamadas a la acción competidoras.

### Tipografía

- DM Sans para titulares y cifras.
- Inter para cuerpo, navegación e interfaz.
- Fuentes alojadas localmente con `font-display: swap`.

## Arquitectura de información

- Inicio.
- Project.
- Research.
- Outputs.
- News.
- Consortium.
- Resources.

La primera versión tendrá rutas funcionales para todas las áreas. News, publications, deliverables y resources usarán colecciones de contenido de Astro para permitir su crecimiento sin modificar componentes.

## Página de inicio

1. Navegación persistente y compacta.
2. Hero asimétrico con el propósito del proyecto y una visualización animada del prisma.
3. Resumen verificable: 36 meses, cinco idiomas, Life Sciences y cinco socios.
4. Problema y propuesta: precisión terminológica, traducción documental, evaluación y adaptación.
5. Flujo técnico desde corpus hasta texto accesible.
6. Idiomas del proyecto.
7. Consorcio y responsabilidades.
8. Resultados, herramientas y publicaciones recientes.
9. Llamada final a explorar recursos abiertos.
10. Pie con financiación, enlaces institucionales y acceso legal.

## Contenido

El contenido procederá del PDF de propuesta y del prototipo React. Se reescribirá para web con precisión, evitando afirmaciones de resultados todavía no producidos. Los elementos futuros aparecerán como previstos o en desarrollo.

El idioma inicial será inglés porque es el idioma operativo del proyecto y de la propuesta. La estructura quedará preparada para internacionalización posterior a los cinco idiomas del proyecto.

## Componentes

- `BaseLayout`: metadatos, tipografías, navegación y pie.
- `Header`: navegación de escritorio y menú móvil accesible.
- `PrismHero`: relato visual principal con animación CSS/SVG basada en los recursos de marca.
- `ProjectStats`: datos esenciales.
- `ResearchPipeline`: proceso real del proyecto.
- `LanguageOrbit`: representación de los cinco idiomas.
- `PartnerGrid`: socios, países, responsabilidades y enlaces externos.
- `ContentCard`: publicaciones, noticias, entregables y recursos.
- `SectionHeading`: jerarquía editorial consistente.

## Movimiento

- Entrada inicial coordinada de partículas, prisma y líneas de salida.
- Revelados discretos mediante `IntersectionObserver`.
- Estados de interacción breves en enlaces y botones.
- Sin listeners continuos de desplazamiento.
- Todo movimiento se desactiva con `prefers-reduced-motion`.

## Accesibilidad

- HTML semántico y navegación por teclado.
- Contraste WCAG AA.
- Foco visible.
- Menú móvil con estado y atributos ARIA.
- SVG decorativos ocultos para tecnologías de asistencia.
- Enlaces externos identificables.
- Tamaños táctiles mínimos de 44 px.

## Rendimiento y SEO

- Salida estática de Astro.
- JavaScript limitado al menú y los revelados.
- Imágenes con dimensiones explícitas y formatos modernos cuando corresponda.
- Título, descripción, canonical, Open Graph y datos estructurados.
- Sitemap y RSS para noticias.
- Objetivos: LCP inferior a 2,5 s, CLS inferior a 0,1 e INP inferior a 200 ms.

## Verificación

- Pruebas de estructura y contenido con Vitest.
- `astro check`.
- Compilación de producción.
- Validación en navegador a 1440 px, 768 px y 390 px.
- Revisión de consola, navegación, menú móvil, foco, desbordamientos y movimiento reducido.

