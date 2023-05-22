const ejs = require('ejs');

const rotas = (app) => {
    app.get("/", (req, res) => {
        res.render('index');
    });
}

module.exports = rotas;