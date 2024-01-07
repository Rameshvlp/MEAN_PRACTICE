const {MongoClient} =require("mongodb");
const client= new MongoClient("mongodb://localhost:27017");
client.connect();


const database = client.db("mydbs2");
const collection = database.collection("phones");
collection.insertOne({model:"samsung", price:"12000", Ram:"4GB"});
collection.deleteOne({model:"samsung"});
const collection1=database.collection("laptops");
collection1.insertOne({model:"Asus", price:"210000"});
collection.insertMany([{ model:"acer", price: "21000" }, {model:"Lenovo", price:"31000"}])
const collections=database.collection("bikes");
collections.insertOne({model:"RoyalEnfield", price:"120000"})

