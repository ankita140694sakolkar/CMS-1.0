const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    mobile:{
        
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        default: "student",
        enum: ["student", "trainer", "superadmin"]
    },
    address: {
        type: String,
    },
    image:{
        type: Object,
        default:{
            url:"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        }
    }
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User",UserSchema)