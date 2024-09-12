import React from 'react'

const Non = () => {

  const Newvalidation = yup.object({
    name:yup.string().required('Required'),
    age:yup.number().required('required'),
    gender:yup.string().required('select one'),
    hobbies:yup.array().min(1).required('1'),
    country:yup.string().required()
    
      })
  return (
    <div>
      
      {/* <Formik
        initialValues={{ name: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <label>Gender</label>
          <Field type="text" placeholder="hi" name="name" />
          <button type="submit">submit</button>
        </Form>
      </Formik> */}

      <Formik
      validationSchema={Newvalidation}
        initialValues={{
          name: "",
          age: "",
          gender:"",
          hobbies: [],
          country: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          // console.log(setformdata);
        }}
      >
        <Form>
          <label>Enter Name : </label>
          <Field type="text" placeholder="name" name="name" />
         <div style={{color:"red",background:"black"}}> <ErrorMessage name='name'/></div>
          <label>Enter Age : </label>
          <Field type="number" placeholder="age" name="age" /> <br></br>
          <div style={{color:"red",background:"black"}}> <ErrorMessage name='age'/></div>
          <label>Gender</label> <br></br>
          <div style={{color:"red",background:"black"}}> <ErrorMessage name='gender'/></div>
          <label>Male</label>
          <Field type="radio" name="gender" value="male" />
          <label>Female</label>
          <Field type="radio" name="gender" value="female" />
          <label>Hobbies</label> <br></br>
          <div style={{color:"red",background:"black"}}> <ErrorMessage name='hobbies'/></div>
          <label>a</label>
          <Field type="checkbox" name="hobbies" value="a" />
          <label>b</label>
          <Field type="checkbox" name="hobbies" value="b" />
          <label>c</label>
          <Field type="checkbox" name="hobbies" value="c" />
          <label>Country </label>
          <Field name="country" as="select" type="dropdown">
            <option value="">Select</option>
            <option value="pak">Pak</option>
            <option value="us">us</option>
          </Field>
          <button  type="submit"> Submit </button>
        </Form>
      </Formik>
      {/* <h1>{setformdata}</h1> */}
    
    </div>
  )
}

export default Non
