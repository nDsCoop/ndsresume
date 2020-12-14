import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
class Education extends Component {
	 render() {
	 	return(
	 		<Grid >
 				<Cell col={4}>
 				 	<p>{this.props.startYear} - {this.props.endYear}</p>
 				</Cell>
 				<Cell style={{paddingLeft:'2px'}} col={8}>
 					<h4 style={{margin:'0px'}}>{this.props.schoolName}</h4>
 					<p>{this.props.Description}</p>
 				</Cell>
 			</Grid>
	 		)
	 }
}
export default Education;