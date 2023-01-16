const express = require('express');
const router = express.Router();
const {getCustomers,createCustomer,updateCustomer,deleteCustomer} = require('../Controllers/controller');

router.get('/', getCustomers);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router
