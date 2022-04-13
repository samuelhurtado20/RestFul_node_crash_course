const BlogCtrl = require('../controllers/crmController');

const routes = (app) =>
{
    app.get('/', BlogCtrl.all);

    app.post('/', BlogCtrl.add)

    app.put('/:id', BlogCtrl.update)

    app.delete('/:id', BlogCtrl.remove)
};

module.exports = routes;