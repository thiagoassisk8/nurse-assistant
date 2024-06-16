````markdown
# Nurse Marketplace Backend

Welcome to the backend repository for the nurse marketplace application. This backend is built with Nest.js and uses PostgreSQL for data storage, with deployment on Vercel.

## Technologies Used

This backend application utilizes the following technologies:

- **Nest.js**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source relational database system known for its robustness and reliability.
- **Vercel**: A cloud platform for static sites and serverless functions, used for deployment and hosting of server-side applications.

These technologies were chosen to provide a modern and efficient foundation for building and managing a nurse marketplace application with a focus on user registration, login, and session management using JWT authentication.

## Prerequisites

Before running this backend application locally, ensure you have the following installed:

- Node.js
- npm
- PostgreSQL
- Vercel CLI

## Installation

Clone this repository and install the dependencies:

```bash
git clone <https://github.com/thiagoassisk8/nurse-assistant>
npm install
```
````

## Configuration

### Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

## Running the Application

To start the backend server, run:

```bash
"start": "nest start",
```

The server will start running on the port specified in your `.env` file (default is 3000).

## API Endpoints

### Registration

- **POST /users/register**
  - Body Parameters: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
  - Registers a new user with the provided name, email, and password.

### Login

- **POST /auth/login**
  - Body Parameters: `{ "email": "john@example.com", "password": "password123" }`
  - Logs in a user with the provided email and password, returns a JWT token for authentication.

## Example Usage

Assuming the frontend is running at [https://github.com/thiagoassisk8/nurse-assistant-front](https://github.com/thiagoassisk8/nurse-assistant-front):

1. Register a new user using the frontend interface with a POST request to `http://localhost:3000/users/register`.
2. Login with the registered user credentials to obtain a JWT token using a POST request to `http://localhost:3000/auth/login`.
3. Use the JWT token to authenticate and access protected routes on the frontend.

## Deployment

The backend is configured to be deployed on Vercel. Ensure you have set up your Vercel project and configured the necessary environment variables in your Vercel dashboard for production deployment.

## More Information

For more details and advanced usage of this backend API, refer to the [frontend repository](https://github.com/thiagoassisk8/nurse-assistant-front).

---

This backend was developed as part of a nurse marketplace application, focusing on user registration, login, and JWT-based session management.

```

```
