# Proyecto de E-commerce - Back-end

**Autor**: Nicolás Schaller

Este proyecto es un servidor avanzado para una aplicación de e-commerce, desarrollado con una arquitectura profesional y enfocado en la escalabilidad, seguridad y organización del código. Incorpora prácticas como patrones de diseño, DAOs, DTOs, y un sistema robusto de autenticación y autorización con JWT. Se utilizó **Node.js** y **Express.js** en el backend, y **MongoDB Atlas** como base de datos en la nube.

---

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Objetivos](#objetivos)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Rutas y Funcionalidades](#rutas-y-funcionalidades)
- [Frameworks y Librerías](#frameworks-y-librerías)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Descripción del Proyecto

El proyecto consiste en una API RESTful para un sistema de e-commerce donde los usuarios pueden gestionar productos, carritos y realizar compras. Incluye una estructura profesional utilizando patrones de diseño y buenas prácticas de desarrollo. Los usuarios pueden registrarse, iniciar sesión y acceder a funcionalidades avanzadas de compra. La arquitectura del servidor permite una gestión eficaz de productos y una separación de responsabilidades a través de DAOs (Data Access Objects) y DTOs (Data Transfer Objects).

## Objetivos

1. Profesionalizar el servidor con una arquitectura adecuada para producción.
2. Aplicar buenas prácticas de desarrollo como el uso de DAOs, DTOs, y el patrón Repository.
3. Implementar autenticación y autorización para delimitar accesos y permisos.
4. Incorporar un sistema de generación de tickets de compra para formalizar las transacciones.
5. Utilizar variables de entorno para la configuración de la aplicación.

---

## Requisitos

- **Node.js** (v14 o superior)
- **npm** (Gestor de paquetes de Node.js)
- **MongoDB Atlas** (Base de datos en la nube)

## Rutas y Funcionalidades

### Rutas de Productos

- **GET /api/products**: Obtener todos los productos.
- **POST /api/products**: Crear un nuevo producto (solo administrador).
- **PUT /api/products/:id**: Actualizar un producto existente (solo administrador).
- **DELETE /api/products/:id**: Eliminar un producto (solo administrador).

### Rutas de Carrito

- **POST /api/carts/:cid/add**: Agregar un producto al carrito (solo usuarios).
- **DELETE /api/carts/:cid/remove**: Eliminar un producto del carrito.
- **POST /api/carts/:cid/purchase**: Finalizar compra de productos en el carrito.

### Rutas de Autenticación

- **POST /api/auth/register**: Registrar un nuevo usuario.
- **POST /api/auth/login**: Iniciar sesión y obtener un token JWT.

### Rutas de Tickets

- **GET /api/tickets/:id**: Obtener detalles de un ticket de compra.

### Middleware de Autorización

- Solo los administradores pueden crear, actualizar y eliminar productos.
- Solo los usuarios pueden agregar productos a sus carritos.

### DTOs y DAO

- **Data Access Objects (DAO)**: Para separar la lógica de acceso a la base de datos de la lógica de negocio.
- **Data Transfer Objects (DTO)**: Para transferir datos de manera segura entre las capas de la aplicación.

---

## Frameworks y Librerías

### Backend

- **[Node.js](https://nodejs.org/)**: Entorno de ejecución para JavaScript en el servidor.
- **[Express.js](https://expressjs.com/)**: Framework para manejar rutas y solicitudes HTTP.
- **[Mongoose](https://mongoosejs.com/)**: Biblioteca para modelado de datos en MongoDB.
- **[dotenv](https://github.com/motdotla/dotenv)**: Manejo de variables de entorno.
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)**: Biblioteca para generación y verificación de tokens JWT.
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Para hashear contraseñas y asegurar credenciales.

### Base de Datos

- **[MongoDB Atlas](https://www.mongodb.com/atlas/database)**: Base de datos en la nube utilizada para almacenar datos de usuarios, productos, carritos y tickets.

### Seguridad

- **JWT**: JSON Web Tokens para autenticación y autorización segura.
- **bcrypt**: Para proteger contraseñas mediante hashing.
