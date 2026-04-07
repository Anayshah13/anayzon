# Anayzon

Amazon-style e-commerce with an updated UI on the original tutorial stack—React frontend and integrated Express/MongoDB backend.

## Run locally

### 1. Clone and enter the project

```bash
git clone <repository-url>
cd anayzon
```

Use your real repo URL and folder name if they differ.

### 2. MongoDB

Pick **one** of these:

**Option A — MongoDB on your machine**

1. Install [MongoDB Community Server](https://www.mongodb.com/docs/manual/administration/install-community/).
2. Start the MongoDB service so it listens on the default address (usually `mongodb://127.0.0.1:27017`).

**Option B — MongoDB Atlas (cloud)**

1. Create a cluster and database user in [Atlas](https://www.mongodb.com/cloud/atlas).
2. Get your connection string (SRV URI) and use it as `MONGODB_URL` in the next step.

### 3. Environment variables (optional)

At the **project root** (same folder as the root `package.json`), create a `.env` file if you need to override defaults:

```env
PORT=5000
MONGODB_URL=mongodb://127.0.0.1:27017/amazona
JWT_SECRET=your-secret
PAYPAL_CLIENT_ID=sb
```

If you skip this file, the server uses `PORT=5000` and `MONGODB_URL=mongodb://localhost:27017` (see `backend/config.js`). For Atlas, set `MONGODB_URL` to your Atlas URI.

### 4. Install and start the backend

In the **project root**:

```bash
npm install
npm start
```

This runs the API with nodemon (default: **http://localhost:5000**). Leave this terminal open. You should see a log line like `Server started at http://localhost:5000` once MongoDB is reachable.

### 5. Install and start the frontend

Open a **second** terminal:

```bash
cd frontend
npm install
npm start
```

The React app runs on **http://localhost:3000** and proxies API calls to the backend (`frontend/package.json` `proxy`).

### 6. First-time admin user (optional)

With the backend running, open:

**http://localhost:5000/api/users/createadmin**

The response includes the admin email and password you can use at **http://localhost:3000/signin**.

---

**Requirements:** [Node.js](https://nodejs.org/) and npm (this project was written for older Node; on newer Node, the frontend script already sets `NODE_OPTIONS=--openssl-legacy-provider` for Create React App on Windows).
