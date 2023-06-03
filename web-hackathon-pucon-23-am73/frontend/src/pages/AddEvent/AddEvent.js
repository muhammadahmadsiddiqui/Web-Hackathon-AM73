import React, { useState } from "react";
import { Form as FormFinal } from 'react-final-form'
import styles from './AddEvent.module.css'
import { FormField, Button } from "../../components/index";
import { required, validatePhone, validateEmail, validateAlpha, validateURL } from '../../utils/validations';
import { useNavigate } from "react-router";
import axiosInstance from "../../utils/Api";
import DateTimePicker from 'react-datetime-picker';
import { Dropdown } from "../../components/index"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useSelector } from "react-redux";

const AddEvent = () => {
    const isLoggedIn = useSelector(state => state.user.loggedIn);
    const userId = useSelector(state => state.user.id);
    const [file, setFile] = useState([]);
    const navigate = useNavigate();
    const [startDatee, setStartDatee] = useState(new Date());
    const [endDatee, setEndDatee] = useState(new Date());
    const [recurring, setRecurring] = useState("");
    const handleChange = (selectedOption) => {
        setRecurring(selectedOption);
    };

    const upload = async (event) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axiosInstance.post("/upload", formData);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const image = "../static/images/calender.png";

    const onSubmit = async (values, event) => {
        values.recurring = recurring;
        userId ? values.userId = userId : values.userId = 2;
        const imageUrls = await upload();
        values.poster = imageUrls;
        const a = JSON.stringify(startDatee);
        const b = JSON.stringify(endDatee);
        let d = a.substring(1, 18);
        let e = b.substring(1, 18);
        console.log(d, e);
        const duration = d - e;
        console.log(duration);
        values.duration = 1;
        values.startDate = d;
        values.endDate = e;
        console.log(values);

        await axiosInstance.post("event/createEvent", values);

        // navigate("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Wanna Organize an Event?</h1>
                    <p className={styles.subHeading}>Manage your events through Eventer</p>
                    <p className={styles.description}>
                        If you want to organize an event and looking for a perfect solution to schedule your event and manage it participants you are at the right place. Feel free to provide us the event details to us and leave rest of the work to us.
                    </p>
                </div>
                {/* <img className={styles.image} alt="Cities" src="../../static/images/headerAdd.png" /> */}
            </div>
            <div className={styles.content}>
                <div className={styles.formFields}>
                    <FormFinal
                        onSubmit={onSubmit}
                        subscription={{
                            submitted: true
                        }} >
                        {({ handleSubmit, values }) => (
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    name="title"
                                    label="Name"
                                    type="text"
                                    placeholder="React js Presentation"
                                    validate={required}
                                    theme="light" value={values}
                                    renderIcon={() => null}
                                />
                                <FormField
                                    name="description"
                                    label="Description"
                                    type="text"
                                    placeholder="About Your Event"
                                    validate={required}
                                    theme="light"
                                    value={values}
                                    renderIcon={() => null}
                                />
                                <FormField
                                    name="tag"
                                    label="Tag"
                                    type="text"
                                    placeholder="Health"
                                    validate={required}
                                    theme="light"
                                    value={values}
                                    renderIcon={() => null}
                                />
                                <FormField
                                    name="capacity"
                                    label="Capacity"
                                    type="number"
                                    placeholder="30"
                                    validate={required}
                                    theme="light"
                                    value={values}
                                    renderIcon={() => null}
                                />
                                <div className={styles.uploadMedia}>
                                    <label htmlFor="media-upload">Poster of Your Event</label>
                                    <input
                                        type="file"
                                        className={styles.blogImg}
                                        name="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        placeholder="Select an image file"
                                    />
                                </div>
                                <Dropdown
                                    name="recurring"
                                    label="Recurring"
                                    optionsValues={[
                                        {
                                            "id": 1,
                                            "name": "Not Recurring",
                                        },
                                        {
                                            "id": 2,
                                            "name": "Daily",
                                        },
                                        {
                                            "id": 3,
                                            "name": "Weekly",
                                        },
                                        {
                                            "id": 4,
                                            "name": "Monthly",
                                        },
                                    ]}
                                    validate={required}
                                    theme="light"
                                    value={values}
                                    placeholder="Choose Recurring Type, if any"
                                    renderIcon={() => null}
                                    onChange={(selectedOption) => handleChange(selectedOption)}
                                />
                                <div className={styles.timeConatiner}>
                                    <label className={styles.startdate}>Start date</label>
                                    <DateTimePicker onChange={setStartDatee} value={startDatee} />
                                    <label className={styles.startdate}>End date</label>
                                    <DateTimePicker onChange={setEndDatee} value={endDatee} />
                                </div>

                                <Button value="Schedule" type="submit" btnType="submit" />
                            </form>
                        )}
                    </FormFinal>
                </div>
                <div className={styles.imageContainer}>
                    <img src={image} alt="FAQs" />
                </div>
            </div>

        </div>
    );
};
export default AddEvent;
