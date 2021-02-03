const productrepository = require('../repository/productrepository')
const repository = new ProductRepository();
const ProductApi=(app)=>{
    app.get('/products',(req,res)=>{
        repository.findAllProducts().then(products=>res.json(products));

    })
    app.post('/products',(req,res)=>
    {
        const {productId,productName,price,description}= req.body
        repository.saveProduct({productId,productName,price,description})
        .then(product=>res.json(product))
    })
    app.put('/products/productId',(req,res)=>
    {
        const {productId,productName,price,description}= req.body
        repository.saveProduct({productId,productName,price,description})
        .then(product=>res.json(product))
    })
}
module.exports = ProductApi;