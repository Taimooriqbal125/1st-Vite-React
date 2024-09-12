import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import "./App.css";
// import { useState } from "react";

function App() {
  const newvalidation = yup.object({
    name: yup.string().required("required"),
    age: yup.number().max(18).required("rekkk"),
    gender: yup.string().required(),
    country: yup.string().min(1).required("required"),
    hobbies: yup.array().min(1),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          age: "",
          gender: "",
          country: "",
          hobbies: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={newvalidation}
      >
        <Form>
          <label>Name : </label>
          <Field type="text" name="name" placeholder="enter name" /> <br></br>
          <div style={{ color: "red" }}>
            <ErrorMessage name="name" /> <br></br>
          </div>
          <label>Age : </label>
          <Field type="number" name="age" placeholder="enter age" /> <br></br>
          <div style={{ color: "red" }}>
            <ErrorMessage name="age" /> <br></br>
          </div>
          <label>Select Gender :</label>
          <label>Male</label>
          <Field type="radio" name="gender" value="male" />
          <label>Female</label>
          <Field type="radio" name="gender" value="female" /> <br></br>
          <div style={{ color: "red" }}>
            <ErrorMessage name="gender" /> <br></br>
          </div>
          <label>Country : </label>
          <Field name="country" as="select">
            <option name="country" value="">
              Select
            </option>
            <option name="country" value="pak">
              Pak
            </option>
            <option name="country" value="uk">
              Uk
            </option>
            <option name="country" value="sau">
              sau
            </option>
          </Field>{" "}
          <br></br>
          <label>Hobbies :</label>
          <label>Sleeping :</label>
          <Field type="checkbox" name="hobbies" value="sleeping" />
          <label>Playing :</label>
          <Field type="checkbox" name="hobbies" value="playing" /> <br></br>
          <div style={{ color: "red" }}>
            <ErrorMessage name="hobbies" /> <br></br>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
