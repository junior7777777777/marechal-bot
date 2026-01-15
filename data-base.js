const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./sorteio.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS sorteio (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      data_hora TEXT,
      vencedores INTEGER,
      ativo INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS codigos (
      codigo TEXT,
      sorteio_id INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS participantes (
      user_id TEXT,
      sorteio_id INTEGER
    )
  `);
});

module.exports = db;