# 🍽️ Componente de Menú Semanal - WeeklyMenu

## ✅ Implementación Completa

Se ha creado el componente `WeeklyMenu` que muestra las **6 comidas de la semana** (Lunes a Sábado) con información nutricional completa.

## 📍 Ubicación

El componente se encuentra entre **"How It Works"** y **"Pricing"** en el flujo de la página.

## 🎨 Diseño del Componente

### Estructura de Cada Tarjeta de Comida

Cada tarjeta incluye:

1. **Badge del Día**: Esquina superior izquierda (Ej: "Monday", "Lunes")
2. **Badge Especial**: Sábado tiene un badge "Special Menu" / "Menú Especial" ✨
3. **Imagen del Plato**: Placeholder grande con emoji (🍗, 🥩, 🐟, 🍝, 🌮, 🥩)
4. **Título de la Comida**: Nombre descriptivo del plato
5. **Descripción**: Breve descripción de ingredientes y preparación
6. **Información Nutricional**:
   - **Calorías** con icono de llama 🔥
   - **Macronutrientes** en grid:
     - Proteína (icono manzana 🍎)
     - Carbohidratos (icono trigo 🌾)
     - Grasas (icono gota 💧)

## 📊 Menú de Esta Semana

### Lunes - Pollo a la Parrilla con Quinoa
- **Calorías**: 520 cal
- **Proteína**: 45g
- **Carbohidratos**: 48g
- **Grasas**: 15g
- **Descripción**: Pechuga de pollo perfectamente sazonada sobre quinoa esponjosa con vegetales asados y salsa ligera de limón y hierbas.

### Martes - Carne BBQ con Camote
- **Calorías**: 580 cal
- **Proteína**: 42g
- **Carbohidratos**: 52g
- **Grasas**: 18g
- **Descripción**: Tierna carne BBQ cocida lentamente servida con gajos de camote asado, brócoli al vapor y ensalada de col casera.

### Miércoles - Salmón Teriyaki con Arroz Integral
- **Calorías**: 550 cal
- **Proteína**: 40g
- **Carbohidratos**: 50g
- **Grasas**: 20g
- **Descripción**: Salmón atlántico fresco glaseado con salsa teriyaki casera, servido con arroz integral y vegetales salteados estilo asiático.

### Jueves - Albóndigas de Pavo Italiano
- **Calorías**: 540 cal
- **Proteína**: 38g
- **Carbohidratos**: 55g
- **Grasas**: 16g
- **Descripción**: Albóndigas caseras de pavo en rica salsa marinara con pasta integral, cubierto con albahaca fresca y parmesano.

### Viernes - Bowl de Fajitas de Pollo Picante
- **Calorías**: 560 cal
- **Proteína**: 43g
- **Carbohidratos**: 54g
- **Grasas**: 17g
- **Descripción**: Tiras de pollo sazonadas con pimientos y cebollas salteadas, arroz con cilantro y limón, frijoles negros y pico de gallo fresco.

### Sábado - Especial: Plato de Ribeye ⭐
- **Calorías**: 650 cal
- **Proteína**: 48g
- **Carbohidratos**: 45g
- **Grasas**: 28g
- **Descripción**: Ribeye premium asado a la perfección con puré de papas al ajo, espárragos a la parrilla y salsa de champiñones.
- **Nota**: Este es el menú especial disponible solo para planes de 5 y 6 comidas

## 🎯 Características del Diseño

### Layout Responsive
- **Mobile**: 1 columna (vista vertical)
- **Tablet**: 2 columnas
- **Desktop**: 3 columnas (2 filas × 3 columnas)

### Efectos Visuales
1. **Hover Effects**:
   - Escala del emoji (zoom)
   - Brillo del borde (cambia a naranja)
   - Sombra aumentada
   - Transiciones suaves (300ms)

2. **Animaciones de Entrada**:
   - Fade-in desde abajo
   - Delay escalonado (0.1s entre cada tarjeta)
   - Trigger: scroll into view

3. **Color Scheme**:
   - Fondo: Degradado sutil (primary/10 a secondary/5)
   - Borde: Primary con hover a secondary
   - Badges: Fondo oscuro semi-transparente
   - Badge especial: Degradado naranja brillante

### Iconos de Nutrición
- **Calorías**: Llama (Flame) - Color naranja
- **Proteína**: Manzana (Apple) - Color púrpura
- **Carbohidratos**: Trigo (Wheat) - Color naranja
- **Grasas**: Gota (Droplet) - Color púrpura

## 📱 Integración con el Sitio

### Navegación Actualizada
Se agregó el enlace "Menu" / "Menú" en la barra de navegación:
- Inglés: "Menu"
- Español: "Menú"
- Scroll suave hacia `#weekly-menu`

### Posición en HomePage
```
Hero
  ↓
Features
  ↓
How It Works
  ↓
[WEEKLY MENU] ← NUEVO
  ↓
Pricing
  ↓
Contact Form
  ↓
Footer
```

## 🌐 Bilingüe (Inglés / Español)

Todas las traducciones están implementadas:

