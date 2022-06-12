
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
