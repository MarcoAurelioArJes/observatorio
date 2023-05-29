const db = require('../database/connect');

module.exports = {
    criar: (modeloObservatorio) => {
        const query = `INSERT INTO Observatorio (NOME, IMAGEM, DESCRICAO) 
                       VALUES ($nome, $imagem, $descricao)`;
        db.run(query, {
            $nome: modeloObservatorio.nome, 
            $imagem: modeloObservatorio.imagem, 
            $descricao: modeloObservatorio.descricao
        }, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Registro inserido com sucesso! ID:', this.lastID);
          }
        });
        
    },

    listarPorId: (id) => {
        const query = `SELECT * FROM Observatorio WHERE id = ?`;
        db.get(query, [id], (err) => {
          if (err) {
            console.error(err);
          }
        });

    },

    pegarOUltimo: () => {
      const query = `SELECT MAX(ID) FROM Observatorio`;
      return db.get(query, async (err, row) => {
        if (err) {
          console.error(err);
        }
        return await row;
      });
  },
}