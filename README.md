# README
This is a CRUD (Create, Read, Update, Delete) project built using Node.js, Express.js, MongoDB and PostgreSQL. The project allows you to perform basic CRUD operations on a customer collection in a MongoDB and PostgreSQL database.

# Requirements
- Node.js
- npm (Node Package Manager)


# Technologies
- Express.js is a web application framework for Node.js, providing a robust set of features for web and mobile applications. It is used in this project to handle routing and middleware.
- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. It is used to run the server and handle requests.
- MongoDB is a cross-platform document-oriented database program. It is used to store the customer data in this project.
- PostgreSQL is a powerful, open source object-relational database system. It is used to store the customer data in this project.

# Dependencies
The project uses the following dependencies:

- "body-parser": "^1.20.1",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "mongodb": "^4.13.0",
- "mongoose": "^6.8.3",
- "nodemon": "^2.0.20",
- "pg": "^8.8.0",
- "pg-hstore": "^2.3.4",
- "sequelize": "^6.28.0",
- "uuid": "^9.0.0"
You can install these dependencies by running npm install in the project directory.

# Installation
- Clone the repository
- Run npm install to install the necessary dependencies
- Start the MongoDB and PostgreSQL server
- Run npm start to start the server


# Usage
Once the server is running, you can perform CRUD operations on the customer collection by making requests to the following endpoints:

- GET /customers?db_type=<mongo/postgres> - Retrieves all customers in the collection
- GET /customers?db_type=<mongo/postgres>&name=<name>&city=<city>&postalcode=<postalcode> - Retrieves customers based on the query parameters
- POST /customers?db_type=<mongo/postgres> - Creates a new customer in the collection
- PATCH /customers/:id - Updates an existing customer in the collection
- DELETE /customers/:id - Deletes an existing customer from the collection
You can test the endpoints using a tool like Postman.

The default Port number is 9000, you can change it in app.js file.