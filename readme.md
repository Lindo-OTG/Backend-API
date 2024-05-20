# E-commerce Backend API

This is a simple CRUD (Create, Read, Update, Delete) API for managing products in an e-commerce platform. It's built with Node.js, Express, and MS SQL Server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MS SQL Server
- Postman or alternative to test API.

### Installing

1. Clone the repository: `git clone https://github.com/Lindo-OTG/Backend-API.git`
2. Navigate to the project directory: `cd Backend-API`
3. Install the dependencies: `npm install`

### Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
PORT=3000
DB_USER=your_username
DB_PASSWORD=your_password
DB_SERVER=your_db_server
DB_NAME=your_db_name
DB_PORT=your_db_port
AUTH_SECRET=your_secret
WEATHER_API_KEY=YOUR_API_KEY
```

### Running the Application
Start the application: `npm start`

The application will be running at http://localhost:3000.

### Docker
You can also run the application in a **Docker container**:

* Build the Docker image: `docker build -t backend-api .`
* Run the application in a Docker container: `docker run -p 3000:3000 -d backend-api`

### Running the Tests
Run the tests: npm test

A `test-results.xml` file will be created with the test results.

### API Documentation
API documentation is available at http://localhost:3000/api-docs (when the application is running).

### Built With
* Node.js - JavaScript runtime
* Express - Web application framework
* MS SQL Server - Database
* Docker - Containerization platform

### License
This project is licensed under the MIT License.

