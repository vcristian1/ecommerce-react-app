import { Box, Button, Divider, IconButton, Typography } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
    decreaseCount, 
    increaseCount,
    removeFromCart,
    setIsCartOpen,
} from '../../state'
import { useNavigate } from 'react-router-dom';

function CartMenu() {
  return (
    <div>CartMenu</div>
  )
}

export default CartMenu