### Inglés (en.json)
- Días de la semana en inglés
- Títulos de comidas descriptivos
- Unidades en sistema métrico (g para gramos)

### Español (es.json)
- Días de la semana en español
- Títulos de comidas traducidos y adaptados
- Mismo sistema de unidades

## 🔄 Conexión con Planes de Precios

### Relación con Planes 5 y 6 Comidas
El **menú especial del sábado** (Ribeye) está destacado con un badge especial para reforzar el beneficio exclusivo de los planes premium:

- **Plan 5 Comidas**: Incluye acceso al menú especial + reprogramación flexible
- **Plan 6 Comidas**: Incluye acceso al menú especial + reprogramación flexible + soporte VIP

## 📈 Beneficios del Componente

### Para el Usuario
✅ **Transparencia**: Ven exactamente qué comerán cada día
✅ **Toma de Decisión**: Información nutricional clara ayuda a elegir
✅ **Visualización**: Los emojis hacen el menú más atractivo y fácil de entender
✅ **Confianza**: Muestra variedad y calidad de las comidas

### Para el Negocio
✅ **Conversión**: Reduce dudas sobre qué recibirán
✅ **Diferenciación**: Destaca el menú especial del sábado
✅ **Upsell**: Motiva a elegir planes más grandes (5-6 comidas)
✅ **Profesionalismo**: Muestra planificación y cuidado nutricional

## 🚀 Próximas Mejoras Sugeridas

### Corto Plazo
1. ⚠️ Reemplazar emojis con fotos reales de los platos
2. ⚠️ Agregar botón "Ver Menú Completo" que abra modal con detalles
3. ⚠️ Agregar badges de alérgenos (gluten-free, dairy-free, etc.)
4. ⚠️ Agregar filtros por tipo de proteína (pollo, carne, pescado)

### Mediano Plazo
1. Menú rotativo (cambiar cada semana)
2. Sistema de favoritos (usuarios pueden marcar comidas preferidas)
3. Personalización (cambiar comidas dentro del plan)
4. Galería de fotos de comidas anteriores

### Largo Plazo
1. Integración con API de nutrición en tiempo real
2. Recomendaciones basadas en objetivos (pérdida de peso, ganancia muscular)
3. Historial de menús anteriores
4. Rating y reviews de cada comida

## 🎨 Placeholders vs Producción

### Actualmente (Placeholders)
- ✅ Emojis grandes y coloridos (🍗, 🥩, 🐟, 🍝, 🌮)
- ✅ Degradado de fondo con overlay
- ✅ Diseño completamente funcional

### Recomendado para Producción
- 📸 Fotos profesionales de alta calidad (1200x800px mínimo)
- 📸 Fondo blanco o neutro para consistencia
- 📸 Ángulo cenital o 45° (típico de food photography)
- 📸 Buena iluminación natural
- 📸 Mostrar porciones reales
- 📸 Incluir guarniciones y presentación completa

### Especificaciones de Imagen Recomendadas
```
Formato: JPG o WebP
Tamaño: 800x600px o 1200x800px
Peso: < 200KB (optimizado)
Aspect Ratio: 4:3 o 16:9
Background: Neutro o con contexto de job site
```

## 📊 Análisis Nutricional

### Rango Calórico Semanal
- Mínimo: 520 cal (Pollo con Quinoa)
- Máximo: 650 cal (Ribeye Especial)
- Promedio: 567 cal

### Balance de Macros (Promedio)
- **Proteína**: ~43g por comida (30% calorías)
- **Carbohidratos**: ~51g por comida (36% calorías)
- **Grasas**: ~19g por comida (30% calorías)

**Conclusión**: Menú bien balanceado, alto en proteína, ideal para trabajadores que requieren energía sostenida.

## 🔍 SEO y Marketing

### Keywords Potenciales
- "menú semanal nutritivo"
- "comidas para trabajadores de construcción"
- "meal prep con entrega"
- "comidas altas en proteína"
- "menú balanceado semanal"

### Contenido Destacable
- Variedad (6 comidas diferentes)
- Información nutricional transparente
- Menú especial premium
- Preparación diaria por chefs expertos

## ✅ Checklist de Implementación

- [x] Componente WeeklyMenu.tsx creado
- [x] 6 comidas con datos completos (título, descripción, macros)
- [x] Traducciones en inglés y español
- [x] Iconos de Lucide React para macros
- [x] Badge especial para sábado
- [x] Diseño responsive (1-2-3 columnas)
- [x] Animaciones Framer Motion
- [x] Hover effects y transiciones
- [x] Integrado en página principal
- [x] Enlace agregado a navegación
- [x] Sin errores de lint
- [x] Accesibilidad (semántica HTML)

## 🌐 Ver el Componente

El componente está activo en:
- **Inglés**: http://localhost:3000#weekly-menu
- **Español**: http://localhost:3000/es#weekly-menu

O navega usando el menú: **"Menu"** / **"Menú"**

---

**Fecha de creación**: ${new Date().toLocaleDateString('es-ES', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}

**Status**: ✅ Completado y listo para usar

