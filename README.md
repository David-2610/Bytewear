# 👘 Bytewear – Anime-Themed Ecommerce Platform

Bytewear is a modern, anime-themed ecommerce platform built with the **MERN stack**: MongoDB, Express.js, React.js, and Node.js. It supports user authentication, payment integration, admin controls, and cloud-based image handling.

---
# 📸 Screenshots

![Bytewear Screenshot](./Screenshot%202025-06-16%20105801.png)

---

## 🧱 Tech Stack

### Frontend
- React 19
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- PayPal SDK
- Cloudinary API

### Backend
- Node.js
- Express.js 5
- MongoDB & Mongoose
- JWT (JSON Web Token)
- WebSockets
- Multer & Streamifier
- Cloudinary

---

## 🔐 Authentication & Security

- JWT-based authentication
- Role-based access control (admin & user)
- Password hashing using bcryptjs

---
## For Admin Login 
---
Email - Admin@gmail.com
Password - Admin@25
---
## 📦 Features

- 🛍️ Browse anime-themed products
- 👤 User authentication & account handling
- 🧺 Shopping cart & order management
- 💳 PayPal payment integration
- 🖼️ Cloudinary-powered image uploads
- 🔐 Secure APIs with JWT
- 🧑‍💼 Admin dashboard to manage products & users
- 📱 Fully responsive UI



---

## ⚙️ Environment Variables

### Frontend `.env`
```env
VITE_PAYPAL_CLIENT_ID=your-paypal-client-id
VITE_BACKEND_URL=http://localhost:9000
```

# ⚙️ Backend Environment Variables

To configure the backend server, create a `.env` file in your `backend` directory with the following content:

```env
PORT=9000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

# 📦 Dependencies

## Frontend

```json
"@paypal/react-paypal-js": "^8.8.2",
"@reduxjs/toolkit": "^2.8.2",
"@tailwindcss/vite": "^4.0.6",
"axios": "^1.9.0",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-icons": "^5.4.0",
"react-redux": "^9.2.0",
"react-router": "^7.1.5",
"react-router-dom": "^7.1.5",
"sonner": "^2.0.1",
"tailwind-scrollbar-hide": "^4.0.0",
"tailwindcss": "^4.0.6"
```

## Backend

```json
"bcryptjs": "^3.0.2",
"cloudinary": "^2.6.1",
"cors": "^2.8.5",
"dotenv": "^16.5.0",
"express": "^5.1.0",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.15.1",
"multer": "^2.0.1",
"nodemon": "^3.1.10",
"streamifier": "^0.1.1"
```

---

# 🧪 Local Development

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/bytewear.git
cd bytewear
```

## 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

## 3. Setup Backend

```bash
cd backend
npm install
npm run dev
```

---


# 📌 Final Notes

Bytewear is a full-stack ecommerce application developed entirely from scratch to provide a smooth shopping experience for anime enthusiasts. It demonstrates integration of modern tools, responsive design, and secure backend operations.

---
