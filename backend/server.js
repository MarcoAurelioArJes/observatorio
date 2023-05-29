const express = require('express');
const app = express();
require('./repositorio/database/connect');
require('./repositorio/tabelas/criarTabelas');

require('./routes/rotasObservatorio')(app);

const PORT = 3000;
app.listen(PORT, () => console.log('server rodando na porta ' + PORT));