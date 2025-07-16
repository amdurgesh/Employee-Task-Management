# 🚀 EMS Employee Task Management System

A lightweight React + Tailwind CSS application that provides a simplified Employee Task Management System. Built for learning and demonstration purposes, it supports Admin and Employee roles with functionality to assign, track, and manage daily tasks.


## 📌 Project Overview

- This EMS (Employee Management System) Task Manager allows:

- Admins to assign tasks.

- Employees to view, update, and mark their tasks.

- Role-based access control.

- Task status tracking: New, Active, Completed, and Failed.



## 🛠 Tech Stack

| Technology   | Purpose/Use                          |
|--------------|--------------------------------------|
| React.js     | Frontend JavaScript framework        |
| Tailwind CSS | Utility-first CSS styling framework  |
| Vite         | Development/build tool for React     |
| JSON         | Mock data storage for users & tasks  |



## 👥 User Roles

| 👤 Role     | 🧩 Permissions                                                                 |
|-------------|--------------------------------------------------------------------------------|
| 👨‍💼 Admin   | - View all employees<br> - Assign tasks<br> - Monitor task statuses |
| 👷 Employee | - View own tasks<br> - Update task status<br> - Read task details               |


## 📊 Task Statuses

| 🏷 Status     | 📝 Description                                |
|---------------|-----------------------------------------------|
| 🆕 New         | Task has been assigned but not yet started    |
| 🚧 Active      | Task is currently in progress                 |
| ✅ Completed   | Task has been successfully completed          |
| ❌ Failed      | Task was not completed or was overdue         |


## 📋 Features

### 👨‍💼 Admin Panel

- ✅ Login Page

- ✅ View list of all employees

- ✅ Assign new tasks to employees

- ✅ Track progress of all tasks

- ✅ View task counts by status (active, completed, etc.)


### 👷 Employee Panel

- ✅ Login with email/password

- ✅ View assigned tasks

- ✅ Mark task as active, completed, or failed




## 📊 Sample Admin JSON

{
  "admin": {
    "id": "admin001",
    "email": "admin@me.com",
    "password": "123"
  }
}

## 👥 Sample Employees JSON

[
  {
    "id": "emp001",
    "firstName": "Amit",
    "email": "emp1@example.com",
    "password": "123",
    "tasks": [ ... ]
  },
]

# 🔍Purpose:

- No backend/server is connected;
- this project is for frontend learning only.
