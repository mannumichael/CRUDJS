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

- "body-parser": "^1.20.1" - A middleware that parses incoming request bodies in a middleware before the handlers, available under the req.body property.
- "dotenv": "^16.0.3" - A zero-dependency module that loads environment variables from a .env file.
- "express": "^4.18.2" - A fast, minimalistic web framework for Node.js
- "mongodb": "^4.13.0" - The official MongoDB driver for Node.js
- "mongoose": "^6.8.3" - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- "nodemon": "^2.0.20" - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- "pg": "^8.8.0" - PostgreSQL client for Node.js
- "pg-hstore": "^2.3.4" - A node-postgres type conversion library specific to hstore data type
- "sequelize": "^6.28.0" - a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- "uuid": "^9.0.0" - Generate and parse UUIDs.
- You can install these dependencies by running npm install or npm i in the project directory.

# Installation
- Clone the repository
- Run npm install to install the necessary dependencies
- Start the MongoDB and PostgreSQL server
- Run npm start to start the server


# Usage
Once the server is running, you can perform CRUD operations on the customer collection by making requests to the following endpoints:

- GET /customers?db_type=<mongo/postgres> - Retrieves all customers in the collection
- GET /customers?db_type=<mongo/postgres>&name=<name>&city=<city>&postalcode=<postalcode> - Retrieves customers based on the query parameters
- POST /customers - Creates a new customer in the collection
- PATCH /customers/:id - Updates an existing customer in the collection
- DELETE /customers/:id - Deletes an existing customer from the collection
You can test the endpoints using a tool like Postman.

The default Port number is 9000, you can change it in app.js file.