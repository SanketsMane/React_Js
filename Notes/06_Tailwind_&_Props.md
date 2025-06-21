# 🚀 React + Tailwind CSS Setup with Vite

This project demonstrates how to set up **Tailwind CSS** in a **React** application using **Vite**.

---

## 📦 Installation Guide

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

### ✅ Step 1: Install Tailwind CSS

Use npm to install `tailwindcss` and `@tailwindcss/vite`:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

### ⚙️ Step 2: Configure the Vite Plugin

Edit your `vite.config.ts` file:

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

---

### 🎨 Step 3: Import Tailwind CSS

In your main CSS file (e.g., `index.css`), import Tailwind:

```css
@import "tailwindcss";
```

---

### 🚧 Step 4: Run the App

Start your development server:

```bash
npm run dev
```

---

## 🌐 Useful Links

- 🔗 [Tailwind CSS Official Site](https://tailwindcss.com/)
- 🧩 [Free UI Components (Flowbite)](https://flowbite.com/docs/components/banner/)

---

## 💡 Additional Notes

- Tailwind utility classes make styling fast and responsive.
- Combine with React props to dynamically apply styles.

---

## 📂 Folder Structure Example

```plaintext
my-app/
├── src/
│   ├── App.jsx
│   └── index.css   ← Tailwind imported here
├── vite.config.ts  ← Tailwind plugin configured
└── package.json
```

---

@Sanket Mane
