# Sample Base Setup - Backend Service

![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

A robust, scalable, and secure backend base setup built with **Express.js**, **TypeScript**, and **MongoDB**. This setup serves as a solid foundation for building production-ready RESTful APIs with built-in security, validation, and cloud integration.

---

## 🚀 Key Features

- **🛡️ Security First**: Integrated with `Helmet`, `HPP`, `CORS`, and `Express Rate Limit` to protect against common web vulnerabilities.
- **🔐 Authentication**: Robust JWT-based authentication system with Access and Refresh token support.
- **✅ Validation**: Strong schema validation using `Zod` for request bodies, queries, and parameters.
- **📁 Cloud Storage**: Pre-configured `AWS S3` integration for file uploads and management.
- **✉️ Email Service**: Integrated with `Resend` for reliable transactional emails (OTP, notifications).
- **📜 Documentation**: Automatically generated API documentation using `Swagger UI`.
- **🛠️ Developer Experience**: Optimized with `TypeScript`, `ESLint`, `Prettier`, `Husky`, and `CSpell` for high code quality.
- **📊 Logging**: Structured logging using `Pino` for better observability.

---

## 🛠️ Tech Stack

- **Core**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Security**: [Helmet](https://helmetjs.github.io/), [CORS](https://github.com/expressjs/cors), [Express Rate Limit](https://github.com/n67/express-rate-limit)
- **Authentication**: `jsonwebtoken`, `bcryptjs`
- **Email**: [Resend](https://resend.com/)
- **Storage**: [AWS SDK for S3](https://aws.amazon.com/s3/)
- **Documentation**: [Swagger JSDoc](https://github.com/Swaagie/swagger-jsdoc), [Swagger UI Express](https://github.com/scottie198/swagger-ui-express)

---

## 📂 Project Structure

```text
src/
├── config/        # Environment and global configurations
├── controller/    # Business logic for request handling
├── db/            # Database connection and Mongoose models
├── exceptions/    # Custom HTTP exception classes
├── middleware/    # Express middlewares (Auth, Validation, Logger)
├── routes/        # API route definitions (v1)
├── schemas/       # Zod validation schemas
├── services/      # External service wrappers (S3, Resend)
├── utils/         # Helper functions and utilities
├── index.ts       # Application entry point
└── swagger.ts     # Swagger documentation setup
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v24.15 or later`
- **npm**: `v10 or later`
- **MongoDB**: A running instance or MongoDB Atlas URI

### Installation

1.  **Clone the repository**:
    ```bash
    git clone git+ssh://git@gitlab.com/exelon-anix-innovation/sample-base-setup.git
    cd sample-base-setup
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory by copying the `sample.env`:
    ```bash
    cp sample.env .env
    ```
    Then, fill in your credentials (MongoDB URI, AWS keys, Resend API key, etc.).

### Running the Application

- **Development Mode** (with Nodemon and auto-reload):
    ```bash
    npm run build:live
    ```

- **Production Build**:
    ```bash
    npm run build
    npm start
    ```

---

## 📖 API Documentation

Once the server is running, you can access the interactive Swagger documentation at:

```text
http://localhost:7009/swagger
```
*(Note: Port may vary based on your `.env` configuration)*

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run build:live` | Starts the development server with auto-reload. |
| `npm run build` | Compiles TypeScript to JavaScript in the `lib` folder. |
| `npm run start` | Runs the compiled application. |
| `npm run lint` | Runs ESLint to check for code issues. |
| `npm run format` | Formats the codebase using Prettier. |
| `npm run cspell` | Checks for spelling errors in the `src` folder. |

---

## 📐 Coding Standards

This project enforces high-quality coding standards through:

- **ESLint**: Lints the code for potential errors and style consistency.
- **Prettier**: Automatically formats the code for readability.
- **Husky & lint-staged**: Runs linting and formatting on every commit to ensure clean code in the repository.
- **CSpell**: Ensures no typos or spelling mistakes in the code and documentation.

---

## ⚖️ License

This project is licensed under the **ISC License**.
