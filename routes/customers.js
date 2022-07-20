const express = require('express');
const router = express.Router();
const {getCustomers, createCustomer} = require('../controllers/CustomerController');

router.get("/", getCustomers);
// router.get("/:productID", returnSingleProduct);
router.post('/', createCustomer)

  module.exports = router;