import React from 'react';
import { Navigation, Layout, Drawer, Content, Header } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';
function App() {
  return (
   <div className="demo-big-content">
    <Layout>
         <Header className="header-color" title={<Link style={{textDecoration:'none', color:'lightblue'}} to="/"><h3>nDs</h3></Link>} scroll>
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
            <div className="inner point">.</div>
            </div>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Project</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{background: '#141E30' }}  title={<Link style={{textDecoration:'none', color:'lightblue'}} to="/">nDs</Link>}>
            <Navigation>
                <Link style={{color:'lightblue'}} to="/resume">Resume</Link>
                <Link style={{color:'lightblue'}} to="/projects">Project</Link>
                <Link style={{color:'lightblue'}} to="/aboutme">About</Link>
                <Link style={{color:'lightblue'}} to="/contact">Contact</Link>
            </Navigation>

        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
