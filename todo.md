## Lista de Tareas para la Creación de la Web de AIUX STUDIO

1.  [X] **Analizar requisitos con el usuario**: Aclarar detalles sobre contenido, funcionalidades (calendario, pagos, chatbots), despliegue y diseño.
2.  [X] **Seleccionar y configurar el template apropiado**:
    *   [X] Crear proyecto Next.js con el comando `create_nextjs_app aiux_studio`.
    *   [ ] Instalar dependencias adicionales si son necesarias (ej. para el calendario, envío de email).
    *   [ ] Configurar la estructura básica de carpetas para contenido multilingüe y componentes1.  [X] **Analizar requisitos con el usuario**: Aclarar detalles sobre contenido, funcionalidades (calendario, pagos, chatbots), despliegue y diseño.
2.  [X] **Seleccionar y configurar el template apropiado**:
    *   [X] Crear proyecto Next.js con el comando `create_nextjs_app aiux_studio`.
    *   [X] Instalar dependencias adicionales si son necesarias (ej. para el calendario, envío de email).
    *   [ ] Configurar la estructura básica de carpetas para contenido multilingüe y componentes.
3.  [X] **Redactar contenidos amplios para cada sección**:
    *   [X] Página de Inicio (Home) - `home_content_es.md`
    *   [X] Sobre Nosotros (About Us) - `about_content_es.md`
    *   [X] Productos y Servicios (Detallando desarrollo informático, IA para pymes y grandes cuentas, software con casos concretos, chatbots, voice bots, servicios pay-per-use) - `services_content_es.md`
    *   [X] Casos de Éxito (integrado en Servicios o sección aparte) - `casestudies_content_es.md`
    *   [X] Reseñas de Clientes (simuladas) - `reviews_content_es.md`
    *   [X] Textos Legales (Política de Privacidad, Aviso Legal, Política de Cookies) - `legal_content_es.md`
    *   [X] Contenido para la página de Contacto (además del formulario) - `contact_content_es.md`
4.  [X] **Desarrollar funcionalidades avanzadas**:
    *   [X] Formulario de contacto con selección de fecha y hora y notificación por email:
        *   [X] Investigar e instalar librerías para selector de fecha/hora (ej. `react-datepicker`) y envío de email (ej. `nodemailer` o similar para API route de Next.js).
        *   [X] Crear el componente del formulario de contacto en Next.js (`ContactForm.tsx`) dentro de la carpeta `src/components/`.
        *   [X] Implementar la selección de fecha y hora utilizando `react-datepicker` en `ContactForm.tsx`.
        *   [X] Crear una API route en Next.js (ej. `src/app/api/contact/route.ts`) para manejar el envío del formulario.
        *   [X] Implementar la lógica en la API route para recibir los datos del formulario y utilizar `nodemailer` para enviar la notificación por email (inicialmente simular con `console.log` si no hay credenciales SMTP).
        *   [X] Integrar `ContactForm.tsx` en una página de contacto (`src/app/contact/page.tsx`).
5.  [X] **Implementar diseño visual basado en imagen de referencia**:
    *   [X] Analizar la imagen de referencia (`file_00000000e4686246ab382d07613f189b.png`) para extraer paleta de colores, tipografías y estilos generales.
    *   [X] Configurar Tailwind CSS (`tailwind.config.js`) con los colores y fuentes personalizadas (ej. dorado, negro, tipografía específica).
    *   [X] Crear componentes de layout globales (ej. `Header.tsx`, `Footer.tsx`, `Navbar.tsx`) en `src/components/layout/` siguiendo el diseño de la imagen.
    *   [X] Aplicar estilos globales y de layout en `src/app/layout.tsx`.
    *   [X] Adaptar el estilo de las páginas existentes (Home, About, Services, Contact) y sus componentes para que coincidan con el diseño de referencia.
    *   [X] Asegurar la responsividad del diseño en diferentes tamaños de pantalla.
6.  [ ] **Adaptar y traducir contenido a idiomas adicionales**:
    *   [ ] Crear estructura de carpetas para contenido multilingüe (ej. `content/en`, `content/pt`, `content/fr`, `content/de`).
    *   [ ] Traducir `home_content_es.md` a inglés, portugués, francés y alemán y guardar como `home_content_en.md`, etc.
    *   [ ] Traducir `about_content_es.md` a inglés, portugués, francés y alemán y guardar como `about_content_en.md`, etc.
    *   [ ] Traducir `services_content_es.md` a inglés, portugués, francés y alemán y guardar como `services_content_en.md`, etc.
    *   [ ] Traducir `casestudies_content_es.md` a inglés, portugués, francés y alemán y guardar como `casestudies_content_en.md`, etc.
    *   [ ] Traducir `reviews_content_es.md` a inglés, portugués, francés y alemán y guardar como `reviews_content_en.md`, etc.
    *   [ ] Traducir `legal_content_es.md` a inglés, portugués, francés y alemán y guardar como `legal_content_en.md`, etc.
    *   [ ] Traducir `contact_content_es.md` a inglés, portugués, francés y alemán y guardar como `contact_content_en.md`, etc.
    *   [ ] Investigar e implementar mecanismo de cambio de idioma en Next.js (ej. `next-i18next` o rutas dinámicas con locale).idades avanzadas**:
    *   [ ] Formulario de contacto.
    *   [ ] Sistema de solicitud de información con calendario de fecha y hora.
    *   [ ] Implementación de servicios "pay per use" y sistema de suscripciones (requiere definir pasarela de pago).
    *   [ ] Implementación o integración de Chatbots y Voice Bots.
5.  [ ] **Implementar diseño visual basado en la imagen de referencia**: Adaptar el diseño a todas las páginas y asegurar la responsividad.
6.  [ ] **Validar funcionalidad y experiencia de usuario**: Realizar pruebas exhaustivas de todas las funcionalidades y la navegación.
7.  [ ] **Desplegar la web y verificar el acceso público**: Subir la web a un servidor y confirmar que es accesible online.
8.  [ ] **Notificar y entregar URLs y archivos al usuario**: Enviar el enlace de la web desplegada y cualquier archivo relevante.
