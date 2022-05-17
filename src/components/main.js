import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import LandingPage from './landingpage';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)
export default Main;