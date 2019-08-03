import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header'

import Upload from './components/Upload';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <Header />
    <Switch>
        <Route path="/upload" component={Upload}/>
        <Route path="/videos/:id" component={App} />
        <Route path="/" component={App} />
    </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
