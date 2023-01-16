const Customer = require('../Model/customer.js');

const getCustomers = async (req, res) => {
    const query = req.query;
    const conditions = {};
    if(query.name) conditions.name = query.name;
    if(query.city) conditions.city = query.city;
    if(query.postalcode) conditions.postalcode = query.postalcode;
    const customers = await Customer.find(conditions);
    try{
        res.json(customers);
    }catch(err){
        res.send(err);
    }
};

const createCustomer = async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        city: req.body.city,
        postalcode: req.body.postalcode
    });
    try{
        const data =  await customer.save();
        res.json(data);
    }catch(err){
        res.send(err);
    }
};

const updateCustomer = async (req, res) => {
    try {
        const data = await Customer.findById(req.params.id);

        if (!data) {
            return res.send({ message: "Customer not found" });
        }

        if (req.body.name) {
            data.name = req.body.name;
        }

        if (req.body.city) {
            data.city = req.body.city;
        }

        if (req.body.postalcode) {
            data.postalcode = req.body.postalcode;
        }
        await data.save();
        res.json(data);
    } catch (err) {
        res.send({ message: "Error updating customer" });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const data = await Customer.findByIdAndRemove(req.params.id);

        if (!data) {
            return res.send({ message: "Customer not found" });
        }

        res.json({ message: "Customer deleted successfully" });
    } catch (err) {
        res.send({ message: "Error deleting customer" });
    }
};

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
