const mongoose = require('mongoose');
const Question = require('../models/question');
const Option = require('../models/optionSchema');


//questions
module.exports.questionCreate = function(req, res){
    try {
        // getting the questions from request body
        let questions = req.body.questions;
        console.log(questions);

        // create a question in db
        for(let i = 0; i < questions.length; i++){
            Question.create({
                title: questions[i].title
            });
        }

        return res.status(200).json({
            messgae: "Question's is created successfully"
        });
    } catch (err) {
        return res.status(500).json({
            messgae: err.messgae || "Some error while creating question"
        });
    }
}

// add options to specific questions
module.exports.addOptions = function(req, res){

}

// To view a question
module.exports.view = function(req, res){

}

// delete questions
module.exports.deleteQuestion = function(req, res){

}