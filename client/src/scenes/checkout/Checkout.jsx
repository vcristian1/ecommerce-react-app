import { useSelector } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
// Validation libray
import * as yup from "yup";
import { shades } from "../../theme";
import Shipping from './Shipping'

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: ""
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: ""
  },
  email: "",
  phoneNumber: "",
}

// The schema is for validation, and determines if it is required and what the type that is required.
const checkoutSchema = [
  // First Step in the validation schema
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required")
      }),
    }),
  }),
  // Second step in the validation schema
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  })
]

// Component that will set up our layout on our Checkout page.
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (value, actions) => {
    setActiveStep(activeStep + 1);
  }

  async function makePayment(values) {

  }

    return (
      <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
          <Step>
            <StepLabel>Billing</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment</StepLabel>
          </Step>
        </Stepper>
        <Box>
          <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
          >
           {/* Formik Syntax below, which allows us to use these values to our benefit with validating our form */}
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {isFirst && ( 
                  <Shipping 
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  />
                )}
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    )
  }
  
  export default Checkout