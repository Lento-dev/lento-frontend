

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/" className="communicate">
        Lento
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  const handleCopiedClick = () => {
    setCopiedAlertOpen(true);
};

const handleCopiedClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setCopiedAlertOpen(false);
};
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const email = '	lento@gmail.com';
  const [copiedAlertOpen, setCopiedAlertOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[900],
        }}
      >
        <Container sx={{textAlign: 'center'}} maxWidth="sm">
          <Typography variant="body1">
          <Link sx={{ color: 'black', cursor: 'pointer' }} 
            underline="hover" 
            className="communicate"
            onClick={() => { navigator.clipboard.writeText(email);
            handleCopiedClick(); }}> {email}</Link>
          </Typography>
          <Copyright />
        </Container>
        <Snackbar
                  open={copiedAlertOpen}
                  autoHideDuration={1150}
                  onClose={handleCopiedClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                  <Alert onClose={handleCopiedClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                    Copied to clipboard!
                  </Alert>
                </Snackbar>
      </Box>
    </Box>
  );
}

export default Footer;