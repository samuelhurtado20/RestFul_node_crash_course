
var mongoose = require('mongoose')
const BlogSchema = require('../models/crmModel');
const blogModel  = mongoose.model('model', BlogSchema);

var BlogCtrl = {}
BlogCtrl.add = (req, res) => {
    let blog = new blogModel(req.body);
    blog.save((error, result) =>{
        if(error)
        {
            res.status(500).send(error);
        }

        res.status(201).send(result);
    });
}

BlogCtrl.single = (req, res) => 
{
    blogModel.findById((req.params.id), (error, result) =>{
        if(error)
        {
            res.status(500).send(error);
        }

        res.status(200).send(result);
    });
}

BlogCtrl.all = (req, res) => 
{
    blogModel.find({}, (error, result) =>{
        if(error)
        {
            res.status(500).send(error);
        }

        res.status(200).send(result);
    });
}

BlogCtrl.update = (req, res) => 
{
    blogModel.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (error, result) =>{
        if(error)
        {
            res.status(500).send(error);
        }

        res.status(200).send(result);
    });
}

BlogCtrl.remove = (req, res) => 
{
    blogModel.remove({_id: req.params.id}, (error, result) =>{
        if(error)
        {
            res.status(500).send(error);
        }

        res.status(200).send({message: 'Blog Deleted Successfully.', data: result});
    });
}

module.exports = BlogCtrl