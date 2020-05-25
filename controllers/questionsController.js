const mongoose = require('mongoose');
const Question = require('../models/question');
const Option = require('../models/optionSchema');

// vote link
const url = 'http://localhost:8000/options/';

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
    try {
        

        // Checkign if exists otherwise just return
        let question = Question.findById(req.params.id);
        if(question){
            let option = Option.create({
                text: req.body.text,
                votes: req.body.votes,
                question: req.params.id
            });
            
        }

    } catch (err) {
        
    }
}

// To view a question
module.exports.view = function(req, res){
    
    let question = Question.findById(req.params.id)
    .populate('options')
    return res.json({question:question})
}

// delete questions
module.exports.deleteQuestion = function(req, res){
    try {
        let question = Question.findById(req.params.id);
        question.remove();
        
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