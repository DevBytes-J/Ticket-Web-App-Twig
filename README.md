# 🎫 SwiftPass - Twig/JavaScript Implementation

A lightweight ticket management system using Twig-inspired templating patterns with vanilla JavaScript, demonstrating modular architecture without framework dependencies.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌐 Live Demo

**🚀 [View Live Application](https://ticketflow-twig.surge.sh)**

---

## ✨ Features

### 🎨 **Design & UI**
- ✅ Wavy SVG hero background
- ✅ Decorative circle overlays
- ✅ Max-width 1440px container layout
- ✅ Card-based design with shadows and rounded corners
- ✅ Consistent footer across all pages
- ✅ Fully responsive (mobile → tablet → desktop)

### 🔐 **Authentication**
- ✅ Login/Signup with form toggle
- ✅ Session management using localStorage
- ✅ Protected routes with automatic redirect
- ✅ Session expiry notifications
- ✅ Secure logout functionality

### 🎫 **Ticket Management**
- ✅ **Create** - Add new tickets with validation
- ✅ **Read** - View all tickets with status badges
- ✅ **Update** - Edit tickets via modal forms
- ✅ **Delete** - Remove tickets with confirmation dialog

### 📊 **Dashboard**
- ✅ Real-time statistics (Total, Open, In Progress, Closed)
- ✅ Color-coded status indicators
- ✅ Quick action buttons
- ✅ Dynamic data updates

### ⚠️ **Validation & Errors**
- ✅ Real-time form validation
- ✅ Inline error messages
- ✅ Toast notifications for all actions
- ✅ Status values: `open`, `in_progress`, `closed`
- ✅ Color coding: Open=Green, In Progress=Amber, Closed=Gray

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vanilla JavaScript (ES6+)** | Core logic and interactivity |
| **Template Strings** | Twig-like HTML templating |
| **Tailwind CSS (CDN)** | Utility-first styling |
| **localStorage** | Persistent data storage |

---

## 🚀 Getting Started

### **Prerequisites**
- Python 3.x (for local server)
- Modern web browser

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/DevBytes-J/ticketflow-twig.git
cd ticketflow-twig
```

2. **Start local server**
```bash
python3 -m http.server 8000
```

3. **Open in browser**
```
http://localhost:8000
```

---

## 🧪 Test Credentials

Use these credentials to test the application:

| Field | Value |
|-------|-------|
| **Email** | `admin@ticketflow.com` |
| **Password** | `admin123` |

---

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|------------|--------|
| **Mobile** | < 640px | Single column, stacked |
| **Tablet** | 640px - 1024px | 2-column grid |
| **Desktop** | > 1024px | 4-column grid |

---

## 🎨 Color System

### **Status Colors**
- **Open**: Green (#10B981)
- **In Progress**: Amber (#F59E0B)
- **Closed**: Gray (#6B7280)

---

## ♿ Accessibility

This application follows WCAG 2.1 AA standards:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ Focus visible states on all interactive elements
- ✅ Color contrast ratio ≥ 4.5:1

---

## 🔗 Other Implementations

This project is part of a multi-framework challenge. View the other implementations:

| Framework | Repository | Live Demo |
|-----------|------------|-----------|
| **React** | [GitHub](https://github.com/DevBytes-J/ticketflow-react) | [Live Demo](https://ticketflow-react.vercel.app) |
| **Vue.js** | [GitHub](https://github.com/DevBytes-J/ticketflow-vue) | [Live Demo](https://ticketflow-vue.netlify.app) |

---

## 👨‍💻 Author

**Joanna Bassey**  
📧 Email: joannabassey19@gmail.com  
🔗 GitHub: [@DevBytes-J](https://github.com/DevBytes-J)

---

**Built with ❤️ for HNG Internship - Frontend Stage 2**