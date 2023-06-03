import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Form as FormFinal } from 'react-final-form'
import { FormField, IconEmail, IconPerson, IconPassword, Button } from "../../components/index";
import { validateAlpha, validateEmail, validatePassword, validateEquality, validatePhone, required } from '../../utils/validations';
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import axiosInstance from "../../utils/Api";

const Signup = () => {
    const [errormsg, setErrormsg] = useState(null);
    const [preference, setPreference] = useState(null);
    const navigate = useNavigate();
    const handleChange = (selectedOption) => {
        setPreference(selectedOption);
    };
    const onSubmit = async (values, form) => {
        values.preference = preference;

        console.log('Form submitted with values:', values);
        try {
            await axiosInstance.post("auth/signup", values);
            form.reset(); // Reset the form's state after submission
            navigate("/Login");
        }
        catch (error) {
            setErrormsg(error.response.data);
        }
    };
    return (
        <div className={styles.formContainer}>
            <div className={styles.tableContainer}>
                <div className={styles.formImage}>
                    <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600&h=500" alt="" />
                </div>
                <div className={styles.form}>
                    <FormFinal
                        onSubmit={onSubmit}
                        subscription={{
                            submitted: true
                        }} >
                        {({ handleSubmit, submitting, values }) => (
                            <form onSubmit={handleSubmit}>
                                <h1 className={styles.whiteText} id={styles.signupTitle}>Sign Up</h1>
                                <FormField name="name" type="text" placeholder="Your Full Name" validate={validateAlpha} theme="dark" renderIcon={() => <IconPerson />} labelClass="noLabel" />
                                <FormField name="email" type="email" placeholder="abc@email.com" validate={validateEmail} theme="dark" renderIcon={() => <IconEmail />} labelClass="noLabel" />
                                <FormField name="password" type="password" placeholder="Your Password" validate={validatePassword} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <FormField name="confirmPassword" type="password" placeholder="Confirm Password" validate={(value, values) => validateEquality(values.password, value)} theme="dark" renderIcon={() => <IconPassword />} labelClass="noLabel" />
                                <Dropdown
                                    name="notificationPreference"
                                    label="Notification Preference"
                                    optionsValues={[
                                        {
                                            "id": 1,
                                            "name": "Email",
                                        },
                                        {
                                            "id": 2,
                                            "name": "Notification",
                                        },
                                    ]}
                                    validate={required}
                                    theme="light"
                                    value={preference}
                                    placeholder="Notification Preference"
                                    renderIcon={() => null}
                                    onChange={(selectedOption) => handleChange(selectedOption)}
                                />
                                <div className={styles.signupBtn}>
                                    <Button id={styles.signupBtn} value={"Sign Up"} type="secondary" width={300} btnType="submit" font={" 600 20px Arial, '' "} />
                                </div>
                                {errormsg && <div className={styles.error}>{errormsg}</div>}
                                <div className={styles.text}>Already have an account? <a href="/login" className={styles.whiteText}>Login</a></div>

                            </form >
                        )}
                    </FormFinal >
                </div >
            </div >
        </div >
    );
}
export default Signup;

//When a validation function is passed to a form field, final-form library automatically passes two arguments to that function: the current field value and entire form values object