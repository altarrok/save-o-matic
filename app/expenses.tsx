import { StyleSheet, Text, View } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import { ExpenseList } from '../components/ExpenseList';


export default function Expenses() {
  return (
      <View style={styles.container}>
        <ExpenseList />
        <ExpenseForm />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
