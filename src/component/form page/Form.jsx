import React from "react";
import "./Form.css";
import { Formik, useFormik } from "formik";

const initialValues = {
    userid : "",
    password : "",
    name : "",
    address : "",
    country : "",
    zipcode : "",
    email : "",
    gender : {male : "",female:"",other: ""},
    language : ""
};
const onSubmit = (value) => {
console.log(Formik.value);
}




const Form = () => {

const formik = useFormik ({
    initialValues,
    onSubmit,
})
// console.log(formik.values)

  return (
    <div id="main">
      <h2>Registration Form</h2>
      <form id="form" onSubmit={formik.handleSubmit}>
        <div className="element">
          <label>User id : </label>
          <input type="text" name="userid" placeholder="Userid" onChange={formik.handleChange} value={formik.values.userid} />
        </div>{" "}
        <br></br>
        <div className="element">
          <label>Password : </label>
          <input type="password" name="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password}  />{" "}
        </div>
        <br></br>
        <div className="element">
          <label>Name : </label>
          <input type="text" name="name" placeholder="name" onChange={formik.handleChange} value={formik.values.name}  />
        </div>{" "}
        <br></br>
        <div className="element">
          <label>Address : </label>
          <input type="text" name="address" placeholder="address" onChange={formik.handleChange} value={formik.values.address} />
        </div>{" "}
        <br></br>
        {/* <div className="element">
          <label>Country :</label>
          <select>
            <option disabled selected>
              Select Country
            </option>
            <option name = "country" onChange={formik.handleChange} value={formik.values.country}  >Pakistan</option>
            <option name = "country"  onChange={formik.handleChange} value={formik.values.country}  >India</option>
            <option name = "country"  onChange={formik.handleChange} value={formik.values.country}  >US</option>
          </select>{" "}
        </div> */}
        <br></br>
        <div className="element">
          <label>Zip code : </label>
          <input type="number" name="zipcode" placeholder="zipcode" onChange={formik.handleChange} value={formik.values.zipcode}   /> 
        </div> <br></br>
        <div className="element">
          <label>Email : </label>
          <input type="email" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email}  />
        </div>{" "}
        <br></br>
        <div className="element">
          <label>Select your gender:</label>
          <input type="radio" name="gender" onChange={formik.handleChange} value={formik.values.gender.male}   />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" onChange={formik.handleChange} value={formik.values.gender.female} />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" onChange={formik.handleChange} value={formik.values.other}  />
          <label htmlFor="other">Other</label> 
        </div> <br></br>
        <div className="element">
          <label>Language :</label>
          <input type="checkbox" name="english" onChange={formik.handleChange} value={formik.values.language} />
          <label>English</label>
          <input type="checkbox" name="nonenglish" onChange={formik.handleChange} value={formik.values.language}  />
          <label> Non English</label> 
        </div> <br></br>
       <span id="btn"> <button type="submit">Submit</button></span>
      </form>
    </div>
  );
};

export default Form;
