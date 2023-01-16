# CRUD Project using Node.js, Express.js and MongoDB
This is a CRUD (Create, Read, Update, Delete) project built using Node.js, Express.js and MongoDB. The project allows you to perform basic CRUD operations on a customer collection in a MongoDB database.

# Requirements
- Node.js
- Express.js
- MongoDB
- npm (Node Package Manager)

# Usage
Once the server is running, you can perform CRUD operations on the customer collection by making requests to the following endpoints:
- GET '/customers' - Retrieves all customers in the collection
- GET '/customers?name=<name>&city=<city>&postalcode=<postalcode>' - Retrieves customers based on the query parameters
- POST '/customers' - Creates a new customer in the collection
- PATCH '/customers/:id' - Updates an existing customer in the collection
- DELETE '/customers/:id' - Deletes an existing customer from the collection

You can test the endpoints using a tool like Postman.