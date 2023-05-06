import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('save-o-matic.db');

export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS incomes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT NOT NULL,
        amount REAL NOT NULL,
        date TEXT NOT NULL
      )`,
      [],
      (_, result) => console.log('Database initialized successfully.'),
      (_, error) => {
        console.log('Error initializing database:', error);
        return true;
      }
    );
  });
};