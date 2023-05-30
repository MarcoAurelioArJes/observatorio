const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

require('./routes/rotas')(app);

app.listen(3000, () => console.log("SERVIDOR RODANDO NA PORTA 3000"));