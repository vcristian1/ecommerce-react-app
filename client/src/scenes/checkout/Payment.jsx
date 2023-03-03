import { Box, Typography, TextField } from "@mui/material";

export const Payment = ({ values, touched, errors, handleBlur, handleChange}) => {
  return (
    <Box m="30px 0">
        {/* Contact Info Here */}
        <Typography sx={{ mb: "15px" }} fontSize="18px"></Typography>
        <TextField 
         fullWidth
         type="text"
         label="Email"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.email}
         name="email"
         // Converts email to a boolean
         error={!!touched.email && !!errors.email}
         helperText={touched.email && errors.email}
         sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField 
         fullWidth
         type="text"
         label="Phone Number"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.phoneNumber}
         name="phoneNumber"
         // Converts email to a boolean
         error={!!touched.phoneNumber && !!errors.phoneNumber}
         helperText={touched.phoneNumber && errors.phoneNumber}
         sx={{ gridColumn: "span 4" }}
        />
    </Box>
  )
}

export default Payment;
