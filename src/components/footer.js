import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import BusinessIcon from '@mui/icons-material/Business';
import { Avatar, Grid, Button, IconButton } from "@mui/material";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="http://localhost:3000/"
        className="communicate"
      >
        Lento
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const handleCopiedClick = () => {
    setCopiedAlertOpen(true);
  };

  const handleCopiedClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCopiedAlertOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const email = "	lento@gmail.com";
  const [copiedAlertOpen, setCopiedAlertOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: '50vh'
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[900],
        }}
      >
        <Container sx={{ textAlign: "center" }} maxWidth="sm">
          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Contact us
          </Typography>
          <Grid container spacing={0.5}>
            <Grid
              item
              xs={12}
              justifyContent="center"
              sx={{ display: "inline-flex" }}
            >
              <LocalPhoneRoundedIcon
                sx={{ color: "#e6835a", marginRight: "1%" }}
              />

              <Typography justifyContent="center">
                098 - 09912366384
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              justifyContent="center"
              sx={{ display: "inline-flex" }}
            >
              <EmailIcon sx={{ color: "#e6835a", marginRight: "1%" }} />

              <Typography justifyContent="center">
                <Link
                  sx={{ color: "black", cursor: "pointer", letterSpacing: 1 }}
                  underline="hover"
                  className="communicate"
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                    handleCopiedClick();
                  }}
                >
                  {" "}
                  {email}
                </Link>{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              justifyContent="center"
              sx={{ display: "inline-flex", marginBottom: '1rem' }}
            >
              <BusinessIcon sx={{ color: "#e6835a", marginRight: "1%" }} />

              <Typography justifyContent="center">
              Iran - Tehran - Univeristy of technology and science
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              justifyContent="center"
              sx={{ display: "inline-flex" }}
            >
              <Typography justifyContent="center" fontWeight="bold" fontSize="1.3rem">
              Use Lento and enjoy helping people.
    
          </Typography>
            </Grid>
          </Grid>

          <Copyright />
        </Container>
        <Snackbar
          open={copiedAlertOpen}
          autoHideDuration={1150}
          onClose={handleCopiedClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCopiedClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Copied to clipboard!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Footer;
