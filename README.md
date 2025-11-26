
# **Gestión de Cursos – Proyecto Final Angular (Coderhouse)**  
>>>>>>> 338027be3d92e67a586b985114525c6f45796975
Aplicación web desarrollada con **Angular 17**, **NgRx**, **SCSS**, **Lazy Loading**, **Guards**, **Módulos clásicos (sin standalone)** y arquitectura escalable basada en buenas prácticas.

<<<<<<< HEAD
## 🚀 Tecnologías utilizadas
- **Angular 17** (Sin Standalone Components)
- **TypeScript**
- **NgRx Store + Devtools**
- **RxJS**
- **Angular Router (Lazy Loaded Modules)**
- **SCSS**
- **HttpClient**
- **MockAPI (o backends simulados)**

## 📁 Estructura del Proyecto
```
src/
├── app/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   ├── app.component.ts / html / scss
│   ├── core/
│   │   ├── guards/
│   │   ├── services/
│   │   ├── interceptors/
│   │   ├── core.module.ts
│   ├── shared/
│   ├── layout/
│   ├── auth/
│   ├── students/
│   ├── courses/
│   ├── enrollments/
│   ├── users/
│   ├── store/
```

## 🔐 Autenticación y Perfiles
**Usuario:** listar alumnos, cursos e inscripciones.  
**Admin:** ABM completo + gestión de usuarios.

## 🧭 Routing y Guards
- `/login` (público)
- `/alumnos`, `/cursos`, `/inscripciones` (AuthGuard)
- `/usuarios` (solo admin)

## 📦 NgRx Store
- Estado global: `currentUser`, `toolbarTitle`
- Acciones: loginSuccess, logout, setToolbarTitle
- Reducer + Selectores
- Configuración con StoreModule y Devtools

## 🎨 Layout del Sistema
- Sidebar dinámico según perfil
- Toolbar con título de la vista y usuario logueado

## 📘 Funcionalidades Principales
- Login con formulario reactivo
- ABM de alumnos, cursos, usuarios
- Inscripciones alumno–curso
- Detalles con listas asociadas
- Logout integrado con NgRx

## 🛠 Instalación
```
npm install --legacy-peer-deps
ng serve
```

## 📌 Comando para crear el proyecto
```
ng new entrega4-final --routing --style=scss --no-standalone
```

## 📡 Backend simulado
Reemplazar URLs en:
```
src/app/core/services/*.service.ts
```

## 🙌 Autor
Cristina Guzmán
=======

## 🚀 Tecnologías utilizadas

- **Angular 17** (Sin Standalone Components)  
- **TypeScript**  
- **NgRx Store + Devtools**  
- **RxJS**  
- **Angular Router (Lazy Loaded Modules)**  
- **SCSS**  
- **HttpClient**  
- **MockAPI (o backends simulados)**
/
>>>>>>> 338027be3d92e67a586b985114525c6f45796975
