import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
	 render() {
	 	return (
	 		<div className="contact-body">
	 			<Grid className="contact-grid">
	 				<Cell col={6}>
	 					<h2> nDs Nguyen</h2>
	 					<img
	 					src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
	 					alt="avatar"
	 					style={{height:'250px', textAlign:'center'}}
	 					/>
	 					<p style={{width:'75%', margin:'auto', paddingTop:'1em'}} >You can lose anything only <strong><b>your bravery</b></strong> must be better than others.</p>
	 				</Cell>
					<Cell col={6}>
						<h3>Contact Me</h3>
						<hr/>
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamilly:'Anton'}}>
									<i className="fa fa-phone-square" aria-hidden='true'/>
									 &#160;(090)&#160;741&#160;****
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamilly:'Anton'}}>
									<i className="fa fa-envelope-o" aria-hidden="true" />
									 &#160; nDs.tphcm@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamilly:'Anton'}}>
									<i className="fa fa-facebook-official" aria-hidden='true'/>
									 &#160;/vincentnguyen.Adsun
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize: '25px', fontFamilly:'Anton'}}>
									<i className="fa fa-globe" aria-hidden='true'/>
									 &#160; We shall update soon
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
	 			</Grid>
	 		</div>
	 	)
	}
}
export default Contact;
