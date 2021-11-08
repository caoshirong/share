import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';
import App from '../views/app/App';
import A from '../views/a/A';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}>
              <Route  exact  path="a" component={A}/>
            </Route>
        </Switch>
    </HashRouter>
);


export default BasicRoute;