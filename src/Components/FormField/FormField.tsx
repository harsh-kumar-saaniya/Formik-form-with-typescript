import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage, Field } from 'formik';


interface FormFieldProps {
    label: string,
    name: string
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
    return (
        <div className="formField">
            <Field
                as={TextField}
                name={name}
                label={label}
                fullWidth
                helperText={<ErrorMessage name={name} />}
                required
            />
        </div >
    )
}

export default FormField;