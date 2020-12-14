import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
	 render() {
	 	return (
	 		<div>
	 			<Grid className="resume-grid">
	 				<Cell col={4}>
	 					<div style={{textAlign:'center'}}>
	 						<img 
	 						src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
	 						alt="avatar"
	 						style={{height:'280px'}}
	 						/>
	 					</div>
	 					<h2>nDs Nguyen</h2>
	 					<div className="descProfile">
	 					<h4>web-app Designer</h4>
	 					<hr style={{borderTop:'3px solid #833fb2' , width :'52%'}}/>
	 					<p>As a new programmer I am always learning, and following the experience of my seniors, starting with ASP.NET and currently learning and researching applications from Reactjs with Nodejs and MongoBD.</p>
	 					<hr style={{borderTop:'3px solid #833fb2' , width :'72%'}}/>
	 					<h5>Address</h5>
	 					<p>Q.Binh Tan, Tp.Ho Chi Minh</p>
	 					<h5>Phone</h5>
	 					<p>(090)&#160;741&#160;****</p>
	 					<h5>Email</h5>
	 					<p>nDs.laivung@gmail.com</p>
	 					<h5>Website</h5>
	 					<p>http://ndscoop.tech & https://ndsapp.herokuapp.com/</p>
	 					<hr style={{borderTop:'3px solid #833fb2' , width :'92%'}}/>
	 					</div>
	 				</Cell>
	 				<Cell className="resume-right-col" col={8}>
						<h2 style={{borderBottom:'2.5px solid #833fb2',width:'200px'}}>Education</h2>
						<Education
							startYear={2012}
							endYear={2015}
							schoolName="Junior High School"
							Description="Done for 4 years"
						/>
						<Education
							startYear={2015}
							endYear={2017}
							schoolName="High School"
							Description="Done for 3 years"
						/>
						<Education
							startYear={2018}
							endYear={2022}
							schoolName="University"
							Description="to now with Specilised design and AppDevelop"
						/>
						<hr style={{borderTop:'3px solid #e22947'}} />
						<h2 style={{borderBottom:'2.5px solid #833fb2',width:'225px'}}>Experience</h2>
							<Experience 
							startYear={"1/2020"}
							jobName="Beginner"
							Description="Starting study about coding and deverlop web-application"
							/>
							<Experience 
							startYear={"5/2020"}
							jobName="After Beginner/Medium"
							Description="Starting success some website and some webapps"
							/>
						<hr style={{borderTop:'3px solid #e22947'}} />
						<h2 style={{borderBottom:'2.5px solid #833fb2',width:'290px'}}>IndividualSkills</h2>
							<Skills
								skill="ReactJs"
								progress={75}
							/>
							<Skills
								skill="NodeJs"
								progress={70}
							/>
							<Skills
								skill="HTML/CSS"
								progress={85}
							/>
							<Skills
								skill="Assertive"
								progress={85}
							/>
							<br/>
	 				</Cell>
	 			</Grid>
	 		</div>
	 	)
	}
}
export default Resume;