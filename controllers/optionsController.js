const mongoose = require('mongoose');
const Question = require('../models/question');
const Option = require('../models/optionSchema');

module.exports.addOption = async function(req, res){
    try {
        let question = await Question.findById(req.params.id);
        // console.log(quesion);
        if(question){
            let option = await Option.create({
                text: req.body.text,
                votes: req.body.votes,
                question: req.params.id
            });
            option.link_to_vote="http://localhost:8000/options/"+option.id+"/add_vote";
            option.save();
            question.options.push(option);
            question.save();
            return res.json({
                option,
                data: {"message":"Created options successfully"}
            });
        }
        return res.json({question});
    } catch (err) {
        console.log(err);
        return;
    }
}

module.exports.delete = async function(req, res){
    try {
        let option = await Option.findById(req.params.id);

        let questionId = option.question;
        option.remove();

        let question = await Question.findById(questionId);

        question.options.remove(req.params.id);
        question.save();
        return res.json({
            message:"Option Delete Successfully!"
        });
    } catch (err) {
        console.log(err);
        return;
    }
};

module.exports.voteAdd = function(req, res){
    Option.findByIdAndUpdate(req.params.id, {$inc:{votes:1}},{new: true}, function(err, newOption){
        if(err){
            console.error("Error",err);
            return res.redirect("/");
          }
          
          if(newOption){
              return res.json({data:{
                  option: newOption,
                  message: "Vote Added Succesfully!"
              }});
          }
          else{
              return res.json({data:{
                  message: "Not Possible!"
              }});
          }
      });
  }