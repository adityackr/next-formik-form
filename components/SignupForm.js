import React, { Fragment } from 'react';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';
import MyCheckBox from './MyCheckBox';
import MySelect from './MySelect';

const SignupForm = () => {
    return (
        <Fragment>
            <h1>Subscribe!</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false,
                    jobType: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('❌Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('❌Required'),
                    email: Yup.string()
                        .email('Invalid email address!')
                        .required('❌Required'),
                    acceptedTerms: Yup.boolean()
                        .required('❌Required')
                        .oneOf(
                            [true],
                            'You must accpet the terms and conditions.'
                        ),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('❌Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                    />

                    <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>

                    <MyCheckBox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckBox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </Fragment>
    );
};

export default SignupForm;
