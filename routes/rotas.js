const tecnologias = require('../tecnologias/listaTecnologias');

const rotas = (app) => {
    app.get("/", (req, res) => {
        res.render('index', {
            informacoes: tecnologias
        });
    });

    app.get("/detalhes/:id", (req, res) => {
        let index = tecnologias.findIndex(t => t.id == req.params.id)

        res.render('../views/components/detalhes', {
            informacao: tecnologias[index]
        });
    });
}

module.exports = rotas;