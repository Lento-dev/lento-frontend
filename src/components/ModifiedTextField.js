<<<<<<< HEAD
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';


const MyTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#677a59',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#677a59',
    },
    '& .MuiOutlinedInput-root': {

      '&.Mui-focused fieldset': {
        borderColor: '#677a59',
      },
    },
  });


  export default MyTextField;
=======
import * as React from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

const MyTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#677a59",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#677a59",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#677a59",
    },
  },
});

export default MyTextField;
>>>>>>> a154fb49ea61753a5769beba5871889d73083097
