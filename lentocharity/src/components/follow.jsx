import React, { Component } from "react";
import '../styles/follow.css'

class Follow extends Component {
state = { followed: false };
toggle = () => {
	let localfollowed = this.state.followed;

	// Toggle the state variable liked
	localfollowed = !localfollowed;
	this.setState({ followed: localfollowed });
};
render() {
	return (
	<div className="container">
		<center>
		<div
			className="container"
			// style={{ border: "1px solid black", width: "15%" }}
			onClick={() => this.toggle()}
		>
			{this.state.followed === false ? (
			<button type="button" class="follow-button follow" style={{background:'#8b9b74',color:'white',fontSize:'24px',fontFamily:'icofont',padding:'0px'}}>+&ensp;follow&ensp;</button>
			) : (
                <button type="button" class="follow-button follow" style={{background:'#8b9b74',color:'white',fontFamily:'icofont',fontSize:'24px',padding:'0px'}} >following</button>
			)}
		</div>
        </center>
		
	</div>
	);
}
}

export default Follow;
