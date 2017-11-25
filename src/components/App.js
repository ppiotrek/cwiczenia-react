import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Dashboard from './Dashboard';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Counter from './Counter';

const App = () => {
    return (

        <Router>
            <div>
            <Header/>

                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/counter" component={Counter}/>

                <Footer/>
            </div>
        </Router>

    );
};

export default App;

