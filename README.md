# EduFlow – Smart Course Management System

## 📌 About the Project

EduFlow is a full-stack Smart Course Management System designed to provide an organized platform for managing and learning from online courses.

The system allows students to browse and enroll in courses, instructors to manage their courses, and administrators to manage users and system resources.

The project consists of:

- Angular frontend
- Node.js and Express.js backend
- MongoDB database
- JWT authentication
- Role-based authorization
- Course management
- User management
- Course enrollment
- Image file upload

---

## 🎯 Project Objectives

The main objectives of EduFlow are:

- Build a complete full-stack web application.
- Apply Angular concepts in a real-world project.
- Build RESTful APIs using Node.js and Express.js.
- Store and manage data using MongoDB and Mongoose.
- Implement authentication using JWT.
- Implement role-based authorization.
- Practice CRUD operations.
- Connect Angular frontend with a backend API.
- Implement secure course and user management.

---

# 👥 User Roles

The system contains three main roles:

### 👨‍🎓 Student

Students can:

- Register an account.
- Login to the system.
- View available courses.
- View course details.
- Enroll in courses.
- View their enrolled courses.
- Track their learning progress.
- View and manage their profile.

Students cannot:

- Add courses.
- Edit or delete courses.
- Manage users.

---

### 👨‍🏫 Instructor

Instructors can:

- Login to the system.
- View courses.
- Add courses.
- Edit their own courses.
- Delete their own courses.
- Upload course images.
- Manage their course content.

---

### 👨‍💼 Admin

Administrators can:

- Login to the system.
- View all courses.
- Add courses.
- Edit courses.
- Delete courses.
- View all users.
- Add users.
- Edit users.
- Delete users.
- Manage different user roles.

---

# ⭐ Main Features

## Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT authentication
- Protected routes
- Authentication interceptor
- Automatic token handling

---

## Authorization

The system uses role-based authorization.

Available roles:

- Student
- Instructor
- Admin

Different permissions are applied depending on the logged-in user's role.

---

## Course Management

The system supports complete Course CRUD operations:

- Create Course
- Read Courses
- Read Course by ID
- Update Course
- Delete Course

Course information includes:

- Title
- Description
- Instructor
- Category
- Level
- Price
- Duration
- Image

---

## User Management

Administrators can manage users through:

- View Users
- Add User
- Edit User
- Delete User

User roles can be:

- Student
- Instructor
- Admin

---

## Course Enrollment

Students can:

- Enroll in courses.
- View their enrolled courses.
- Continue learning from their enrolled courses.

---

# 📚 Course Categories

The system supports different course categories such as:

- Backend
- Frontend
- Database

Course levels include:

- Beginner
- Intermediate
- Advanced

---

# 🖼️ File Upload

Course images can be uploaded when creating courses.

### Upload Permissions

Only:

- Instructor
- Admin

can create courses and upload course images.

Students cannot upload course images.

### Upload Technology

The backend uses:

- Multer

to handle course image uploads.

### File Requirements

- Allowed file types: JPG, JPEG, PNG, JFIF
- Maximum file size: 5 MB
- Uploaded images are stored in the backend `uploads` folder.

---

# 🛠️ Technologies Used

## Frontend

- Angular
- TypeScript
- HTML
- CSS
- RxJS
- Angular Signals
- Angular Forms
- Angular Router
- HttpClient

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

## Development Tools

- Visual Studio Code
- Postman
- Git
- GitHub
- Figma

---

# 🅰️ Angular Features Used

The frontend applies several Angular concepts:

### Components

The application is divided into reusable standalone components.

### Data Binding

The project uses:

- Interpolation
- Property Binding
- Event Binding
- Two-way Binding

### Angular Control Flow

The project uses modern Angular control flow:

```text
@if
@for
```

### Signals

Angular Signals are used for reactive UI state such as dashboard statistics.

### Forms

The project uses:

- Template-driven Forms
- Reactive Forms
- Form validation
- Custom validation

### Services

Angular services are used to communicate with the backend API.

Examples:

- AuthService
- CourseService
- UserService
- EnrollmentService

### HttpClient

Angular HttpClient is used for communication with the REST API.

### Interceptors

The project uses:

- Authentication Interceptor
- Error Interceptor

### Routing

Angular Router is used for navigation between application pages.

The project includes:

- Route parameters
- RouterLink
- Router navigation
- Auth Guard
- Admin Guard

---

# 🔐 Authentication Flow

The authentication process works as follows:

1. User registers or logs in.
2. Backend validates the credentials.
3. Passwords are stored using bcrypt hashing.
4. Backend generates a JWT token after successful login.
5. Angular stores the token.
6. The Auth Interceptor attaches the token to protected requests.
7. Backend verifies the token.
8. User permissions are checked according to their role.

---

# 🔒 Security

The project applies several security practices:

- Password hashing using bcrypt.
- JWT authentication.
- Protected API routes.
- Role-based authorization.
- Admin-only user management.
- Course ownership authorization.
- Environment variables for sensitive configuration.
- `.env` excluded from GitHub using `.gitignore`.

---

# 🗂️ Project Structure

```text
EduFlow
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── screenshots
│   ├── uploads
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── ...
│
├── frontend
│   ├── public
│   ├── src
│   │   └── app
│   │       ├── dashboard
│   │       ├── courses
│   │       ├── course-details
│   │       ├── add-course
│   │       ├── edit-course
│   │       ├── my-courses
│   │       ├── users
│   │       ├── add-user
│   │       ├── edit-user
│   │       ├── login
│   │       ├── register
│   │       ├── settings
│   │       ├── learning
│   │       ├── services
│   │       ├── guards
│   │       └── interceptors
│   │
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# 🔗 API Endpoints

## Authentication

```text
POST /api/v1/users/register
POST /api/v1/users/login
```

## Courses

```text
GET    /api/v1/courses
GET    /api/v1/courses/:id
POST   /api/v1/courses
PATCH  /api/v1/courses/:id
DELETE /api/v1/courses/:id
```

## Users

```text
GET    /api/v1/users
GET    /api/v1/users/:id
POST   /api/v1/users
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id
```

## Enrollment

```text
POST /api/v1/enrollments
GET  /api/v1/enrollments/my-courses
```

---

# 🧪 Testing

The backend APIs were tested using Postman.

Tested operations include:

- Register
- Login
- Course CRUD
- User CRUD
- Course image upload
- Authentication
- Role authorization
- Course ownership authorization
- Enrollment

---

# 🎨 UI Design

The user interface was designed using Figma.

### Figma Design

[View EduFlow UI Design](https://www.figma.com/make/W4UcIERHkgnyd90xQY0rmM/Smart-Course-Management-UI?code-node-id=0-6&p=f&t=iXMn9dCJiG4DM0ul-0&fullscreen=1)

---

# 🚀 How to Run the Project

## Backend

Open the Backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

---

## Frontend

Open the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start Angular:

```bash
ng serve
```

The frontend runs on:

```text
http://localhost:4200
```

---

# 🎓 Learning Objectives

Through this project, the following concepts were practiced:

- Full-stack application development
- Angular development
- TypeScript
- REST APIs
- Node.js
- Express.js
- MongoDB
- Mongoose
- Authentication
- Authorization
- JWT
- CRUD operations
- File uploads
- Angular Services
- Angular Forms
- Angular Signals
- Angular Routing
- Route Guards
- HTTP Interceptors
- API integration
- Git and GitHub

---

# 👩‍💻 Project

**EduFlow – Smart Course Management System**

A full-stack educational platform developed using Angular, Node.js, Express.js, and MongoDB.
