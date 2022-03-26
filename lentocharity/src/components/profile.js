import '../styles/profile.scss';
import {React,Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableTabsButtonForce from './tabs';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Follow from './follow'
import '../styles/follow.css'
import axios from 'axios'

// https://some-website.com/my-social-media-url


class UserProfile extends Component {
  state = { 
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    job:"",
    birthdate:"",
    region:"",
    aboutme:"",
    education:"",
    joineddate:"",
    proimageurl:"",
    res:"",
   }

  componentDidMount()
  {
    var token = localStorage.getItem("token");
    token.replaceAll('"', '')
    console.log(token);
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/account/user-profile/',
      headers: { 
        'Authorization': 'Token '+ token, 
      }
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      this.setState({firstname:response.data.firstname})
      this.setState({lastname:response.data.lastname})
      this.setState({email:response.data.email})
      this.setState({username:response.data.username})
      this.setState({birthdate:response.data.date_birth})
      this.setState({region:response.data.country})
      this.setState({job:response.data.job})
      this.setState({education:response.data.education})
      this.setState({joineddate:response.data.date_joined})
      this.setState({aboutme:response.data.bio})
      this.setState({proimageurl:response.data.image})
      this.setState({res:response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

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
        <img style={{left:'300px'}} class="card-avatar" src={this.state.proimageurl} alt="avatar" />
        {/* "https://s6.uupload.ir/files/photo-1494790108377-be9c29b29330_i7a7.jpg" */}
      </div>
      {/* <h3 style={{left:'496px',position:'absolute',bottom:'-290px',fontFamily:'icofont',color:'#465832',fontStyle:'bold',fontSize:'37px',background:'white',fontStyle:'oblique'}}>Raya Rayani&ensp; </h3> */}
      <h4 style={{left:'496px',position:'absolute',bottom:'-270px',fontFamily:'icofont',color:'#8b9b74',background:'white',fontStyle:'italic',fontSize:'22px'}}>joined january 2020</h4>{/* this.state.joineddate */}
      <div style={{left:'500px',position:'absolute',bottom:'-175px',fontFamily:'icofont'}}><Follow ></Follow></div>
         

        {/* 'url(' + profilePic + ')' */}
        
        <h1 >
          
          {/* {this.state.firstname + " " + this.state.lastname} */}
          <h3 style={{left:'116px',position:'absolute',bottom:'-460px',fontFamily:'icofont',fontStyle:'bold',fontSize:'37px',color:'rgba(103,103,103,255)'}}>Basic info</h3>
         
          <h5 style={{left:'120px',position:'absolute',bottom:'-530px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>Name</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-522px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-530px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>{this.state.firstname}</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-590px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>Family name</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-580px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-590px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>{this.state.lastname}</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-650px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>Region</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-640px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-650px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>{this.state.region}</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-710px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>Job</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-700px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-710px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>{this.state.job}</h5>
          <h5 style={{left:'120px',position:'absolute',bottom:'-770px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>Birth Date</h5>
          <p style={{left:'295px',position:'absolute',bottom:'-760px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>:</p>
          <h5 style={{left:'350px',position:'absolute',bottom:'-770px',fontFamily:'icofont',color:'rgba(103,103,103,255)'}}>{this.state.birthdate}</h5>
          
      
          </h1>  
      </div>      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       <ScrollableTabsButtonForce data={this.state.res}></ScrollableTabsButtonForce>
       <div className='icons' style={{right:'250px'}} >
        
{/* color code : #6D9736 */}
        {/* <SocialMediaIconsReact className="icon" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" /> */}
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(109,151,54,1)" backgroundColor="" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" /> */}
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(109,151,54,1)" backgroundColor="" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" /> */}
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(109,151,54,1)" backgroundColor="" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />
        &ensp;&ensp;&ensp;
        {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="skype" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" /> */}
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="skype" iconColor="rgba(109,151,54,1)" backgroundColor="" iconSize="4" roundness="50%" url="https://some-website.com/my-social-media-url" size="42" />  
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


export default UserProfile;





// https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3kvKmCZq97qcIN_smTymBH&ust=1646767950583000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDOkOnetPYCFQAAAAAdAAAAABAD