# 📁 File Manager App (Node.js + Express + EJS)

A simple and modern **File Manager web application** built using **Node.js**, **Express**, and **EJS**.  
This app allows users to **create, read, update, and delete (CRUD)** text files from a web interface with a clean UI and confirmation popups.

---

## 🚀 Features

- 📂 List all files from server directory
- ➕ Create a new file (auto-named with current date)
- ✏️ Edit existing files
- 💾 Update file content
- 🗑️ Delete files with confirmation popup
- 🔁 Automatic redirect after create/update/delete
- 🎨 Modern, responsive UI using pure CSS
- ⚠️ Prevents accidental delete/create actions

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Styling:** Modern CSS (No Bootstrap / Tailwind)
- **File System:** Node.js `fs` module

---

## 📁 Project Structure

project/
│
├── files/ # Stores text files
├── public/
│ └── style.css # Modern CSS
├── views/
│ ├── index.ejs # File listing page
│ └── edit.ejs # File edit page
├── app.js # Express server
└── README.md


