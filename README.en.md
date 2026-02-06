# 🏛️ Modern Arq Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.1.5-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**A modern and responsive portfolio for architectural projects**

[✨ Features](#-features) • [🚀 Getting Started](#-getting-started) • [📁 Structure](#-project-structure) • [🔧 Technologies](#-tech-stack)

</div>

---

## 📖 About the Project

Modern Arq Portfolio is a modern web application developed with React, designed to showcase architectural projects in an elegant and professional way. The project offers a smooth user experience with multi-language support, favorites system, and fully responsive design.

## ✨ Features

### 🌍 Multi-language
- Switch between **Portuguese** and **English**
- User preference saved in localStorage
- Fully translated interface

### 🎨 Projects Showcase
- Dynamic listing of architectural projects
- Images, titles, and detailed descriptions
- Organized and professional display

### ⭐ Favorites System
- Save and manage favorite projects
- Session-based storage
- Intuitive interface for marking

### 📱 Responsive Design
- Interface adapted for all devices
- Adaptive navigation menu
- Optimized experience on mobile, tablet, and desktop

### 🔄 Dynamic Content
- Integration with external API
- Easy content management
- Real-time updates

### 🎯 Modern Interface
- Clean and professional design
- Smooth animations
- Fluid user experience

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, make sure you have installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pedrorfdev/Modern-Arq-Portfolio.git
   cd modern-arq-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## 📁 Project Structure

```
modern-arq-portfolio/
├── 📂 public/              # Static files
│   ├── about.jpg
│   ├── contact.jpg
│   ├── hero.jpg
│   └── projects.jpg
│
├── 📂 src/
│   ├── 📂 assets/          # Images and icons
│   ├── 📂 components/      # Reusable React components
│   │   ├── AboutText/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── LoadingSpinner/
│   │   └── ProjectsList/
│   ├── 📂 contexts/        # React Context providers
│   ├── 📂 pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── 📂 services/        # API services
│   ├── 📂 utils/           # Utility functions
│   ├── App.jsx             # Main component
│   ├── main.jsx            # Entry point
│   └── main.css            # Global styles
│
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Tech Stack

<div align="center">

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0.0 | User interface library |
| **React Router DOM** | 7.1.5 | Client-side routing |
| **Vite** | 6.1.0 | Build tool and development server |
| **Context API** | - | Global state management |
| **ESLint** | 9.19.0 | Code quality and linting |

</div>

## 🔌 API Integration

The application fetches content from an external API for easy management:

- **Base URL**: `https://dnc-react-api.vercel.app/files/`
- **Endpoints**:
  - `/projects` - Retrieves architectural projects data
  - `/webtext` - Retrieves multi-language text content

## 📚 Features in Detail

### 🌐 Language Switching

Users can switch between Portuguese and English through buttons in the header and footer. The selected language is saved in `localStorage` and persists between browser sessions.

### ⭐ Project Favorites

Users can mark projects as favorites by clicking the heart icon. Favorite selections are stored in `sessionStorage` and persist during the browser session.

### 📱 Responsive Navigation

The header includes a responsive navigation menu for mobile devices that automatically adapts to different screen sizes, providing an optimized experience on all devices.

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment on any static hosting service.

## 📄 License

This project is private and intended for personal portfolio purposes.

---

<div align="center">

**Developed with ❤️ to showcase architectural projects**

⭐ If this project was useful, consider giving it a star!

</div>
