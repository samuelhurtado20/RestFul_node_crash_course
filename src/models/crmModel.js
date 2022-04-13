var mongoose = require('mongoose')
const schema = mongoose.Schema;

var blogSchema = new schema({
    title: String,
    author: String,
    body: String,
});

module.exports = blogSchema;