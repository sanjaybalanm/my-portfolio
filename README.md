# Sanjay Balan M — Portfolio

A full-stack personal portfolio website built with **React (Vite)** frontend and **Node.js/Express** backend.

## 🚀 Tech Stack

- **Frontend**: React 18, Vite, Vanilla CSS (Glassmorphism Dark Theme)
- **Backend**: Node.js, Express.js, Nodemailer
- **Database**: None (static portfolio + contact form via email)

## 📁 Project Structure

```
portfolio/
├── frontend/     # React + Vite
├── backend/      # Node.js + Express API
├── .gitignore
└── README.md
```

## ⚙️ Setup & Run

### Backend
```bash
cd backend
npm install
cp .env.example .env   # Fill in your email credentials
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📧 Contact Form Setup

The contact form requires email credentials in `backend/.env`:
- Use a Gmail account with an **App Password** (not your regular password)
- Generate one at: [Google App Passwords](https://myaccount.google.com/apppasswords)

## 🌐 Live

Coming soon...
