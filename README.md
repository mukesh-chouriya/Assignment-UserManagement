# Assignment-UserManagement

## UserManagement

A full-stack CRUD app for managing users, built with **React**, **Node.js**, **Express**, and **MongoDB**.

 **Live Demo**: [UserManagement App](https://686bb50aef402d7d3c537419--guileless-gecko-aeec0f.netlify.app/)

---

## Features

- Add, edit, delete, and view users
- React frontend with Axios for API calls
- Node.js + Express backend
- MongoDB for data storage

---

##  Tech Stack

- **Frontend**: React (inside `/frontend`)
- **Backend**: Node.js, Express (inside `/backend`)
- **Database**: MongoDB (via Mongoose)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mukesh-chouriya/UserManagement.git
cd UserManagement

# Setup backend
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your-mongodb-uri
# PORT=5000
npm run dev

# Open a new terminal tab/window and setup frontend
cd ../frontend
npm install
npm start
