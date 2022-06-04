import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Productdetail.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
<div class="slider">
		
	<input type="radio" name="slide_switch" id="id1"/>
	<label for="id1">
		<img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" width="50" height="70"/>
	</label>
	<img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"/>
	
	<input type="radio" name="slide_switch" id="id2"/>
	<label for="id2">
		<img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="50" height="70"/>
	</label>
	<img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>
	
	<input type="radio" name="slide_switch" id="id3"/>
	<label for="id3">
		<img src="https://s6.uupload.ir/files/mens-puffer-red-jacket_7vjf.jpg" width="50" height="70"/>
	</label>
	<img src="https://s6.uupload.ir/files/mens-puffer-red-jacket_7vjf.jpg"/>
</div>
  );
}
