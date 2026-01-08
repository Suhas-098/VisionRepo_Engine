# VisionRepo_Engine
InnovateX Hackathon Project


# Day 1 – Project Setup & Initial AI Integration

## Overview
Day 1 focused on establishing a solid foundation for both the frontend and backend. The goal was to set up the core tech stack, ensure UI consistency, and integrate the AI layer with a working API endpoint.

---

## 🎨 Frontend Setup (React + Vite)

### Project Initialization
- Initialized a **React + TypeScript** project using **Vite**
- Verified development server and build configuration

### UI Library Setup (shadcn/ui)
- Installed and configured **shadcn/ui**
- Configured path alias (`@/`) across:
  - `tsconfig.json`
  - `tsconfig.app.json`
  - `vite.config.ts`
- Added and verified core UI components:
  - `Button`
  - `Card`
  - `Input`
  - `Badge`

### Routing
- Set up **React Router**
- Created a base routing structure for future pages

### Branding & UI Polish
- Applied initial branding decisions
- Implemented background design for a clean, modern UI using AI

---

## 🧠 Backend Progress (AI Integration)

### Server Setup
- Installed required backend dependencies
- Initialized and started the backend server successfully

### AI Integration
- Designed a structured AI prompt
- Created a dedicated AI API endpoint
- Integrated AI logic into the backend
- Tested the AI endpoint successfully using **Postman**

---

## ✅ End of Day Status
- Frontend foundation established
- UI system configured and rendering correctly
- Backend server running
- AI integration functional and tested

Total Time Spent on day 1 is 5.5 hours

# Day 2 – Backend Architecture & Prisma Setup

## Overview
On Day 2, the focus was on setting up the backend foundation for VisionRepo using Prisma with MongoDB and understanding proper backend architecture.

## Key Learnings

### 1. Database & ORM Decision
- Chose **MongoDB + Prisma**
- Avoided using Mongoose alongside Prisma
- Learned why only one data access layer should exist

### 2. Prisma Setup
- Initialized Prisma
- Configured MongoDB as the datasource
- Used `prisma generate` and `prisma db push`
- Understood why Prisma migrations are not used with MongoDB


### 4. Service Layer Responsibility
- Services define **business logic**
- Services should never execute logic on import
- Controllers decide *when* to call services

### 5. Dashboard Service Logic(took 40 min to learn how to create and to know how dashboard works xd)
Implemented core service functions:
- `getDashboardMetrics()`  
  - Aggregates repositories and analyses
  - Computes totals and averages for dashboard cards

- `getRepositoriesHealth()`  
  - Returns per-repository health data
  - Acts as a controlled data exposure layer

## Status
- Prisma setup completed
- Service layer logic completed
- Ready to implement controllers and routes next


Total Time Spent on day 2 is 4 hours



