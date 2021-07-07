import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import routes from './routes'
import Menu from './component/Menu/menu';

class App extends Component {
    
    showResult = (routes) => {
        var result = null
        if(routes.length > 0){
            result = routes.map((route , index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            })
        }

        return <Switch>{result}</Switch>
    }
    
    render(){
        return (   
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        {this.showResult(routes)}
                    </div> 
                </div>  
            </Router> 
        );
    }
}

export default App;
