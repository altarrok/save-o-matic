import React from "react";
import { Text } from "react-native";
import { useGetIncomesQuery } from "../database/income/IncomeStore";
import { TransactionList } from "./TransactionList";

export const IncomeList: React.FC = () => {
    const { data, isLoading } = useGetIncomesQuery();
    
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
