const db = require('../database/connect');
const consultaObservatorio = require("./consultasObservatorio");

module.exports = {
    criar: (modeloUtlizacoes, idObservatorio) => {
        const query = `INSERT INTO Utilizacoes (NOME, DESCRICAO, ID_OBSERVATORIO) 
                       VALUES ($nome, $imagem, $descricao, $id_observatorio)`;

        const observatorioId = consultaObservatorio.listarPorId(idObservatorio).ID;

        db.run(query, {
            $nome: modeloUtlizacoes.NOME, 
            $descricao: modeloUtlizacoes.DESCRICAO,
            $id_observatorio: observatorioId
        }, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Registro inserido com sucesso! ID:', this.lastID);
          }
        });

        db.close();
    },

    listarPorId: (id, idObservatorio) => {
        const query = `SELECT * FROM Observatorio WHERE ID = ? AND ID_OBSERVATORIO = ?`;
        db.get(query, [id, idObservatorio], (err) => {
          if (err) {
            console.error(err);
          }
        });

        db.close();
    }
}