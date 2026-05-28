# 🌸 Anime Explorer - Ionic & Supabase 📱

## 👩‍💻 Nombre del estudiante

Odaliz Balseca

---

# 📱 Nombre del proyecto

Anime Explorer

---

# 🌸 Tema seleccionado

Aplicación móvil de anime desarrollada con Ionic Angular y Supabase Authentication.

La aplicación permite a los usuarios registrarse, iniciar sesión, visualizar un catálogo de anime, buscar animes específicos, visualizar el detalle completo de cada anime y utilizar la cámara del dispositivo para guardar fotografías localmente.

---

# 🌸 API utilizada

Se utilizó la API pública:

🔗 [https://docs.api.jikan.moe/](https://docs.api.jikan.moe/)

## Endpoint principal utilizado

```bash
https://api.jikan.moe/v4/anime
```

## Otros endpoints utilizados

```bash
https://api.jikan.moe/v4/anime?q=
```

```bash
https://api.jikan.moe/v4/anime/{id}
```

---

# ⚙️ Tecnologías utilizadas

* Ionic Angular
* Angular Standalone Components
* TypeScript
* HTML
* SCSS
* Capacitor
* Supabase Authentication
* Jikan API
* Angular Router
* Ionic Components
* Capacitor Camera
* Capacitor Filesystem
* Capacitor Preferences

---

# ✨ Funcionalidades implementadas

## 🔐 Autenticación

* Registro de usuarios
* Inicio de sesión
* Cierre de sesión
* Protección de rutas internas usando Auth Guard
* Persistencia de sesión

---

# 🧭 Navegación

## 🏠 Página Inicio

Pantalla principal de bienvenida de Anime Explorer.

Funciones:

* Bienvenida al usuario
* Información del proyecto
* Resumen de funcionalidades
* Navegación mediante tabs

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/e1497ac8-0b3c-4443-a2b0-efaec93c67e3" />


---

## 🔑 Página Login

Funciones:

* Inicio de sesión con Supabase
* Validación de usuario
* Navegación protegida

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/3e0a1593-b69f-49e7-afb2-b8082e97204c" />

---

## 📝 Página Registro

Pantalla de creación de cuenta.

Funciones:

* Registro de nuevos usuarios
* Validación de campos
* Conexión con Supabase Authentication

<img width="886" height="954" alt="image" src="https://github.com/user-attachments/assets/95ea345d-25d1-4cde-9622-5f6730e88ef6" />

---

## 📷 Página Cámara

Pantalla para captura de fotografías.

Funciones:

* Tomar fotografías
* Guardar imágenes localmente
* Persistencia de datos

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/a46166dc-aa8f-45cd-8fa8-d38bc59b1f6c" />

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/9c631633-a64e-4ae0-90b1-84d202081989" />

---

## 🖼️ Página Galería

Pantalla para visualizar fotografías guardadas.

Funciones:

* Mostrar imágenes almacenadas
* Recuperar imágenes al reiniciar la app
* Visualización dinámica

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/4d9aac44-3567-4bd5-8fcd-d16f07fb47a4" />

---

## 🌸 Página Catálogo Anime

Pantalla conectada con la API Jikan.

Funciones:

* Buscar anime
* Mostrar listado dinámico
* Visualizar imagen y puntuación
* Consumo de API externa

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/81f5e6ee-ba43-46e1-9e4b-1aabe55007e9" />


---

## 👤 Página Perfil

Pantalla de información del usuario.

Funciones:

* Mostrar información personal
* Imagen de perfil
* Cierre de sesión

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/ec1973c3-359a-4d84-b9b4-aec67ee96083" />

---

# 📷 Cámara y almacenamiento local

## Captura de fotografías

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/e9a5a08f-3ae3-4cc5-bf79-1f8bf3a8af6f" />

---

# 🌟 Splash Screen

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/c40d55d7-1bc1-4b8c-abaa-20d0410c7909" />


---

# 🎨 Ícono personalizado

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/e2c54f16-a734-42d4-a1fe-a183961b970b" />
<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/7d05abe7-721a-437c-8e19-cc13470938ff" />


---

# 🧩 Componentes Ionic utilizados

* ion-card
* ion-button
* ion-input
* ion-item
* ion-list
* ion-toast
* ion-alert
* ion-tabs
* ion-spinner
* ion-grid
* ion-icon
* ion-toolbar
* ion-content
* ion-header

---

# 🚀 Instrucciones de instalación

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Ejecutar proyecto

```bash
ionic serve
```

---

# 🤖 Instrucciones de ejecución Android

## Compilar proyecto

```bash
ionic build
```

---

## Generar assets

```bash
npx capacitor-assets generate
```

---

## Sincronizar Capacitor

```bash
npx cap sync android
```

---

## Abrir Android Studio

```bash
npx cap open android
```

---

# 🔐 Configuración de Supabase

Crear archivo:

```bash
src/environments/environment.ts
```

Con las siguientes variables:

```ts
export const environment = {
  production: false,
  supabaseUrl: 'TU_SUPABASE_URL',
  supabaseKey: 'TU_SUPABASE_KEY'
};
```

---

# 🤖 Uso de IA

Durante el desarrollo del proyecto se utilizó inteligencia artificial como apoyo para resolver errores, mejorar interfaces, generar estructuras base y comprender conceptos relacionados con Ionic, Angular, Supabase y Capacitor.

---

# 💬 Prompts utilizados

* "¿Cómo consumir una API en Ionic Angular?"
* "¿Cómo usar Supabase Authentication en Ionic?"
* "¿Cómo proteger rutas internas con AuthGuard?"
* "¿Cómo consumir Jikan API?"
* "¿Cómo crear un catálogo de anime usando ion-card?"
* "¿Cómo crear una página detalle usando Angular Router?"
* "¿Cómo usar ion-toast en Ionic?"
* "¿Cómo implementar cámara con Capacitor?"
* "¿Cómo guardar imágenes localmente en Ionic?"
* "¿Cómo solucionar error NG04002 Cannot match any routes?"
* "¿Cómo abrir Android Studio desde Ionic?"
* "¿Cómo generar APK en Ionic Angular?"
* "¿Cómo agregar Splash Screen personalizado?"
* "¿Cómo agregar ícono personalizado en Ionic?"
* "¿Cómo trabajar con Angular Standalone Components?"

---

# ✅ Resultados

* Consumo correcto de la API Jikan
* Implementación de autenticación con Supabase
* Navegación mediante Tabs
* Almacenamiento local de fotografías
* Splash Screen e ícono personalizados
* Aplicación funcional en Android
* Interfaz amigable y responsive
* Catálogo dinámico de anime

---

# 👩‍🎓 Autor

Odaliz Balseca
Escuela Politécnica Nacional - ESFOT
