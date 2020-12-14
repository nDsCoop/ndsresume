import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import home from '../images/home.png'; 
import music from '../images/music.png';
import weather from '../images/weather.png';
import chat from '../images/chat.png';
import retrille from '../images/retrille.png';

class About extends Component {
	 render() {
	 	return (
			<div>
			<div className="aboutme-body">
				<Grid className="demo-grid-1">
					<Cell col={12}><h3>My Perspection</h3></Cell>
					<Cell col={4}>
						<h4> Future direction</h4>
						<p>I am a person who likes progress, I always want to be ahead of everything, and will accomplish my goals as
						quickly and completely as possible .. There is a saying that I am very interested in:<b> "A just one thing that never changes is the change."
					</b></p></Cell>
					<Cell col={4}>
						<h4>The Internet is My oyster</h4>
						<p>A new design like me is always up to the latét news, trends and techniques. For that, one has to get around 
						and filter information from all possible source. So I get around and roam. And here is where I roam freely: www./ .
					</p></Cell>
					<Cell col={4}>
						<h4>Personal Interest</h4>
						<p>When not designing ot coding a layout i fill my time with either of the following:<br/>
						&nbsp;I love to travel;<br/>
						&nbsp;I read a lot of Psychological and Skills Books;<br/>
						&nbsp;Can play some mini game;<br/>
						&nbsp;Relaxing by myseft;</p>
					</Cell>
					<Cell col={12}><h3>Best Project Description</h3></Cell>
					<div className="main-app">
						<div className="greeting-app">
							Allowed to build and develop under the management of nDs
						</div>
						<div className='header-app'>
							nDsApp - An application designed and developed by nDs,.SDG for quite a long time. With enthusiasm for an impressive product to users. 
							Currently the application is monitored and developed continuously by our team.
						</div>
						<div className='des-header'>
							<div className="des-left">
								<span>Language: JavaScript</span>
								<span>Date Public: day/month/year</span>
								<span>Category: entertainment, reality</span>
								<span>Server Store: Heroku/OceanDigital</span>
							</div>
							<div className="des-right">
								<span>Contribute: nDs,.SDG & Incs</span>
								<span>Manager: nDs</span>
								<span>Operate: nDs,.SDG</span>
								<span>Last Update: day/month/year</span>
							</div>
						</div>
						<div className="body-app">
							<div className="basic-useful">
								The nDs App gives you the perfect place for chat, performance and entertainment. With many content developed with high meticulousness. 
								Especially, we always put the security of your information first. Access and experience immediately.
							</div>

							<div className="url-demo-app">
								Link official Website of App:	<a href="#">nDs-App</a> (This app is very large. We shall update soon)
							</div>

							<div className="des-detail">

								<div className="homepage">
									<div className="info-text" style={{background: `url(${home}) center/cover no-repeat`}}>
										<p>We always want to create a harmonious and lively interface for users.
											 The home page with the background combination makes it interesting for the user to access the app. 
											 The automatic background selection algorithm is applied, a small change to the simplicity</p>
									</div>
								</div>
								<div className="musicpage">
									<div className="info-text" style={{background: `url(${music}) center/cover no-repeat`}}>
										<p>Music page with unlimited song search, YouTube API data source, and without any ads, you can add songs to downloads for playback, and a few other tools. for your best experience.
										You may not need to login account to still be able to use the free music app that applies only to music.</p>
									</div>
								</div>
								<div className="weatherpage">
									<div className="info-text" style={{background: `url(${weather}) center/cover no-repeat`}}>
										<p>The weather page for the nDs team is designed to create a site that allows users to manage the weather, .. the places they hide. We save and update information every day or every time a user has a new login session.
										In addition to current weather data, value comparison between points, tables for each location, basic weather forecast for the next 14 days The app also allows users to look up Corona virus effects in the country. it can either search regional or worldwide flight operations
										<br />Requires login to the system account</p>
										
									</div>
								</div>
								<div className="chatpage">
									<div className="info-text" style={{background: `url(${chat}) center/cover no-repeat`}}>
										<p>Chat helps you connect and chat with friends easily through searching by email ID name or phone number if available. With Chat you can send audio and video text messages, data files, voice recordings, react icons,
											In addition, we provide more Face realtime chat room service to help you and your friends have great moments together. This is also the nine-hour page for administration
											change user information, this information is re-used at the Weather and Retrille App <br />Requires login to the system account</p>
									</div>
								</div>
								<div className="retrillepage">
									<div className="info-text" style={{background: `url(${retrille}) center/cover no-repeat`}}>
										<p>Smart Retrille can use many popular languages ​​in the world to talk to you automatically. They only work when you say exactly what it knows, so when it doesn't understand or answers you add vocabulary to make it smarter. 
											In addition it also supports you to convert your voice to text with large amounts of words. You can customize the spoken language, currently only support English (we'll update soon) <br />Requires login to the system account</p>
									</div>
								</div>

							</div>

						</div>
					</div>
				</Grid>
			</div>
			</div>
	 			
	 	)
	}
}
export default About;
