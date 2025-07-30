import * as SQLite from 'expo-sqlite';

const db = SQLite.Database('bd_pi'); // ✅ certo


export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT UNIQUE,
        senha TEXT
      );`
    );

    // Criação de dados fictícios
    tx.executeSql(
      `INSERT OR IGNORE INTO usuarios (nome, email, senha)
       VALUES ('Filipe Diniz', 'filipe@email.com', '1234');`
    );
  });
};

export default db;
