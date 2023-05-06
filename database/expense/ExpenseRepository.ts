import { db } from "../SQLite";

export type Expense = {
    id: number;
    source: string;
    amount: number;
    date: Date;
}

export const createExpense = (expense: Omit<Expense, 'id'>) =>
    new Promise<number | undefined>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO expenses (source, amount, date) VALUES (?, ?, ?)',
                [expense.source, expense.amount, expense.date.getTime()],
                (_, result) => resolve(result.insertId),
                (_, error) => {
                    reject(error);
                    return false;
                }
            );
        });
    });

export const getAllExpenses = async (): Promise<Expense[]> => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM expenses',
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, error) => {
                    console.error('Error fetching all expenses:', error);
                    reject(error);
                    return false;
                }
            );
        });
    });
};