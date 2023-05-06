import { UseMutationOptions, UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Income, createIncome, getAllIncomes } from "./IncomeRepository";

export const useCreateIncomeMutation = (
  options?: Omit<UseMutationOptions<number | undefined, unknown, Omit<Income, "id">>, "onSuccess">
): UseMutationResult<number | undefined, unknown, Omit<Income, "id">> => {
  const queryClient = useQueryClient()

  const mergedOptions: UseMutationOptions<number | undefined, unknown, Omit<Income, "id">> = {
    ...options,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["incomes"] })
    }
  }

  return useMutation(createIncome, mergedOptions);
};

export const useGetIncomesQuery = (): UseQueryResult<Income[], unknown> => {
  return useQuery(['incomes'], getAllIncomes);
};