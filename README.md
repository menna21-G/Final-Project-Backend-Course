# Smart Course Management System

## About the Project

Smart Course Management System is a backend project for managing courses using Node.js, Express.js, MongoDB, and Mongoose.

## Entity Chosen

The chosen entity is **Course** because courses are a main part of the Smart Course Management System.

The Course module allows users to create, view, update, and delete courses.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Postman

## Features Implemented

* Course CRUD operations
* User authentication and authorization
* Role-based access control
* Course ownership authorization
* File upload using Multer
* Course image upload
* Saving the uploaded image path with the course data in MongoDB

## Course Routes

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/v1/courses`     | Create a new course |
| GET    | `/api/v1/courses`     | Get all courses     |
| GET    | `/api/v1/courses/:id` | Get a course by ID  |
| PATCH  | `/api/v1/courses/:id` | Update a course     |
| DELETE | `/api/v1/courses/:id` | Delete a course     |

## File Upload

The Course module supports image upload using **Multer**.

Uploaded images are stored in the `uploads` folder, and the image path is saved with the course data in MongoDB.

The image is uploaded when creating a course using the `image` field in a `multipart/form-data` request.

## How to Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file and add the required MongoDB connection string and other environment variables.

### 3. Start the server

```bash
npm start
```

The server runs on:

`http://localhost:5000`

## API Usage Examples

### Create a Course

Send a POST request to `/api/v1/courses` with the course information and an image using `multipart/form-data`.

### Get All Courses

Send a GET request to `/api/v1/courses` to retrieve all available courses.

### Get a Course by ID

Send a GET request to `/api/v1/courses/:id` to retrieve a specific course.

### Update a Course

Send a PATCH request to `/api/v1/courses/:id` with the information that needs to be updated.

### Delete a Course

Send a DELETE request to `/api/v1/courses/:id` to delete a specific course.

## Postman Testing

The Course CRUD operations and file upload functionality were tested using Postman.

Screenshots of the requests and responses are available in the `screenshots` folder.
