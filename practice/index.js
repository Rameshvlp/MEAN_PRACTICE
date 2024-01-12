// const {MongoClient} =require("mongodb");
// const client= new MongoClient("mongodb://localhost:27017");
// client.connect();

 
// const database = client.db("mydbs2");
// const collection = database.collection("phones");
// collection.insertOne({model:"samsung", price:"12000", Ram:"4GB"});
// collection.deleteOne({model:"samsung"});
// const collection1=database.collection("laptops");
// collection1.insertOne({model:"Asus", price:"210000"});
// collection.insertMany([{ model:"acer", price: "21000" }, {model:"Lenovo", price:"31000"}])
// const collections=database.collection("bikes");
// collections.insertOne({model:"RoyalEnfield", price:"120000"})
const express=require('express');
const app=express();
const path= require('path');
const bodyParser =  require('body-parser');
const {MongoClient}= require('mongodb');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.send("Hello Ramesh");
})
app.get('/flower',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
    console.log("success")
})

// Create
app.post('/create',(req,res)=>{
const client = new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
const database= client.db("flower_database");
const name= database.collection("flower_name"); 
name.insertOne(req.body)
console.log(req.body)
res.send("submited")
})


//Update
app.post('/update', (req,res)=>{
    const client = new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
const database= client.db("flower_database");
const name= database.collection("flower_name");
const update=req.body.fname;
console.log(update);
const neww = req.body.newname; 
console.log(neww);
name.updateOne({fname:update}, {$set:{fname:neww}})   

res.send("Updated")   

})

//Delete

app.post('/delete', (req, res)=>{
    const client = new MongoClient("mongodb://127.0.0.1:27017")
    client.connect();
    const database= client.db("flower_database");
    const name= database.collection("flower_name");
    const del=req.body.fname;
    console.log(req.body);
    name.deleteOne({fname:del});
    console.log("deleted", req.body);
    res.send("deleted");
})


//Retrive

app.post('/retrive', (req,res)=>{
    const client = new MongoClient("mongodb://127.0.0.1:27017")
    client.connect();
    const database= client.db("flower_database");
    const name= database.collection("flower_name");
  
 const rett =  async ()=>{ 
    const ret= await name.find().toArray();
    console.log(ret);
    res.json(ret);

}
rett()
    
   
    
})





app.listen(8080, ()=> console.log("Connected"));

    