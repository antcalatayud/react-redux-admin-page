import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Course/Courses';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>        
        <Route path="courses" component={Courses}/>
        <Route path="about" component={About}/>
    </Route>
);