import { Box, Checkbox, FormControlLabel, Typography} from '@mui/material';
import { AddressForm } from './AddressForm';

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {
  return (
    <Box m="30px auto">
        {/* Billing Form Here */}
        <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">Billing Information</Typography>
            <AddressForm 
             type="billingAddress"
             value={values.billingAddress}
             errors={errors}
             touched={touched}
             handleBlur={handleBlur}
             handleChange={handleChange}
            />
        </Box>
        <Box mb="20px">
            <FormControlLabel
             label="Same for Shipping Address" 
             control={
                <Checkbox 
                 defaultChecked
                 value={values.shippingAddress.isSameAddress}
                 onChange={() => {
                    setFieldValue(
                        "shippingAddress.isSameAddress",
                        !values.shippingAddress.isSameAddress
                    )
                 }}
                />
             }
            />
        </Box>

        {/* Shipping Form Here */}
        {!values.shippingAddress.isSameAddress && (
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="18px">Shipping Information</Typography>
                <AddressForm 
                    type="billingAddress"
                    value={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            </Box>
        )}
    </Box>
  )
}

export default Shipping