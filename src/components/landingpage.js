import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import avatarMain from '../images/svgnds.png';
class Landing extends Component {
	 render() {
	 	return (
			<div>
				<div style={{width:'100%', margin:'auto'}}>
		 		<Grid className="resume-grid">
		 			<Cell col={12}>
		 				<div className="img-avatar">
						<img src={avatarMain}
						className="avatar-img" 
						alt="avatar" style={{maxHeight: '220px', maxWidth: '220px'}}/>
						</div>
		 			<div className="banner-text">
		 				<h1>nDs-App</h1>
						<h2>Research, Implement and Development</h2>
		 				<hr/>

		 				<p>ReactJs | NodeJs | JavaScript | MongoDB | MySQL | Asp.NET</p>
		 				{/*Website*/}
		 				<div className="social-links">
							<a href="https://google.com" rel="noopener noreferrer" targer="_blank">
							<i className="fa fa-globe" aria-hidden="true"></i>
							</a>
						{/*Facebook*/}
							<a href="https://google.com" rel="noopener noreferrer" targer="_blank">
							<i className="fa fa-facebook-official" aria-hidden="true"></i>
							</a>
						{/*Linkedin*/}
							<a href="https://google.com" rel="noopener noreferrer" targer="_blank">
							<i className="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
						{/*Twitter*/}
							<a href="https://google.com" rel="noopener noreferrer" targer="_blank">
							<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
						{/*Instagram*/}
							<a href="https://google.com" rel="noopener noreferrer" targer="_blank">
							<i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
		 				</div>
		 			</div>
		 		</Cell>
		 		</Grid>
		 	</div>
			</div>
	 		
	 	)
	}
}
export default Landing;