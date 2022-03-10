# User Management System

<p float="left">
  <img src="https://i.ibb.co/WHv1kvx/Screenshot-1.png">
</p>

### Project Description

User Management System is a full MERN stack web application. The main goal is to display the list of all users from the database. It allows us to filter and order users, add new users, and edit and delete existing ones. We can filter users by using form on the User List page and we can order users (descending or ascending) by clickng on the fields names in the head of the table. Every user must have: first name, last name, username, email, status and password. Fields created and updated are added by Mongoose. Password field is hashed before storing in database and it is not displayed on UI. Users may have permissions (array of subdocuments) and we can assign them or remove from each user. A permission consists of code and description fields.

Status: Online, Away or Busy

Permissions:

- Code: 1 - Description: Read
- Code: 2 - Description: Write
- Code: 3 - Description: Edit
- Code: 4 - Description: Delete

### Project Features

- List, filter and order users
- Create, edit, or delete user
- Assign or remove permissions from user
- Pagination

### Built With

#### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- Crypto

#### Frontend:

- ReactJS
- Redux Toolkit
- Final Form
- Fonk Final Form
- React Router Dom
- Dayjs
- Axios
- TailwindCSS

### To get a local copy up and running follow these simple steps:

1. Clone the repo `https://github.com/Adelam5/user-management-system.git`
2. Install NPM packages `npm install` for backend (from server folder) and frontend (from client folder)
3. Rename .env.exemple to .env (in server folder) and fill in the necessary data
4. Start server `npm start` (from server folder), start client `npm start` (from client folder)
5. Open `http://localhost:3000` to view application in the browser.
