import { useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";


export const AddressForm = ({
    type,
    value,
    errors,
    touched,
    handleBlur,
    handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // These functions allow for better code readbaility.

  // This allows us to format the name easily.
  const formattedName = (field) => `${type}.${field}`;

  // This allows us to format errors easily.
  const formattedError = (field) => 
    Boolean(
        // Formik function that checks first the touched object first to see if it is true or false. Then does the same with the errors object, and if either one is false it wont show an error both need to be true. 
        // We use getIn so when we are referencing something via formattedname we have to use getIn() or it wont be able to grab the field.
        getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    )
  return (
    <div>AddressForm</div>
  )
}
