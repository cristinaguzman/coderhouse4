# **Gestión de Cursos – Proyecto Final Angular (Coderhouse)**  
Aplicación web desarrollada con **Angular 17**, **NgRx**, **SCSS**, **Lazy Loading**, **Guards**, **Módulos clásicos (sin standalone)** y arquitectura escalable basada en buenas prácticas.

Este proyecto cumple con todos los requisitos de la **consigna del Proyecto Final de Angular** y su **rúbrica oficial**.

---

## 🚀 Tecnologías utilizadas

- **Angular 17** (Sin Standalone Components)  
- **TypeScript**  
- **NgRx Store + Devtools**  
- **RxJS**  
- **Angular Router (Lazy Loaded Modules)**  
- **SCSS**  
- **HttpClient**  
- **MockAPI (o backends simulados)**

---

# 📁 Estructura del Proyecto

src/
├── app/
│ ├── app-routing.module.ts
│ ├── app.module.ts
│ ├── app.component.ts / html / scss
│ │
│ ├── core/
│ │ ├── guards/
│ │ │ ├── auth.guard.ts
│ │ ├── services/
│ │ │ ├── auth.service.ts
│ │ │ ├── api.service.ts
│ │ ├── interceptors/ (opcional)
│ │ ├── core.module.ts
│ │
│ ├── shared/
│ │ ├── components/
│ │ │ ├── page-title/
│ │ │ │ ├── page-title.component.ts / html / scss
│ │ ├── shared.module.ts
│ │
│ ├── layout/
│ │ ├── components/
│ │ │ ├── layout-shell/
│ │ │ ├── sidebar/
│ │ │ ├── toolbar/
│ │ ├── layout.module.ts
│ │
│ ├── auth/
│ │ ├── pages/login/
│ │ │ ├── login.component.ts / html / scss
│ │ ├── auth-routing.module.ts
│ │ ├── auth.module.ts
│ │
│ ├── students/
│ │ ├── pages/
│ │ │ ├── students-list/
│ │ │ ├── student-detail/
│ │ ├── students-routing.module.ts
│ │ ├── students.module.ts
│ │
│ ├── courses/
│ │ ├── pages/
│ │ │ ├── courses-list/
│ │ │ ├── course-detail/
│ │ ├── courses-routing.module.ts
│ │ ├── courses.module.ts
│ │
│ ├── enrollments/
│ │ ├── pages/
│ │ │ ├── enrollments-list/
│ │ ├── enrollments-routing.module.ts
│ │ ├── enrollments.module.ts
│ │
│ ├── users/
│ │ ├── pages/
│ │ │ ├── users-list/
│ │ ├── users-routing.module.ts
│ │ ├── users.module.ts
│ │
│ ├── store/
│ ├── app.actions.ts
│ ├── app.reducer.ts
│ ├── app.state.ts
│ ├── app.selectors.ts
│
├── assets/
└── environments/
