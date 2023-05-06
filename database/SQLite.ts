import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('save-o-matic.db');

const createTables = (tx: SQLite.SQLTransaction) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS incomes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source TEXT NOT NULL,
      amount REAL NOT NULL,
      date TEXT NOT NULL
    );`
  );

  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source TEXT NOT NULL,
      amount REAL NOT NULL,
      date TEXT NOT NULL
    );`
  );
};

export const initializeDatabase = () => {
  db.transaction(createTables);
};
