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


// To view a question
module.exports.view = async function(req, res){
    
    let question = await Question.findById(req.params.id)
    .populate('options')
    return res.json({question:question});
}

// delete questions
module.exports.deleteQuestion = async function(req, res){
    try {
        let question = await Question.findById(req.params.id);
        question.remove();
        await Option.deleteMany({question:req.params.id});
        return res.json({
            messgae: "Question and Options deleted!!!"
        });
    } catch (err) {
        console.log(err);
        return res.json({
            messgae: "Error in deleting"
        });        
    }
}