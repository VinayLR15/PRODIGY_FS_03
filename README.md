# 🛍️ Local Store E-Commerce Web App

This is a full-stack E-Commerce web application built with **MERN stack** and **Tailwind CSS**, supporting product browsing, user reviews, contact form, and a responsive UI.

---

## 📁 Folder Structure

```
PRODIGY_FS_03/
├── backend/
│   ├── models/
│   │   ├── message.js
│   │   ├── producttemp.js
│   │   └── review.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── productRoutes.js
│   │   └── reviewRoutes.js
│   ├── Products.json
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── ProductCard.js
│   │   ├── pages/
│   │   │   ├── Buy.js
│   │   │   ├── Cart.js
│   │   │   ├── Contact.js
│   │   │   ├── Home.js
│   │   │   └── Reviews.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
```

---

## 🚀 Features

- 🛒 Product browsing (fetched from MongoDB)
- ⭐ User reviews (Add & View reviews per product)
- 📬 Contact form
- 🧾 Shopping cart UI
- 🌈 Tailwind CSS styling
- 🔗 Frontend-Backend connection using RESTful APIs

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas
- **Others**: dotenv, mongoose, cors, nodemon

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/local-store-ecommerce.git
cd local-store-ecommerce
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

#### 👉 Configure Environment

Create a `.env` file inside `backend/`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourDB
PORT=5000
```

#### 👉 Seed Products

```bash
npm run seed
```

#### 👉 Start Backend

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
```

#### 👉 Start Frontend

```bash
npm start
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Routes

### 📦 Product APIs

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/products`      | Get all products    |

### 🗣️ Review APIs

| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| GET    | `/api/reviews/:productId` | Get reviews for product |
| POST   | `/api/reviews`            | Add a new review        |

### 📩 Contact API

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/contact`   | Submit contact message  |

---

## 🙌 Acknowledgment

This project is developed as part of **Prodigy InfoTech Full Stack Development Internship**. Special thanks to mentors and the open-source community.

---

## 👨‍💻 Author

- [VinayLR15](https://github.com/VinayLR15)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).
