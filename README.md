# 🖋️ Boilerplate app – Root Setup Guide

This is a **boilerplate MERN stack application**, designed with modern tooling and best practices.

### 🚀 Technologies Used:

- **MongoDB**, **Mongoose**
- **Express.js**
- **React**, **Vite**, **Redux**, **React Router**
- **TailwindCSS**, **React Icons**
- **Axios**, **bcryptjs**
- **express-session**, **connect-mongodb-session**
- **express-validator**, **multer**
  
> ⚒️ Perfect for building secure, scalable full-stack apps faster than Luffy finds trouble.

---

## 📁 What’s in the Root Directory?

This guide explains a few important files found at the **root level** of the project, and whether you need them, or can toss 'em overboard.

---

### 🔹 `package.json` (Root)

This file is the **central command deck** for the entire PENPAL project.

It handles project-level dependencies like `concurrently` and defines key scripts, including:

- ✅ `npm run dev` — Runs **both frontend and backend** dev servers in **a single terminal window**
- ✅ `npm run bootstrap` — Installs dependencies across all layers of the stack (more on this below)

This root `package.json` **does not replace** the individual `package.json` files in `/client` and `/server`. It simply **coordinates** them—like a good captain.

---

### 🔹 `bootstrap.js`

This file is a custom **Node.js script** that makes onboarding smoother and setup faster.

#### What it does:
When you run:
```bash
npm run bootstrap
```

It executes the following behind the scenes:
```js
npm install               // Installs root dependencies
npm install in ./client   // Installs frontend dependencies
npm install in ./server   // Installs backend dependencies
```

This script is especially useful when someone **clones the repo** and wants to get everything running in one shot.

> 🧠 TL;DR: One script to install them all.

---

## 🧹 Can I Delete These Files?

| File          | Can I delete it? | Reason                                                                 |
|---------------|------------------|------------------------------------------------------------------------|
| `package.json` (root) | ❌ No               | Needed to run full-stack dev, bootstrap, and keep things unified       |
| `bootstrap.js`        | ✅ Optional         | Not required to run the app, but really helpful for quick setup       |
| `.gitignore`          | ❌ No               | Keeps your repo clean and secure from `node_modules`, `.env`, etc.    |

---

## ✅ Quick Start

```bash
# Step 1: Install all dependencies
npm run bootstrap

# Step 2: Start the project (client + server)
npm run dev
```

Your **React + Vite** app will start on port `5173`, and your **Express** backend on port `5172` (or whatever you set).

---

## 🧭 Final Word

This structure keeps your MERN project **modular**, **scalable**, and **team-ready**. Whether you're building for fun or battle-testing something for production, the root setup is here to make life easy.

Stay smooth, stay sharp—and don’t forget to `git commit` like a captain logs his journey. ⚓