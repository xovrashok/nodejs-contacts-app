# ⚡ Contacts REST API

A robust, production-ready RESTful API for contact management built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. The application features a clean MVC architecture, centralized error handling, asynchronous controller wrappers, and structured request logging.

[![Node.js](https://img.shields.io/badge/NODE.JS-20.x-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/EXPRESS-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MONGODB-Mongoose-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![License](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](LICENSE)

---

## ✨ Features

- **Full CRUD Operations**: Complete suite of endpoints to create, read, update, and delete contacts efficiently.
- **MVC & Service Pattern**: Strict separation of concerns across dedicated routers, controllers, and database services.
- **Centralized Error Management**: Robust error handling using `http-errors` combined with custom Express `errorHandler` and `notFoundHandler` middlewares.
- **Async Utility Wrapper**: Reusable `ctrlWrapper` utility that eliminates repetitive `try...catch` blocks in controllers.
- **Structured HTTP Logging**: Integrated request logging utilizing `pino-http` and `pino-pretty` for clean console output.
- **Secure Environment Configuration**: Environment variable management using `dotenv` with strict validation helpers.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/contacts` | Retrieve a list of all saved contacts |
| **GET** | `/contacts/:contactId` | Retrieve a single contact by its unique ID |
| **POST** | `/contacts` | Create a new contact with validation |
| **PATCH** | `/contacts/:contactId` | Partially update an existing contact |
| **DELETE** | `/contacts/:contactId` | Delete a contact by ID |
