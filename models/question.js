const mongoose = require('mongoose');

// Creat questions Schema
const questionSchema = new mongoose.Schema({
    title:{
        title: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

// exports Question model
module.exports = Question;