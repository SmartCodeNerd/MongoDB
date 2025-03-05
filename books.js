//Requiring Mongoose.
const mongoose = require("mongoose");

//Establishing Connection With MongoDB.
main()
.then(() => {
    console.log("Success");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[1,"Price too low"]
    }
});

const Book = mongoose.model("Book",bookSchema);

const book1 = new Book ({
    title:"Mathematics-XII",
    author:"RD Sharma",
    price:-10
});

book1.save()
.then( (res) => {
    console.log(res)
})
.catch( (err) => {
    console.log(err.errors.price.properties.message)
}); 