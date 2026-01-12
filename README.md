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


📅 Day 4 – Backend Stabilization & Frontend Integration
📌 Overview

Day 4 focused on stabilizing the backend, validating API contracts, and connecting the frontend with live backend data.
This day marks the transition from isolated backend development to a fully wired full-stack flow.

✅ Achievements
🔧 Backend

Backend stabilized and running reliably on Node.js v20

Database integrated using Prisma v5.22.0 + MongoDB

Core APIs verified using Postman

AI analysis endpoint integrated with Gemini (stable)

Implemented API Endpoints:

GET /api/dashboard/metrics

Returns aggregated dashboard statistics:

Total repositories

Total analyses

Total issues

Average health score

POST /api/analyze

Accepts repository metadata

Performs AI-based analysis

Designed to persist results for dashboard aggregation

🎨 Frontend

Frontend running on Vite + React (localhost:5173)

Successfully connected frontend to backend APIs

Implemented a central API client for clean data fetching

Dashboard page now consumes real backend data

Debug JSON rendering replaced with structured UI components

🔄 Key Learning Outcomes

Clear separation of concerns between:

Backend aggregation logic

Frontend rendering logic

Importance of API response contracts

Debug-first approach:

Validate APIs in Postman

Then integrate with frontend

Handling empty states correctly (zero data ≠ error)

🧠 Problem Solved (Important)

Issue:
Frontend was showing “Something went wrong” despite APIs working.

Root Cause:
Frontend was calling an endpoint that returned empty data (/repositories) instead of the metrics endpoint (/metrics), causing rendering failures.

Fix:

Identified correct data source

Updated frontend to consume /api/dashboard/metrics

Ensured frontend parsing matched backend response shape

📊 Current Dashboard State

Since no repositories have been analyzed yet, the dashboard correctly displays:

{
  "totalRepositories": 0,
  "totalAnalysis": 0,
  "totalIssues": 0,
  "averageHealthScore": 0
}


This confirms:

End-to-end data flow is working

System behaves correctly with empty data

🏗️ Project Status After Day 4

✅ Backend stable

✅ Database connected and queried via Prisma

✅ APIs tested and reliable

✅ Frontend-backend integration complete

✅ Ready for feature expansion

Total Time Spent on day 4 is 4.5 hours



