import './style.scss';
import {React,Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableTabsButtonForce from './a/componants/tabs';
import {SocialMediaIconsReact} from 'social-media-icons-react';



// https://some-website.com/my-social-media-url


class App extends Component {
  state = {  }
  
  render() {
    
  
    return (
      <div className="App">
      <div class="card-header">
        {/* <div 
        // class="card-cover" 
        style={{ 
      backgroundImage: `url("https://i.picsum.photos/id/278/200/300.jpg?blur=2&hmac=ZtPHlBPBNcWsksht64oMFQZdHvzG_DrcuEyHKerWmKI")` 
      backgroundImage:`url(${pic})`
    }}
    // style={{backgroundImage:"url('https://i.picsum.photos/id/278/200/300.jpg?blur=2&hmac=ZtPHlBPBNcWsksht64oMFQZdHvzG_DrcuEyHKerWmKI')"}}
    // style ={ { backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')" } }
    >
      </div> */}

      <div className="backgroundimagehome"> 
      </div>
      <div >
        <img style={{left:'300px'}} class="card-avatar" src="https://s6.uupload.ir/files/photo-1494790108377-be9c29b29330_i7a7.jpg" alt="avatar" />
      </div>


        {/* 'url(' + profilePic + ')' */}
        
        <h1 >
          {/* Fatemeh jalalvand */}
          {/* {this.state.firstname + " " + this.state.lastname} */}
          <h3 style={{left:'116px',position:'absolute',bottom:'-460px',fontFamily:'icofont',color:'rgb(54, 53, 53)',fontStyle:'bold',fontSize:'37px'}}>Basic info</h3>
         
          <h5 style={{left:'120px',position:'absolute',bottom:'-530px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Name</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-522px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-530px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Raya</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-590px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Family name</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-580px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-590px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Rayani</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-650px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Region</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-640px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-650px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Mexico</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-710px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>Job</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-700px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-710px',fontFamily:'icofont',color:'rgb(54, 53, 53)'}}>nurse</h5>
          
      
          </h1>  
      </div>      
      <br/><br/><br/><br/><br/><br/><br/><br/>
       <ScrollableTabsButtonForce></ScrollableTabsButtonForce>
       <div className='icons' style={{right:'250px'}} >
        

        <SocialMediaIconsReact className="icon" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="skype" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        
 
        </div>
 
       
      </div>
    );
  }
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default App;





// https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3kvKmCZq97qcIN_smTymBH&ust=1646767950583000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDOkOnetPYCFQAAAAAdAAAAABAD