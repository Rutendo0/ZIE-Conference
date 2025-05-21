# ZIE International Conference Website

## Overview

This repository contains a full-stack web application for the Zimbabwe Institution of Engineers (ZIE) International Conference. The application is built with React on the frontend and Express.js on the backend, using Drizzle ORM with PostgreSQL for data persistence.

The conference website includes features for displaying conference information, speaker details, registration functionality, contact forms, and newsletter subscriptions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

1. **Frontend**: React application using Vite as the build tool, with Tailwind CSS for styling and shadcn/ui for UI components.

2. **Backend**: Express.js server that handles API requests, database operations, and serves the static frontend in production.

3. **Database**: PostgreSQL with Drizzle ORM for type-safe database operations. Configured to work with Neon database (serverless Postgres).

4. **API Layer**: RESTful API endpoints that handle operations like user registration, contact form submission, and newsletter subscriptions.

5. **Styling**: Uses a custom theme based on Tailwind CSS with carefully selected colors matching the conference branding.

6. **State Management**: Utilizes React Query for efficient API data fetching and caching.

## Key Components

### Frontend Components

1. **Pages**: 
   - Home - The main landing page combining all sections
   - NotFoundPage - 404 error page

2. **Sections**:
   - Hero - Main header section with countdown
   - About - Information about the conference
   - Speakers - Showcases conference speakers
   - Schedule - Conference timeline
   - Venue - Location details
   - Registration - Pricing tiers and signup
   - Sponsors - Conference sponsors
   - Contact - Contact form
   - Newsletter - Email subscription

3. **UI Components**: 
   - Extensive collection of shadcn/ui components like Button, Card, Dialog, etc.
   - Custom components like Countdown timer

4. **Layout Components**:
   - Header - Navigation bar
   - Footer - Site footer with links and information

### Backend Components

1. **API Routes**:
   - `/api/contact` - Handles contact form submissions
   - `/api/register` - Processes registration requests
   - `/api/subscribe` - Manages newsletter subscriptions

2. **Database Schema**:
   - Users - For conference admin access
   - Registrations - For conference attendees
   - Contacts - For contact form submissions
   - Subscribers - For newsletter subscribers (appears in code but not in main schema file)

3. **Services**:
   - Storage - Data access layer for database operations

## Data Flow

1. **User Registration Flow**:
   - User selects a pricing tier and completes the registration form
   - Frontend sends a POST request to `/api/register`
   - Server validates the data and stores it in the database
   - Response is returned to the frontend with success/error message

2. **Contact Form Flow**:
   - User fills out the contact form
   - Frontend sends a POST request to `/api/contact`
   - Server validates the data using zod schema validation
   - Data is stored in the database
   - Response is returned to the frontend with success/error message

3. **Newsletter Subscription Flow**:
   - User enters email address in the newsletter form
   - Frontend sends a POST request to `/api/subscribe`
   - Server validates the email and stores it in the database
   - Response is returned to the frontend with success/error message

## External Dependencies

### Frontend Dependencies

1. **Core**:
   - React - UI library
   - Wouter - Lightweight router
   - Tailwind CSS - Utility-first CSS framework

2. **UI Components**:
   - shadcn/ui (via Radix UI primitives) - Accessible UI components
   - Lucide React - Icon library

3. **Data Management**:
   - @tanstack/react-query - Data fetching and caching
   - Zod - Schema validation

4. **Styling Utilities**:
   - class-variance-authority - Component variant management
   - clsx - Conditional class names
   - tailwind-merge - Merges Tailwind classes

### Backend Dependencies

1. **Core**:
   - Express - Web framework
   - Drizzle ORM - Type-safe ORM
   - @neondatabase/serverless - Postgres client for Neon

2. **Utilities**:
   - zod-validation-error - Better error messages for Zod

## Deployment Strategy

The application is configured to deploy on Replit with autoscaling:

1. **Development**: 
   - Run with `npm run dev` which starts both the Express server and Vite dev server with hot reloading
   - Access through port 5000

2. **Production**:
   - Build process:
     1. Vite builds the frontend into static assets
     2. esbuild bundles the server code
   - Start with `npm run start` which serves the static frontend and API from the Express server
   - Database is provisioned via the Replit PostgreSQL module

3. **CI/CD**:
   - Replit workflow set up to automatically run the application
   - Deploy using Replit's autoscale deployment target

## Database Schema

The application uses the following database schema:

1. **Users Table**:
   - `id` (primary key)
   - `username` (unique, for admin access)
   - `password` (stored securely)

2. **Registrations Table**:
   - `id` (primary key)
   - `name`
   - `email`
   - `phone`
   - `organization`
   - `jobTitle`
   - `pricingTier`
   - `paymentStatus`
   - `createdAt`

3. **Contacts Table**:
   - `id` (primary key)
   - `name`
   - `email`
   - `subject`
   - `message`
   - `createdAt`

4. **Subscribers Table** (appears in code but not in main schema file):
   - Would typically include email and creation timestamp

The schema is defined using Drizzle ORM's type-safe schema definition and includes Zod validation schemas for data validation.