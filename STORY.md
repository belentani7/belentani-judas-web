# BELENTANI Judas Web — STORY

## 1. Premisa
Experiencia web visual e inmersiva sobre transformación a través de 4 conceptos: Traición, Frecuencia, Hackeo y Redención. Una narrativa de redención moral/técnica presentada como viaje interactivo.

## 2. Intención
Crear una interfaz visual potente que comunique complejidad emocional (traición, dolor, redención) mediante código, animaciones GSAP y diseño moderno. Puente entre lo técnico y lo emocional.

## 3. Viaje del usuario

| Etapa | Elemento | Acción | Sensation |
|---|---|---|---|
| Entrada | BootSequence | Animación de carga | Anticipación |
| Orientación | Header | Nav fija, contexto | Ubicación |
| Impacto | Hero | Floating elements + parallax | Asombro |
| Descubrimiento | GemsGrid | 4 gemas scroll-triggered | Revelación |
| Exploración | AgentsPanel | Red de agentes | Complejidad |
| Cierre | Footer | Info + contacto | Resolución |

## 4. Pantallas principales

### Header
- Navegación fija
- Logo/identidad
- Status info

### Hero
- Antigravity floating effect (GSAP)
- Parallax scroll (ScrollTrigger)
- Typography principal
- Contexto narrativo

### GemsGrid
- 4 gemas (tarjetas con scroll animation)
  1. TRAICIÓN — El algoritmo del dolor
  2. FRECUENCIA — Síntesis oscura
  3. HACKEO — Sanación conceptual
  4. REDENCIÓN — Elevación de código
- Stagger animation al scroll
- Floating state en reposo

### AgentsPanel
- Grid de agentes/entidades
- Interactividad (hover, click)
- Posible Supabase connection

### BootSequence
- Animación de inicio (tipo Matrix/terminal)
- Sensación de "sistema encendiendo"
- Transición a contenido principal

### RedCodingRain
- Efecto visual de fondo (tipo Matrix)
- Animación continua
- Capa atmosférica

## 5. Entidades de contenido
- **4 Gemas**: Traición, Frecuencia, Hackeo, Redención
- **Agentes**: Probablemente lista de roles/entidades del sistema
- **Narrative threads**: Redención, transformación, código como metáfora

## 6. Tono textual
- Poético + técnico
- Frases cortas, impactantes
- Contraste: "algoritmo del dolor" (técnico + emocional)
- Temas: redención, elevación, sanación
- Idioma: español (idioma principal observado)

## 7. Tono visual
- Dark mode (fondo rojo/negro)
- Red como color principal (#ff0000 o similar)
- Glassmorphism + transparency
- Animaciones suaves (GSAP)
- Effecto "Matrix rain" (RedCodingRain)
- Tipografía: TBD (revisar en CSS)
- Layout: Grid + Flexbox (Tailwind)

## 8. Interacción central
Scrollear a través de una narrativa visual donde cada "gema" revela un aspecto de la transformación. Las animaciones GSAP hacen que el scroll sea la mecánica principal.

## 9. Estado actual
🔧 **Proyecto estructurado pero requiere QA:**

Status:
- ✅ Componentes React completos (Hero, GemsGrid, AgentsPanel, etc.)
- ✅ GSAP integrado (animaciones avanzadas)
- ✅ Tailwind CSS configurado
- ✅ BootSequence presente
- ✅ Estructura modular
- ⚠️ Requiere npm install
- ⚠️ Requiere verificación de Supabase
- ⚠️ Requiere testing completo

## 10. Versión mínima funcional
- ✅ Hero + GemsGrid + Footer visibles
- ✅ Animaciones funcionando (GSAP)
- ✅ Scroll behavior correcto
- ✅ Responsive (Tailwind)
- ⚠️ AgentsPanel funcional (verificar lógica)
- ⚠️ BootSequence timing (verificar duración)

## 11. Ampliación futura
- Backend real con Supabase (agentes, narrativa dinámica)
- Más gemas/capas narrativas
- Interactividad en gemas (click para más detalles)
- Soundscape/música sincronizada
- Versión móvil pulida
- Performance optimization (lazy loading de gemas)
- Localización (ES/EN/PT)

---

## AUDIT CHECKLIST

| Item | Status | Notes |
|---|---|---|
| HTML/JSX válida | ✅ | Estructura React correcta |
| GSAP funciona | 🔧 | Requiere npm install + testing |
| Tailwind CSS | ✅ | Configurado en proyecto |
| Componentes React | ✅ | 8 componentes modulares |
| Scroll animations | 🔧 | ScrollTrigger requiere verificación |
| BootSequence timing | ? | Requiere testing |
| Responsive design | ? | Requiere testing en móvil |
| Accesibilidad | ? | Requiere audit (WCAG) |
| Performance | ? | Bundling con Vite requiere check |
| Narrativa clara | ✅ | Temática definida (redención) |
| Visual coherencia | ✅ | Dark + rojo + GSAP animaciones |
| Textual coherencia | ✅ | Tonalidad poética + técnica |

## STATUS: 🔧 READY FOR QA

Este proyecto es **estructuralmente sólido** pero requiere:

1. **npm install** → Instalar dependencias
2. **npm run dev** → Verificar que abre sin errores
3. **Scroll testing** → Verificar GSAP ScrollTrigger
4. **Mobile testing** → Responsive en phones
5. **Performance check** → npm run build + Lighthouse
6. **Supabase audit** → ¿Conectado o mock?
7. **BootSequence timing** → ¿Duración aceptable?
8. **AgentsPanel logic** → ¿Qué muestra? ¿Backend?

---

## RECOMENDACIÓN

**Candidato POTENCIAL a "final project"** si:

✅ Todas las animaciones funcionan smooth
✅ Narrativa es inmersiva end-to-end
✅ Performance es aceptable (<3s first paint)
✅ Mobile friendly
✅ Accesibilidad básica OK

**Acción recomendada**: Ejecutar npm install + npm run dev + hacer QA checklist.

**Tamaño**: 154.7 MB es grande para un proyecto web → Revisar si hay node_modules duplicados o assets sin optimizar.
