import React from "react";
import { useDispatch } from "react-redux";
import styles from "./HelpAndSupport.module.css";
import { Form as FormFinal } from "react-final-form";
import { useState } from "react";
import { FormField, Button } from "../../components/index";

const HelpAndSupport = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const required = (value) => (value ? undefined : "Required");
  const onSubmit = (values, form) => {
    if (selectedFile) {
      values["file"] = selectedFile;
    }
    console.log("Form submitted with values:", values);
    dispatch(helpRequest(values));
    form.reset();
  };
  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  return (
    <>
      <div className={styles.quesForm}>
        <FormFinal
          onSubmit={onSubmit}
        >
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <p>Are you a tourist or service provider?</p>
              <br /> <br />
              <div className={styles.formFields}>
                <FormField
                  name="username"
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  validate={required}
                  theme="light"
                  value={values}
                  renderIcon={() => null}
                />
                <br />
                <FormField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="abc@email.com"
                  validate={required}
                  theme="light"
                  value={values}
                  renderIcon={() => null}
                />
                <br />
                <FormField
                  name="questionTitle"
                  label="Question Title"
                  type="text"
                  placeholder="Enter your question title"
                  validate={required}
                  theme="light"
                  value={values}
                  renderIcon={() => null}
                />
                <br />
                <FormField
                  name="questionDescription"
                  label="Question Description"
                  type="paragraph"
                  placeholder="Describe your question"
                  validate={required}
                  theme="light"
                  value={values}
                  renderIcon={() => null}
                />
              </div>

              <div className={styles.uploadMedia}>
                <label htmlFor="media-upload">Upload Media:&emsp;&emsp;</label>
                <input
                  id="media-upload"
                  type="file"
                  accept="image/*"
                  className={styles.blogImg}
                  name="file"
                  onChange={handleInputChange}
                />
              </div>

              <Button id={styles.signupBtn} value={"Submit"} type="primary" width={250} btnType="submit" font={" 600 20px Arial, '' "} />
            </form>
          )}
        </FormFinal>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://www.transparentpng.com/thumb/question-mark/red-question-mark-with-white-person-illustration-transparent-free-Mchpt4.png" alt="FAQs" />
      </div>
    </>
  );
};
export default HelpAndSupport;
