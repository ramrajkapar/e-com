
const CustomerModel = require('../models/Customer');

const getCustomers = async (req, res) => {
    try {
        // let product = new ProductModel(req.body);
        // await product.save();
        let customers = await CustomerModel.find({});
        res.json({data: customers});
    } catch (error) {
        console.log(error);
    }
}

const createCustomer = async (req, res) => {
    // products.push(req.body);
    // console.log(products);
    // fs.writeFileSync('./data.json', JSON.stringify(products), () => {
    //   console.log("Data written")
    // })
    // res.send("Data received")
    try {
        // let product = new ProductModel(req.body);
        // await product.save();
        let customer = await CustomerModel.create(req.body);
        res.json(customer);

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getCustomers, createCustomer }

