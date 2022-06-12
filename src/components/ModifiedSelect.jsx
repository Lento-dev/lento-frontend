import * as React from 'react';
import Select from "@mui/material/Select";
import { alpha, styled } from '@mui/material/styles';


const MySelect = styled(Select)({
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


  export default MySelect;