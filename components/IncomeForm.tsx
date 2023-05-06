import React from 'react';
import { useCreateIncomeMutation } from '../database/income/IncomeStore';
import TransactionForm from './TransactionForm';


const IncomeForm: React.FC = () => {
  const { mutate } = useCreateIncomeMutation();

  return (
    <TransactionForm onSubmit={(values) => mutate(values)} />
  );
};

export default IncomeForm;
