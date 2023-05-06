import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createIncome, getAllIncomes } from "./IncomeRepository";

export const useCreateIncomeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(createIncome, {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["incomes"] })
    }
  });
};

export const useGetIncomesQuery = () => {
  return useQuery(['incomes'], getAllIncomes);
};