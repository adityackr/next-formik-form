import { useField } from 'formik';
import { Fragment } from 'react';

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Fragment>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </Fragment>
    );
};

export default MySelect;
