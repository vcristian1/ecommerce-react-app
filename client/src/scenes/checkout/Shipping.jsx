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
            <Typography sx={{ mb: "15px" }} fontSize="18px"></Typography>
            <AddressForm />
        </Box>
    </Box>
  )
}

export default Shipping