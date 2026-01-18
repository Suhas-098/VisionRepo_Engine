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

# Day 3 – Backend Stabilization & API Debugging

### 1.Backend & Environment Recovery
- Faced unexpected backend breakage due to Node.js reinstallation
- Switched to Node.js v20 (LTS) to restore a stable runtime environment
- Reinstalled dependencies to align with the new Node version

### 2.Prisma & Database Fixes
- Encountered Prisma client initialization failures
- Identified issues caused by:
- Missing url in schema.prisma
- Incorrect usage of prisma.config.ts
- Removed prisma.config.ts and used schema.prisma as the single source of truth
- Downgraded Prisma to v5.22.0 (stable)
- Successfully regenerated Prisma Client
- Verified MongoDB connection and database access

### 3.Express Routing & Middleware Debugging
- Fixed route conflicts where generic /api routes intercepted /api/dashboard routes
- Reordered route registration to ensure specific routes are mounted before generic ones
- Resolved hanging requests caused by middleware not calling next() or returning a response
  
### 4.Dashboard APIs (Working & Verified)
- Implemented and tested:
- GET /api/dashboard/metrics
- GET /api/dashboard/repositories

### 5.Confirmed end-to-end flow:
- Express → Controller → Service → Prisma → MongoDB
- Successfully tested APIs using browser and Postman
- Analyze Endpoint (/api/analyze)
- Endpoint wiring and request validation implemented
- Request reaches controller and service correctly

### 6.main problem
-Encountered 500 errors originating from Gemini AI integration after environment reset
-Issue identified as AI model / environment sensitivity, not routing or backend logic

### 7.What Was Fixed Today
- Node.js version stabilized (v20 LTS)
- Prisma configuration and client generation fixed
- Express routing and middleware issues resolved
- Dashboard APIs fully operational and tested
- What Needs to Be Fixed Next
- Finalize stable Gemini AI model selection
- Improve defensive JSON parsing for AI responses
- Enhance error transparency for /api/analyze

Total Time Spent on day 3 is 6 hours


✅ What We Accomplished DAY 4,5,6 (Day Summary)
🧠 Core Architecture

✅ Completed end-to-end analysis flow

GitHub repo URL → backend → GitHub parsing → Gemini AI → structured output

✅ Removed Prisma + MongoDB completely

No unused DB, no dead code

Cleaner, safer for deadline

📊 Dashboard & UX

✅ Dashboard now renders FULL AI analysis

Repo metadata

Tech stack

Components

Architecture flow

Onboarding steps

Missing context

Confidence score

✅ Fixed invisible text issue (CSS / text color)

✅ Dashboard survives refresh using localStorage

🕘 History & Persistence (Temporary but Solid)

✅ Added temporary save using localStorage

last_analysis

analysis_history (last 10 reports)

✅ “View Dashboard” now works even after refresh

✅ Added Clear History functionality

With confirmation warning to prevent accidental deletion

⏳ Loading & Feedback

✅ Added proper loading UI

Disabled button

Spinner

Full-screen loading overlay

Clear explanation of what’s happening

🧹 Cleanup & Polish

✅ Removed unused dashboard services/APIs

✅ Removed Prisma/Mongo configs & dependencies

✅ Fixed TypeScript errors (repo scope issue, guards, etc.)

✅ Kept landing page preview UI and repurposed it correctly

✅ Analyze page input validation fixed


Total time spent from Day 4 - 6 is 11 hours



