const express = require('express');
const router = express.Router();
const db = require('../Controllers/controllersPostgre');

router.get('/customers', db.getUsers);
router.get('/customers/:id', db.getUserById);
router.post('/customers', db.createUser);
router.put('/customers/:id', db.updateUser);
router.delete('/customers/:id', db.deleteUser);

module.exports = router;