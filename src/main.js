//const dbConnection = require('./connections/dbConnection');
//console.log(dbConnection().then(con=>console.log(con)))

const ProductRepository = require('./repository/productRepository')
const productRepository = new ProductRepository();

const main = async() =>{
 /*  let savedProduct = await productRepository.saveProduct({
   productId:3,
   productName:'Ipad2',
   price:84962.5,
   description:'Ipadpromax'
  })

   console.log('saved product --->',savedProduct); */
   /* let updateProduct = await productRepository.updateProduct({
    productId:3,
    productName:'Ipad2',
    price:34500,
    description:'Ipadpromax'
   })
 
    console.log('updated product --->',updateProduct); */

   // let deleteProduct = await productRepository.deleteProduct(3)
     
     //   console.log('deleted product --->',deleteProduct);
   /*  const products= await productRepository.findAllProducts();
    console.log('products List',products) */

    const products= await productRepository.findAllProductsByName('Iphone');
    console.log('products List',products)
    
}
main();