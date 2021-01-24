import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import "../Components/Header.css";
import logo from './mono.png';
import '../Components/Toggle.css'

export default class Header extends Component {
    render() {
       
        return (
            
            <Router>    
    {/* Toggle  */}
<div className="navbar" >
<nav role="navigation">
    
<div id="menuToggle"> 
<input type="checkbox" />
<span></span>
<span></span>
<span></span>

<ul id="menu">
<h1 className="mini-menu-tittle">Меню</h1>
<li><Link to={"/"} active={{color:"red"}}>Головна</Link></li>
<li><Link to={"/about"}>Про мене</Link></li>
<li><Link to={"/event"}>Події</Link></li>
<li><Link to={"/contacts"}>Контакти</Link></li>

</ul>
</div>
</nav>
           {/* navbar */}
                    <div className="navbar-header">
                    <img 
                            src={logo}
                            height="100%"
                            width="15%"
                        
                            alt="logo"
                        /> 
                       
                       
                        <ul className="nav navbar-nav">
                            <li><Link to={"/"} >Портфоліо</Link></li>
                            <li><Link to={"/about"}>Про нас</Link></li>
                            <li><Link to={"/event"}>Розробка</Link></li>
                            <li><Link to={"/contacts"}>Контакти</Link></li>
                        </ul>
                        
                    
                                
                    </div>
                  {/* Toggle end   */}
                </div>
                    {/* <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/about" component={About} />
                         
                        <Route exact={true} path="/contacts" component={Contacts} />
                        <Route exact={true} path="/groupLessons" component={Blog} />
                        <Redirect from='/event' to='/groupLessons'/>
                    </Switch> */}
                      </Router>
            
        )
    }
}