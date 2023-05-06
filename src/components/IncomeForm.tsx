import React from 'react';
import { useFormik } from 'formik';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { useCreateIncomeMutation } from '../database/income/IncomeStore';

type FormData = {
  source: string;
  amount: number;
  date: Date;
};

const validationSchema = Yup.object().shape({
  source: Yup.string()
    .min(1, "Source must be at least 1 character")
    .max(32, "Source must be at most 32 characters")
    .required("Source is required"),
  amount: Yup.number()
    .min(0, "Amount must be at least 0")
    .max(32000000000, "Amount must be at most 32 billion")
    .required("Amount is required"),
  date: Yup.date().required("Date is required"),
});

const IncomeForm: React.FC = () => {
  const { mutate } = useCreateIncomeMutation();
  const formik = useFormik<FormData>({
    initialValues: {
      source: '',
      amount: 0,
      date: new Date(),
    },
    validationSchema,
    onSubmit: (values, formik) => {
      mutate(values);
      formik.resetForm();
    },
  });

  return (
    <View>
      <Text>Source:</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('source')}
        onBlur={formik.handleBlur('source')}
        value={formik.values.source}
      />
      {formik.touched.source && formik.errors.source && (
        <Text>{formik.errors.source}</Text>
      )}

      <Text>Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={formik.handleChange('amount')}
        onBlur={formik.handleBlur('amount')}
        value={formik.values.amount.toString()}
      />
      {formik.touched.amount && formik.errors.amount && (
        <Text>{formik.errors.amount}</Text>
      )}

      <Text>Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) =>
          formik.setFieldValue('date', new Date(value))
        }
        onBlur={formik.handleBlur('date')}
        value={formik.values.date.toISOString().slice(0, 10)}
      />
      {formik.touched.date && formik.errors.date && (
        <Text>{formik.errors.date as string}</Text>
      )}

      <Button onPress={() => formik.handleSubmit()} title="Log Income" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default IncomeForm;
