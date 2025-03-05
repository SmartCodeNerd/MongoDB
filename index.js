//Requiring Mongoose.
const mongoose = require("mongoose");

//Establishing Connection With MongoDB.
mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then(() => {
    console.log("Success");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//Creating a Schema.
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
//Creating a Collection(Model).
const User = mongoose.model("User" , userSchema); 

//Creating Instances of the Class(Model)-User.
// const user1 = new User ({
//     name:"Goldie",
//     email:"goldie23@gmail.com",
//     age:21
// });

// const user2 = new User ({
//     name:"Muskan",
//     email:"muskan19@gmail.com",
//     age:21
// });

// user2.save()
// .then((res) => {console.log(res)})
// .catch((err) => {console.log(err)});


//Inserting Multiple Users
// User.insertMany([
//     {name:"Adam",email:"adam@gmail.com",age:45},
//     {name:"Bob",email:"bob@gmail.com",age:50},
//     {name:"Casey",email:"casey@gmail.com",age:55}
// ]).then((res) => {
//     console.log(res);
// });


// User.find()
// .then((res) => {
//     console.log(res);
// })


User.find( {age : { $gte : 47} })
.then((res) => {
    console.log(res[0].name);
})