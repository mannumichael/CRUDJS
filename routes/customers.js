const express = require('express');
const router = express.Router();
const {getCustomerById ,getCustomers,createCustomer,updateCustomer,deleteCustomer} = require('../Controllers/controllers');

router.get('/:id',getCustomerById ) ;
router.get('/', getCustomers);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router
