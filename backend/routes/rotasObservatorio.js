const observatorioController = require("../controller/observatorioController");

module.exports = (app) => {
    app.post('/criar', observatorioController.criar);
    app.get('/listarPorId/:id', observatorioController.listarPorId);
}