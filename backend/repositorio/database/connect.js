const sqlite3 = require('sqlite3').verbose();

let dataBase = new sqlite3.Database('observatorio.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('CONECTADO AO SQLITE3');
});

module.exports = dataBase;