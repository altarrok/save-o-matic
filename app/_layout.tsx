import { Slot, Tabs } from "expo-router";
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeDatabase } from '../database/SQLite';

const queryClient = new QueryClient();

export default function AppLayout() {
    useEffect(() => {
      initializeDatabase();
    }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Tabs />
    </QueryClientProvider >
  );
}