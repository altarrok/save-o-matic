import React from "react";
import { Text } from "react-native";
import { TransactionList } from "./TransactionList";
import { useGetExpensesQuery } from "../database/expense/ExpenseStore";

export const ExpenseList: React.FC = () => {
    const { data, isLoading } = useGetExpensesQuery();
    
    return (
        <>
            {
                isLoading || !data ? (
                    <Text>Loading...</Text>
                ) : (
                    <TransactionList data={data} />
                )
            }
        </>
    );
};
