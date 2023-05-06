import React from "react";
import { View, Text } from "react-native";
import { Income } from "../database/income/IncomeRepository";

export const IncomeListItem: React.FC<{ income: Income }> = ({ income }) => {
    return (

        <View style={{ padding: 10 }}>
            <Text>Source: {income.source}</Text>
            <Text>Amount: {income.amount}</Text>
            <Text>Date: {new Date(income.date).toLocaleDateString()}</Text>
        </View>
    );
};
