# VisionRepo_Engine
InnovateX Hackathon Project


Day 1:
## Frontend Setup (React + Vite)
-Initialized a React + TypeScript frontend using Vite
-Shadcn UI Setup
Configured path alias (@/) correctly in:
tsconfig.json
tsconfig.app.json
vite.config.ts
Installed Shadcn UI
Added core UI components:
Button
Card
Input
Badge
Verified everything renders correctly
-Routing Setup (React Router)
-Branding & UI Polish
 Background Design

 
 ## Backend Progress (AI Integration)
- Installed required backend packages  
- Set up and started the server  
- Integrated AI with a structured prompt  
- Created a dedicated AI API endpoint  
- Tested the endpoint successfully using Postman

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



