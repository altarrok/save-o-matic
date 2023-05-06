import { db } from "../SQLite";

export type Income = {
  id: number;
  source: string;
  amount: number;
  date: Date;
}

export const createIncome = async (input: { source: string, amount: number, date: Date }) => {
  return new Promise<number | undefined>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO incomes (source, amount, date) VALUES (?, ?, ?);',
        [input.source, input.amount, input.date.getTime()],
        (_, { insertId }) => resolve(insertId),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const getAllIncomes = () => {
  return new Promise<Income[]>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM incomes;',
        [],
        (_, { rows: { _array } }) => {
            resolve(_array);
        },
        (_, error) => {
          reject(error);
          return true;
        }
      );
    });
  });
};
