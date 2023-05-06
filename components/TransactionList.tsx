import React from "react";
import { FlatList, View, Text } from "react-native";
import { Expense } from "../database/expense/ExpenseRepository";
import { Income } from "../database/income/IncomeRepository";

export const TransactionList: React.FC<{ data: Income[] | Expense[] }> = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item: transaction }) => (
                <View style={{ padding: 10 }}>
                    <Text>Source: {transaction.source}</Text>
                    <Text>Amount: {transaction.amount}</Text>
                    <Text>Date: {new Date(transaction.date).toLocaleDateString()}</Text>
                </View>
            )}
        />
    );
};
