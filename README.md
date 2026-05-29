# 🎮 Game Survey Campus 🕹️

## Examen Bimestral - Desarrollo de Aplicaciones Móviles

---

# 📖 Descripción

**Game Survey Campus** es una aplicación móvil desarrollada con **Ionic + Angular** que permite realizar encuestas gamer dentro del campus universitario.

La aplicación registra información de estudiantes, docentes, administrativos o visitantes sobre sus videojuegos favoritos, almacenando además evidencia fotográfica, ubicación GPS y datos enriquecidos obtenidos desde una API externa de videojuegos.

---

# 👩‍💻 Autora

**Odaliz Balseca**

Carrera: Desarrollo de Software

Materia: Aplicaciones Móviles

---

# 🚀 Tecnologías Utilizadas

* Ionic Framework 7+
* Angular 18+
* TypeScript
* Supabase

  * Authentication
  * Database
  * Storage
* Capacitor

  * Camera
  * Geolocation
* API FreeToGame
* Firebase Hosting (Dashboard Web)

---

# 🎯 Funcionalidades Implementadas

### 🔐 Autenticación

* Registro de usuarios
* Inicio de sesión
* Cierre de sesión

### 📝 Encuesta Gamer

Registro de:

* Alias o nombre del encuestado
* Edad aproximada
* Rol dentro del campus
* Lugar de la encuesta
* Videojuego favorito
* Plataforma favorita
* Género favorito
* Comentarios

### 🎮 Consumo de API

Consulta automática de videojuegos mediante API externa.

Información obtenida:

* Nombre del juego
* Imagen
* Género
* Plataforma
* Descripción
* URL oficial

### 📸 Evidencias Fotográficas

Captura de imágenes mediante:

* Cámara del dispositivo
* Galería de fotos

Las imágenes se almacenan en Supabase Storage.

### 📍 Geolocalización

Obtención de:

* Latitud
* Longitud
* Fecha de registro

mediante GPS del dispositivo móvil.

### 📂 Historial de Registros

Visualización de todas las encuestas almacenadas mediante tarjetas dinámicas.

---

# ☁️ Configuración de Supabase

## Tabla Principal

```sql
create table public.surveys (
  id bigint generated always as identity primary key,

  alias text,
  edad text,
  rol text,

  videojuego text,
  plataforma text,
  genero text,

  comentario text,
  lugar text,

  latitud double precision,
  longitud double precision,

  imagen text,

  fecha timestamp default now(),

  juego_nombre_api text,
  juego_imagen text,
  juego_genero_api text,
  juego_plataforma_api text,
  juego_descripcion_api text,
  juego_url_api text
);
```

## Bucket Storage

Bucket utilizado:

```text
evidencias
```

Configurado como:

```text
Public Bucket
```

para almacenar fotografías tomadas durante las encuestas.

---

# 🌐 API Utilizada

### FreeToGame API

Endpoint:

```text
https://www.freetogame.com/api/games
```

Información obtenida:

* title
* thumbnail
* genre
* platform
* short_description
* game_url

Los datos se muestran en pantalla y se almacenan junto con la encuesta.

---

# 📱 Estructura de la Aplicación

## Tab 1 - Inicio

Pantalla de bienvenida del proyecto.

Incluye:

* Descripción de la aplicación
* Funcionalidades principales
* Espacio para promoción mediante QR o APK

---

## Tab 2 - Galería

Permite:

* Capturar fotografías
* Visualizar evidencias registradas

---

## Tab 3 - Encuesta Gamer

Permite:

* Registrar datos del encuestado
* Buscar videojuegos mediante API
* Capturar evidencia fotográfica
* Obtener GPS
* Guardar información en Supabase

---

## Tab 4 - Registros

Visualiza todas las encuestas registradas mediante tarjetas.

Incluye:

* Información del encuestado
* Juego favorito
* Imagen
* Coordenadas GPS
* Información obtenida desde la API

---

## Tab 5 - Perfil

Muestra:

* Información académica
* Estadísticas de uso
* Cantidad de encuestas
* Cantidad de fotografías
* Cierre de sesión

---

# 🔧 Dependencias Principales

```bash
npm install @supabase/supabase-js

npm install @capacitor/camera

npm install @capacitor/geolocation

npm install @capacitor/filesystem
```

---

# 📊 Resultados Esperados

La aplicación permite:

✅ Registrar encuestas gamer

✅ Consumir una API externa

✅ Capturar fotografías

✅ Obtener ubicación GPS

✅ Almacenar información en Supabase

✅ Visualizar registros en tiempo real

✅ Gestionar usuarios mediante autenticación

---

# 🌍 Despliegue

Dashboard Web:

Firebase Hosting

Aplicación móvil:

APK Android generado con Ionic + Capacitor.

---

# 📸 Capturas de Pantalla

Agregar imágenes de:

* Login
* Registro
* Inicio
* Encuesta
* Búsqueda de videojuegos
* GPS
* Evidencias
* Registros
* Perfil
* Dashboard Firebase
* APK / Código QR

---

# 🎓 Conclusión

Game Survey Campus integra autenticación, almacenamiento en la nube, consumo de APIs, geolocalización y captura de evidencias dentro de una única aplicación móvil desarrollada con Ionic y Angular, permitiendo registrar información gamer de la comunidad universitaria de manera rápida y eficiente.
