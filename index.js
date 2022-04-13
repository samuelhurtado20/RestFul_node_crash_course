var express = require('express');
var mongoose = require('mongoose')
var routes = require('./src/routes/crmRoutes');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;
var ConnString = "mongodb://uxghgh4iwlhri0ewumpj:EecihdRwN2UrgiDdlABR@biavrh7viutgdfb-mongodb.services.clever-cloud.com:27017/biavrh7viutgdfb"
mongoose.connect(ConnString, {
    useNewUrlParser: true
});

routes(app);

app.listen(PORT, ()=>
{
    console.log(`Server running on PORT: ${PORT}`);
});