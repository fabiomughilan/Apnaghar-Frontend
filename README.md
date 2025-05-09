# 🏠 PG Listing Portal - Fabio Mughilan

Link: " "

A modern, responsive web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** that allows users to search and filter Paying Guest (PG) accommodations by rent, location, and type. This project supports pagination, reusable components, and clean, modular code structure.

## 🚀 Features

- 🔍 **Search Functionality** — Search PGs by title or location
- 📍 **Filters** — Filter PG listings by rent, location, and type (e.g., Boys, Girls, Unisex)
- 📄 **Pagination** — Navigate listings with paginated results
- 🎨 **Responsive UI** — Fully responsive with Tailwind CSS
- ♻️ **Modular Architecture** — Reusable hooks, components, and clean folder structure
- ⚡ **Client-side State Management** — Using React hooks for smooth filtering

## 📁 Folder Structure

src/
│
├── app/
│ └── page.tsx # Main page rendering the PG listing portal
│
├── components/
│ ├── Header.tsx # App header
│ ├── Footer.tsx # App footer
│ ├── PropertyCard.tsx # Individual PG listing card
│ ├── Pagination.tsx # Pagination component
│ └── SearchFilters.tsx # Filters & search UI
│
├── data/
│ └── properties.ts # Static JSON array of PG properties
│
├── hooks/
│ └── useFilteredProperties.ts# Custom hook managing filtering, pagination
│
├── pages/
│ └── pg-listing.tsx 


## 🛠️ Technologies Used

- **Next.js 14** – React Framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first CSS for styling
- **React Hooks** – For local state management
- **ESLint & Prettier** – For code formatting and linting

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fabiomughilan/Apnaghar-Frontend.git

npm install
# or
yarn

npm install
# or
yarn


