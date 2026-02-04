# 👥 User Directory App (React + Tailwind CSS)

A modern, responsive **User Directory Web App** built using **React Hooks** and **Tailwind CSS**, following real-world frontend development practices.

This project focuses on **clean UI, smooth UX, accessibility, and scalable component architecture**.

---

## 🚀 Features

### Core
- Fetch users from public API
- Display users in responsive card layout
- Component-based architecture

### UX Enhancements
- 🔍 Debounced search (300ms)
- 🦴 Skeleton loader while fetching data
- 📭 Empty state UI when no users found
- 🖱️ Hover animations (lift + scale)

### Dark Mode
- 🌙 Light / Dark toggle
- 💾 Theme persisted using localStorage
- 🎨 Tailwind `dark:` utilities

### UI & Accessibility
- Dynamic avatar initials
- Keyboard focus styles
- Mobile-first responsive design

---

## 🛠️ Tech Stack

- React.js (Hooks)
- Tailwind CSS
- JavaScript (ES6+)
- JSONPlaceholder API
- LocalStorage

---

## 📁 Project Structure

src/
├── Components/
│ ├── Card.jsx
│ ├── Loader.jsx
│ ├── UserGrid.jsx
│ └── ThemeToggle.jsx
│
├── App.jsx
└── index.css


---

## ⚙️ How It Works

### Data Fetching
- Users fetched using `fetch` inside `useEffect`
- Loading and error states handled properly

### Debounced Search
- Input value debounced using `setTimeout`
- Improves performance and user experience

### Skeleton Loader
- Displays placeholder cards while API loads

### Dark Mode
- Theme stored in `localStorage`
- Applied using root `dark` class

---

## ♿ Accessibility

- Keyboard focus styles
- High contrast text in both themes
- Clear visual feedback for interactions

---

## 📱 Responsive Design

- Mobile-first layout
- Adaptive grid using Tailwind breakpoints
- Optimized UI for small screens

---

## 🧠 Learnings

- Real-world React state management
- Component-driven UI design
- UX improvements using debounce & loaders
- Professional Tailwind CSS usage
- Dark mode persistence techniques

---

## 🔮 Future Improvements

- Pagination / Infinite scroll
- Error UI state
- User detail modal
- Animations with Framer Motion
- Unit testing

---

## 👨‍💻 Author

**Jaganmohan Reddy**  
Frontend Developer (React)

Built with attention to **performance, UX, and clean code**.