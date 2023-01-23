const Customer1 = require('../model/customerMongodb.js');
const Customer2 = require('../model/customerPostgres.js');
const { v4: uuidv4 } = require('uuid');

const getCustomerById = async (req, res) => {
    try {
        const ID = req.params.id;
        let db_type = req.query.db_type || "mongo";
        let customer;
        // MongoDB
        if (db_type === 'mongo') {
            customer = await Customer1.findById(ID);
            if (!customer) {
                return res.send({ message: "Customer not found" });
            }
            res.json(customer);
        }
        // PostgreSQL
        else if (db_type === 'postgres') {
            customer = await Customer2.findOne({ where: { id: ID } });
            if (!customer) {
                return res.send({ message: "Customer not found" });
            }
            res.json(customer);
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error getting customer',
            error: error.message
        });
    }
};


const getCustomers = async (req, res) => {
    const query = req.query;
    const conditions = {};
    if(query.name) conditions.name = query.name;
    if(query.city) conditions.city = query.city;
    if(query.postalcode) conditions.postalcode = query.postalcode;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    let customers;
    let total;
    let totalPages;
    let db_type = query.db_type || "mongo";

    // MongoDB
    if (db_type === 'mongo') {
        customers = await Customer1.find(conditions).skip(skip).limit(limit);
        try{
            total = await Customer1.countDocuments(conditions);
            totalPages = Math.ceil(total / limit);
            res.json({customers, totalPages});
        }catch(err){
            res.send(err)
        }
    } 
    // PostgreSQL
    else if(db_type === 'postgres') {
        customers = await Customer2.findAll({where: conditions, offset: skip, limit: limit});
        try{
            total = await Customer2.count({where: conditions});
            totalPages = Math.ceil(total / limit);
            res.json({customers, totalPages});
        }catch(err){
            res.send(err)
        }
    }
};

const createCustomer = async (req, res) => {
    try {
        const customerId = uuidv4();
        // Saving to MongoDB
        const customer1 = new Customer1({
            _id: customerId,
            name: req.body.name,
            city: req.body.city,
            postalcode: req.body.postalcode
        });
        await customer1.save();
        
        // Saving to PostgreSQL
        await Customer2.create({
            id: customerId,
            name: req.body.name,
            city: req.body.city,
            postalcode: req.body.postalcode
        });

        res.json({ message: `Customer created successfully in both databases with id: ${customerId}`});
    } catch (err) {
        res.send(err);
    }
};




const updateCustomer = async (req, res) => {
    try {
        // Find customer in MongoDB
        const ID = req.params.id ;
        const mongoData = await Customer1.findById(ID);

        // Find customer in PostgreSQL
        const postgresData = await Customer2.findOne({ where: { id: ID } });

        if (!mongoData || !postgresData) {
            return res.send({ message: "Customer not found" });
        }

        // Update customer in MongoDB
        if (req.body.name) {
            mongoData.name = req.body.name;
        }
        if (req.body.city) {
            mongoData.city = req.body.city;
        }
        if (req.body.postalcode) {
            mongoData.postalcode = req.body.postalcode;
        }
        await mongoData.save();

        // Update customer in PostgreSQL
        await Customer2.update({ name: mongoData.name, city: mongoData.city, postalcode: mongoData.postalcode }, { where: { id: ID } });

        res.json({ message: "Customer updated successfully", updatedCustomer: { ...mongoData, id: ID } });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating customer',
            error: error.message
        });
    }
};




const deleteCustomer = async (req, res) => {
    try {
        const ID = req.params.id;

        // Find customer in MongoDB
        const mongoData = await Customer1.findById(ID);

        // Find customer in PostgreSQL
        const postgresData = await Customer2.findOne({ where: { id: ID } });

        if (!mongoData || !postgresData) {
            return res.send({ message: "Customer not found" });
        }

        // Delete customer from MongoDB
        await Customer1.deleteOne({ _id: ID });

        // Delete customer from PostgreSQL
        await Customer2.destroy({ where: { id: ID } });

        res.json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting customer',
            error: error.message
        });
    }
};




// postgres things

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomerById 
};
