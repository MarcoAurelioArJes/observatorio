const db = require('../database/connect');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Observatorio(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME VARCHAR(200),
        IMAGEM VARCHAR(200),
        DESCRICAO VARCHAR(5000)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Utilizacoes (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME VARCHAR(200),
        DESCRICAO VARCHAR(5000),
        ID_OBSERVATORIO INT,
        FOREIGN KEY (ID_OBSERVATORIO)
        REFERENCES Observatorio (ID)
    )`);    
});