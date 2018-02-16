import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router,Route } from 'react-router-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import Mainpage from './components/Mainpage.jsx';



render(
  <Router >
  <div>
      <Route exact path = "/" component = {App}/>
                                                              
         
        
           <Route path = "/question" component = {Mainpage}  />                                                                           
         
         
      </div>
   </Router>, document.getElementById('app'));
registerServiceWorker();