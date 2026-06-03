# MERN Stack Machine Test

## Features

* Admin Login using JWT Authentication
* Agent Creation and Management
* CSV/XLS/XLSX Upload
* Automatic Task Distribution among 5 Agents
* MongoDB Database Integration
* View Distributed Tasks
* Protected APIs

## Tech Stack

### Frontend

* React.js
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer
* XLSX

## Installation

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

## Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Login Credentials

```text
Email: admin@test.com
Password: admin123
```

## CSV Format

```csv
FirstName,Phone,Notes
John,9876543210,Lead
Rahul,9876543211,Interested
Priya,9876543212,Follow Up
```

## API Endpoints

### Authentication

POST /api/auth/login

### Agents

POST /api/agents

GET /api/agents

### Upload

POST /api/upload

GET /api/upload

## Author

MERN Stack Machine Test Submission
