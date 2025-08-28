# 💇‍♀️ New Appointment - Beauty Center Booking System

A full-stack web application for booking beauty services online. Users can register, log in, choose services (makeup, haircut, laser, etc.), and view available beauty products for purchase.

---

## 🚀 Tech Stack

- **Frontend**: React (with Vite), React Router
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS & custom CSS
- **Tools**: Git, GitHub

---

## 🌐 Pages Overview

| Page         | Route           | Description                           |
|--------------|------------------|---------------------------------------|
| Home         | `/`              | Main landing page                     |
| About        | `/about`         | About the beauty center               |
| Contact      | `/contact`       | Contact form                          |
| Register     | `/register`      | Create a new user account             |
| Login        | `/login`         | Log in and receive JWT token          |
| Dashboard    | `/dashboard`     | User dashboard after login            |
| Booking      | `/booking`       | Book appointments with services       |
| Products     | `/products`      | Display available beauty products     |

---

## 📸 Screenshots

> Add real screenshots of your app here once ready:

```
public/
  └── screenshots/
        ├── login.png
        ├── homepage.png
        ├── booking-form.png
```

---

## 📁 Project Structure (Frontend)

```
frontend/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── BookingForm.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Booking.jsx
│   └── Products.jsx
├── services/
│   └── api.js
├── App.jsx
└── index.jsx
```

---

## ⚙️ Run Locally

Clone the project and install dependencies:

```bash
git clone https://github.com/your-username/New-Appointment.git
cd frontend
npm install
npm run dev
```

For backend:

```bash
cd backend
npm install
nodemon server.js
```

---

## 🔐 Authentication Logic

- User receives a token on login
- Token is saved in `localStorage`
- Pages like `/dashboard` and `/booking` are only accessible with a token
- Automatic redirect to `/login` if token is missing

---

## 🌿 Git Workflow

```bash
# Create a new feature branch
git checkout -b login-fix

# Add and commit changes
git add .
git commit -m "Fix login functionality and booking route"

# Push to GitHub
git push --set-upstream origin login-fix
```

---

## 📌 Developer

Built with ❤️ by [Reem Abdullah](https://github.com/reemabdullah49)

---

## 📄 License

This project is licensed under the MIT License.