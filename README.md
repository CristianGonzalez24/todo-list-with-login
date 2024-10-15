# Task Manager App

A **To-Do App** designed to help users keep track of their tasks. It allows users to add, edit, and delete tasks and saves them until they are completed. The app also features user authentication, so each user can log in and access their personalized task list.

## Features

- **Add Tasks:** Users can create new tasks and store them until completion.
- **Edit Tasks:** Tasks can be modified or updated.
- **Delete Tasks:** Completed or unnecessary tasks can be removed.
- **User Authentication:** Secure login system for each user.
- **User Registration:** New users can create an account to manage their own tasks.
- **Personal Task Lists:** Each user's tasks are stored separately and accessed only when logged in.

## Tech Stack

- **MongoDB** - Database for storing tasks and user data.
- **Express.js** - Backend framework for handling API requests.
- **React.js** - Frontend framework for building the user interface.
- **Node.js** - JavaScript runtime for server-side logic.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Vite** - Fast build tool for development and production.

## Requirements

To run this project locally, you will need the following:

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or via a service like MongoDB Atlas)

## Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app

2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables:

   Create a .env file in the root directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. Run the project in development mode:
   ```bash
   npm run dev
The app should now be running at http://localhost:3000.

## Usage
- Register: Create a new account to start managing your tasks.
- Login: Log in with your credentials.
- Manage Tasks: Add, edit, and delete tasks as needed.

## Contributing
Feedback and suggestions are always welcome! If you have any ideas for improving the app, feel free to:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
