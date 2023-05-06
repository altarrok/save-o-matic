import React from 'react';
import TransactionForm from './TransactionForm';
import { useCreateExpenseMutation } from '../database/expense/ExpenseStore';


const ExpenseForm: React.FC = () => {
  const { mutate } = useCreateExpenseMutation();

  return (
    <TransactionForm onSubmit={(values) => mutate(values)} />
  );
};

export default ExpenseForm;
