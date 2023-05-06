import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Expense, createExpense, getAllExpenses } from "./ExpenseRepository";

export const useCreateExpenseMutation = () => {
    const queryClient = useQueryClient()

    return useMutation(createExpense, {
        onSuccess() {

            queryClient.invalidateQueries({ queryKey: ["expenses"] })
        }
    });
};

export const useGetExpensesQuery = () => {
    return useQuery(['expenses'], getAllExpenses);
};
