const mongoose = require('mongoose')

const Schema = mongoose.Schema


const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
},{ timestamps: true})

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;