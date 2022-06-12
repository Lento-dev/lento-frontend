import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { alpha, styled } from "@mui/material/styles";

const MyAutocomplete = styled(Autocomplete)({
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

export default MyAutocomplete;
