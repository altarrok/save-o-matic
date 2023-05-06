import React from "react";
import { FlatList } from "react-native";
import { IncomeListItem } from "./IncomeListItem";
import { useGetIncomesQuery } from "../database/income/IncomeStore";

export const IncomeList = () => {
    const { data } = useGetIncomesQuery();

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (<IncomeListItem income={item} />)}
        />
    );
};
