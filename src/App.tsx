import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormField from './Components/FormField/FormField';


interface FormsValues {
  name: string;
}

const initialvalues: FormsValues = {
  name: ""
}

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must have atleast 2 characters")
    .required('Name is required')
})

function App() {

  const forSubmit = (values: FormsValues): void => {
    alert(JSON.stringify(values));
  }

  return (
    <div className="App">
      <h1>Registration</h1>
      <Formik
        initialValues={initialvalues}
        onSubmit={forSubmit}
        validationSchema={registerSchema}
      >
        {
          ({ dirty, isValid }) => {
            return (
              <Form>
                <div>
                  {/* <label>Name: </label> */}
                  {/* <Field name="name" as="input"></Field>
                  <ErrorMessage name="name" /> */}
                </div>
                <FormField label="Name" name="name" />
                <button disabled={!dirty || !isValid} type="submit">Sign up</button>
              </Form>
            )
          }
        }
      </Formik>
    </div >
  );
}

export default App;
