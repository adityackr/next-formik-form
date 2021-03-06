import { useField } from 'formik';
import React, { Fragment } from 'react';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Fragment>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </Fragment>
    );
};

export default MyTextInput;
