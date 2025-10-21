# 🔐 Auth0-Practice-App: Secure React Authentication

## 📝 Description

This repository serves as a **practical sandbox** for implementing and managing user identity using **Auth0**.  
The goal is to demonstrate **secure, modern authentication workflows** — including user login, protected routes, and token management — within a **high-performance React frontend**.

---

## 🔑 Key Features

- **Secure Authentication:**  
  Integrates Auth0's Universal Login for user sign-up and login.

- **Protected Routes:**  
  Demonstrates how to guard specific components to ensure only authenticated users can access them.

- **Token Management:**  
  Handles the retrieval and use of Access Tokens to interact with protected APIs (mock or real).

- **Modern Tooling:**  
  Built on a fast and efficient React + Vite setup for rapid development.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React** | Frontend library for building the user interface |
| **Vite** | Next-generation frontend tooling for fast bundling and development |
| **Auth0** | Identity management platform for authentication and authorization |
| **TypeScript** | (Recommended) Type safety for improved code quality |

---

## 🚀 Getting Started

### ✅ Prerequisites

Before starting, make sure you have:

- **Node.js (v18+)**
- An **active Auth0 tenant** and application configured for a **Single Page Application (SPA)**

---

### 1️⃣ Installation and Setup

```bash
# Clone the repository
git clone [YOUR-REPO-URL]
cd Auth0-Practice-App

# Install dependencies
npm install
````

---

### 2️⃣ Configure Auth0 Credentials

Create a `.env` file in the **project root** and add your Auth0 domain and Client ID:

```bash
VITE_AUTH0_DOMAIN="your-auth0-domain.us.auth0.com"
VITE_AUTH0_CLIENT_ID="your-auth0-client-id"
```

---

### 3️⃣ Run the Application

```bash
npm run dev
```

The app will run in development mode, typically at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Folder Structure (Optional)

You can include a folder overview for clarity:

```
Auth0-Practice-App/
├── src/
│   ├── components/
│   ├── pages/
│   ├── auth/
│   └── main.tsx
├── public/
├── .env
├── package.json
└── vite.config.ts
```

---

## 🧠 Learning Outcomes

By the end of this project, you'll understand how to:

* Integrate Auth0 into a modern React app
* Protect routes and manage user sessions
* Securely handle tokens for API requests
* Use Vite for a fast and efficient dev experience



