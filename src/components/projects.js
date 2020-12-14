import React, { Component } from 'react';

import {Tab, Tabs, Grid, Cell, Card, IconButton, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';
class Project extends Component {
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
}
toggleCategories(){
	if(this.state.activeTab === 0){
		return(
			<div className="projects-grid">
			{/*Project1*/}
			{/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color:'#fff', height:'176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png)'
			}}>Project#1</CardTitle>
			<CardText>
			Loren Ispum is simple dummy text of the pringting and typessetting industry.
			</CardText>
			<CardActions border>
				<Button src='google.com' colored>GitHub</Button>
				<Button colored>Live Demo</Button>
				<Button colored>CodePen</Button>
			</CardActions>
			<CardMenu style={{color:'#fff'}}>
				<IconButton name="share"/>
			</CardMenu>
			</Card>
			 */}
				<div className="header-project">
					<span>Name Project: <strong>Resort Deluxe</strong></span>
					<span>Created: 15/1/2020</span>
					<span>Language Code: JavaScript</span>
				</div>

				<div className="body-project">
					<span>Description: App written based on the author Addict. A vip booking page for your travel becomes attractive. Do not use a backend with a given data source.
						 Using Context architecture provides information across the application. With nice structure and high level Css. Create a quality Resort page..</span>
					<span>Source Code: <a url='https://github.com/nDsCoop/redeluxesort'>Github/nDsCoop</a></span>
					<span>Update: 21/9/2020 </span>
				</div>
			</div>
			)
	}else if(this.state.activeTab === 1){
		return(
			<div className="projects-grid">
				<div className="header-project">
					<span>Name Project: <strong>Git Search</strong></span>
					<span>Created: 1/6/2020</span>
					<span>Language Code: JavaScript</span>
				</div>

				<div className="body-project">
					<span>Description: App written based on the author Addict. With data source from API github provides basic information and projects of github users. 
						With the statistics of plotting data through projects with different programming languages, in order to correlate and visually describe the contribution of users to accounts on Github. Css is added directly at Component through Wrapper styles</span>
					<span>Source Code: <a url='https://github.com/nDsCoop/gitsearch'>Github/nDsCoop</a></span>
					<span>Update: 21/9/2020 </span>
				</div>
			 	
			</div>
			)
	}else if(this.state.activeTab === 2){
		return(
			<div className="projects-grid">
				<div className="header-project">
					<span>Name Project: <strong>Todo List</strong></span>
					<span>Created: 15/2/2020</span>
					<span>Language Code: JavaScript</span>
				</div>

				<div className="body-project">
					<span>Description: A basic application for note-taking tasks. With a pure structure passing Props through the components together. Data is recorded and stored directly on the user's Browser. No extra cost of any Server</span>
					<span>Source Code: <a href='https://github.com/nDsCoop/toDolist'>Github/nDsCoop</a></span>
					<span>Link Public: <a href='https://ndstodolist.herokuapp.com/'>nDs-TodoList</a></span>
					<span>Update: 21/9/2020 </span>
				</div>
			</div>
			)
	}else if(this.state.activeTab === 3){
		return(
			<div className="projects-grid">
				<div className="header-project">
					<span>Name Project: <strong>Shirt Shop</strong></span>
					<span>Created: 1/4/2020</span>
					<span>Language Code: JavaScript</span>
				</div>

				<div className="body-project">
					<span>Description: Application to support sales and product management. Code based on Basir's idea. The application is divided into two prominent parts: Client and Server. With Redux client support, Mongoose at Server provides data through the useSelector and useDispatch of react-redux library.</span>
					<span>Source Code: <a url='https://github.com/nDsCoop/shopboy'>Github/nDsCoop</a></span>
					<span>Update: 13/12/2020 </span>
				</div>
			</div>
			)
	} else {
		return(
			<div className="projects-grid">
				<div className="header-project">
					<span>Name Project: <strong>Dress Shop</strong></span>
					<span>Created: 1/5/2020</span>
					<span>Language Code: JavaScript</span>
				</div>

				<div className="body-project">
					<span>Description: The sell dress app visually adopts Basir's concept and design with react's Extend structure providing data via pages from Props. At the data server are also sorted by Redux with createStore and combineReducers. The application is easy to use, orders are placed right next to the list of products, easy for value tracking and simple payment steps.</span>
					<span>Source Code: <a url='https://github.com/nDsCoop/shopgirl'>Github/nDsCoop</a></span>
					<span>Update: 13/12/2020 </span>
				</div>
			</div>
			)
	}
}
	 render() {
	 	return (
	 		<div className="category-tabs">
	 			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
	 				<Tab style={{color:'lightblue'}}>Resort Deluxe</Tab>
	 				<Tab style={{color:'lightblue'}}>Git Search</Tab>
	 				<Tab style={{color:'lightblue'}}>Todo List</Tab>
					<Tab style={{color:'lightblue'}}>Shirt Shop</Tab>
					<Tab style={{color:'lightblue'}}>Dress Shop</Tab>
	 			</Tabs>
	 				<Grid>
						<Cell col={12}>
							<div className="content">
								{this.toggleCategories()}
								<div className="note-project">
									Note: All data here are incomplete. They are just Demo products built under an available license with incomplete features.<br />
									nDs decided not to update to the internet. For these resources you can use them together and just source them.
								</div>
							</div>
						</Cell>
					</Grid>
	 		</div>
	 	)
	}
}
export default Project;