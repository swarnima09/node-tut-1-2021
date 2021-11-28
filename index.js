const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name : String,
    brand : String,
    price : Number
});

const saveInDB =  async () => {
     const ProductModel = mongoose.model('product',ProductSchema)
    let data = new ProductModel({name:"Apple",host:"Apple",brand: "vivo",price:23000});
    let result =  await data.save();
    console.log(result);
}

const updateInDB =  async () => {
    const ProductModel = mongoose.model('product',ProductSchema)
    let data = await ProductModel.updateMany({name:"sakshii"},{$set:{price: 4000}})
    console.log(result);
}

const deleteInDB =  async () => {
    const ProductModel = mongoose.model('product',ProductSchema)
    let data = await ProductModel.deleteMany({name:"sakshii"});
}

deleteInDB()


