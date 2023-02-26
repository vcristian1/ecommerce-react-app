import { useTheme } from "@mui/material";
import { Box, Typography, } from "@mui/material";
import { shades } from '../../theme';

const Footer = () => {
  const { palette: {neutral }} = useTheme();
  return (
    <Box mt="70px" p="40px" backgroundColor={neutral.light}>
        <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        // Clamp allows us to create responsive layouts without having to type media queries like min width...
        columnGap="clamp(20px, 30px, 40px)"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography
                variant="h4"
                fontWeight="bold"
                mb="30px"
                color={shades.secondary[400]}
                >
                    Colibri
                </Typography>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna. Scelerisque purus semper eget duis at tellus at urna condimentum. Enim sed faucibus turpis in eu mi. Ultricies mi quis hendrerit dolor magna eget.
                </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    About Us
                </Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms and Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Customer Care
                </Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Order</Typography>
                <Typography mb="30px">Corportate and Bulk Purchasing</Typography>
                <Typography mb="30px">Returns and Refunds</Typography>
            </Box>
            <Box width="clamp(20%, 30%, 40%)">
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">1 N. Wacker Drive Chicago IL 60606</Typography>
                <Typography mb="30px">customerservice@colibri.com</Typography>
                <Typography mb="30px">+1 (773) 255-8993</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer;
