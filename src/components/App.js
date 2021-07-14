import React from 'react';
import {Router,Switch,Route} from 'react-router-dom';


import history from  '../history'
import TechPage2 from './Page2';


class App extends React.Component{

    render(){
        return(
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/'  component={TechPage2}  />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App