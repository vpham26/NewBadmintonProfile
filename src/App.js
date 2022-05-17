import React, { Component } from 'react';
import './App.css';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import Main from './components/main';
import NavegationBar from './components/navegationBar';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" 
          title={<Link  style={{textDecoration:'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
          
      
            <NavegationBar />
          </Header>
          <Drawer  title={<Link  style={{textDecoration:'none', color:'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
              <NavegationBar/>
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

}


export default App;
