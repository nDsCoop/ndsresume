import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';

 const Main = () => (
 	<Switch>
 		<Route exact path="/" component={LandingPage} />
 		<Route path="/aboutme" component={AboutMe} />
 		<Route path="/resume" component={Resume} />
 		<Route path="/contact" component={Contact} />
 		<Route path="/projects" component={Project} />
 	</Switch>
 )
 export default Main;