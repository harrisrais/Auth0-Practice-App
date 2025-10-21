##Auth0-Practice-App: Secure React Authentication

Description

This repository serves as a practical sandbox for implementing and managing user identity using Auth0. The goal is to demonstrate secure, modern authentication workflows, including user login, protected routes, and token management, within a high-performance frontend environment.

🔑 Key Features

Secure Authentication: Integrates Auth0's Universal Login for user sign-up and login.

Protected Routes: Demonstrates how to guard specific components to ensure only authenticated users can access them.

Token Management: Handles the retrieval and use of Access Tokens to interact with protected APIs (mock or real).

Modern Tooling: Built on a fast and efficient React and Vite setup for rapid development.

🛠️ Tech Stack

Technology

Purpose

React

Frontend library for building the user interface.

Vite

Next-generation frontend tooling for fast bundling and development.

Auth0

Identity management platform for authentication and authorization.

TypeScript

(Recommended) Type safety for improved code quality.

🚀 Getting Started

Prerequisites

Node.js (v18+)

An active Auth0 tenant and application configured for a Single Page Application (SPA).

1. Installation and Setup

# Clone the repository
git clone [YOUR-REPO-URL]
cd Auth0-Practice-App

# Install dependencies
npm install


2. Configure Auth0 Credentials

Create a file named .env in the project root and add your Auth0 domain and Client ID:

VITE_AUTH0_DOMAIN="your-auth0-domain.us.auth0.com"
VITE_AUTH0_CLIENT_ID="your-auth0-client-id"


3. Run the Application

npm run dev


The app will run in development mode, typically at http://localhost:5173.
