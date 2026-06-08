# PrimeTrade Backend Developer Intern Assignment

This repository contains the complete solution for the PrimeTrade Backend Developer Assignment.

## Features
- **Backend:** Node.js, Express, TypeScript, MongoDB (Mongoose)
- **Frontend:** React (Vite), Vanilla CSS with premium modern aesthetics
- **Authentication:** JWT with bcrypt password hashing
- **Role-Based Access Control (RBAC):** Users can manage their own tasks. Admins can view all tasks from all users.
- **Documentation:** Swagger UI for API docs
- **Security:** Helmet, CORS, Input Validation (Zod)

## Prerequisites
- Node.js (v16+)
- MongoDB (running locally on `mongodb://localhost:27017/primetrade` or you can update `backend/.env`)

## Getting Started

### 1. Setup Backend
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The server will run on `http://localhost:5000`.*
   *Swagger API Documentation is available at `http://localhost:5000/api-docs`.*

### 2. Setup Frontend
1. Open a second terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The application will open in your browser (usually `http://localhost:5173`).*

## API Documentation
The API routes are thoroughly documented using Swagger. Once the backend is running, navigate to `http://localhost:5000/api-docs` to view the endpoints, request/response payloads, and test the APIs directly.

## Testing the Application
1. **Register a User:** Go to the frontend and create an account.
2. **Create Tasks:** Login and create some tasks in your dashboard.
3. **Admin Access:** To test admin access, you can manually update the `role` field in your MongoDB `users` collection to `admin`, then login again. You will see tasks from all users.

## Scalability Note
Please see `scalability.md` for a short architectural design on how to scale this platform.
