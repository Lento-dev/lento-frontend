import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EventNoteIcon from '@mui/icons-material/EventNote';


export default function MediaControlCard() {
  

  return (
   
    <Card sx={{ display: 'flex',width:'22rem',height:'11rem',backgroundColor:'white',borderRadius:'5px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" >
            New red jacket
          </Typography>
          
     
         
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',}}>
          <BusinessIcon style={{fontSize:'large'}}/>
          <span style={{color:'grey',lineHeight:'160%'}}>&nbsp;Hengam street</span>
          </div> 
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',}}>
          <CategoryIcon style={{fontSize:'large'}}/>
          <span style={{color:'grey',lineHeight:'160%'}}>&nbsp;cloth</span>
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',}}>
          <CardGiftcardIcon style={{fontSize:'large'}} />
          <span style={{color:'grey',lineHeight:'160%'}}>&nbsp;for gift</span>
          </div>
          <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',}}>
          <EventNoteIcon style={{fontSize:'large'}}/>
          <span style={{color:'grey',lineHeight:'350%'}}>&nbsp;24/02/2021</span>
          </div>
          
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://s6.uupload.ir/files/mens-puffer-red-jacket_cu1a.jpg"
        alt="Live from space album cover"
      />
    </Card>
    
    
  );
}
