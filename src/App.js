import logo from './logo.svg';
import './App.css';
import './static/css/styles.css'
import './static/css/Contactpage.css'
import './static/css/res.css'
import './static/css/stylesheet.css'
import './static/css/visitor.css'

import React,{useState, useEffect} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import Services from './pages/Services'
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import Visitor from './pages/Visitor';
import Resident from './pages/Resident';

import Addapartment from './pages/Addapartment'
import Addmanager from './pages/Addmanager'
import Addpool from './pages/Addpool'
import Addvisitor from './pages/Addvisitor'
import Addresident from './pages/Addresident'
import Addservice from './pages/Addservice'
import Addsucessservices from './pages/Addsuccessservices'

import Addapartment1 from './pages/Addapartment1'
import Addpool1 from './pages/Addpool1'
import Addvisitor1 from './pages/Addvisitor1'
import Addresident1 from './pages/Addresident1'
import Addservice1 from './pages/Addservice1'
import Addgarden1 from './pages/Addgarden1';
import Addsuccess1 from './pages/Addsuccess1';


import Addapartment23 from './pages/Addapartment23'
import Addvisitor23 from './pages/Addvisitor23'
import Addservice23 from './pages/Addservice23'
import Addsuccessapartment23 from './pages/Addsuccessapartment23';

import Crudapartment from './pages/Crudapartment';
import Crudbuilding from './pages/Crudbuilding';
import Crudgarden from './pages/Crudgarden';
import Crudmanager from './pages/Crudmanager';
import Crudpool from './pages/Crudpool';
import Crudresident from './pages/Crudresident';
import Crudservice from './pages/Crudservice';
import Crudvisitor from './pages/Crudvisitor';

import Crudapartment1 from './pages/Crudapartment1';
import Crudbuilding1 from './pages/Crudbuilding1';
import Crudgarden1 from './pages/Crudgarden1';
import Crudpool1 from './pages/Crudpool1';
import Crudresident1 from './pages/Crudresident1';
import Crudservice1 from './pages/Crudservice1';
import Crudvisitor1 from './pages/Crudvisitor1';

import Crudapartment23 from './pages/Crudapartment23';
import Crudservice23 from './pages/Crudservice23';
import Crudvisitor23 from './pages/Crudvisitor23';

import Deleteapartment23 from './pages/Deleteapartment23';

import Viewapartment from './pages/Viewapartment'
import Viewapartment23 from './pages/Viewapartment23'


function App() {
  return (
    <>
      <Router>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
        <Switch>
          <Route path = "/home" component={Home} />
          <Route path = "/about" component={AboutUs} />
          <Route path = "/services" component ={Services}/>
          <Route path = "/contact" component={ContactUs} />
          <Route path = "/login" component = {Login} />
          <Route path = "/register" component = {Register} />
          <Route path = "/admin" component = {Admin} />
          <Route path = "/manager" component = {Manager} />
          <Route path = "/resident" component = {Resident} />
          <Route path = "/visitor" component = {Visitor} />

          <Route path = "/addapartment" component={Addapartment} />
          <Route path = "/addmanager" component={Addmanager} />
          <Route path = "/addservice" component={Addservice} />
          <Route path = "/addpool" component={Addpool} />
          <Route path = "/addresident" component={Addresident} />
          <Route path = "/addvisitor" component={Addvisitor} />
          <Route path = "/ddsucessservices" component={Addsucessservices} />

          <Route path = "/addapartment1" component={Addapartment1} />
          <Route path = "/addservice1" component={Addservice1} />
          <Route path = "/addpool1" component={Addpool1} />
          <Route path = "/addresident1" component={Addresident1} />
          <Route path = "/addvisitor1" component={Addvisitor1} />
          <Route path = "/addgarden1" component={Addgarden1} />
          <Route path = "/addsuccess1" component={Addsuccess1} />

          <Route path = "/addapartment23" component={Addapartment23} />
          <Route path = "/addservice23" component={Addservice23} />
          <Route path = "/addvisitor23" component={Addvisitor23} />
          <Route path = "/addsuccessapartment23" component={Addsuccessapartment23} />

          <Route path = "/crudapartment" component={Crudapartment} />
          <Route path = "/crudbuilding" component={Crudbuilding} />
          <Route path = "/crudgarden" component ={Crudgarden}/>
          <Route path = "/crudmanager" component={Crudmanager} />
          <Route path = "/crudpool" exact component = {Crudpool} />
          <Route path = "/crudresident" component = {Crudresident} />
          <Route path = "/crudservice" component = {Crudservice} />
          <Route path = "/crudvisitor" component = {Crudvisitor} />

          <Route path = "/crudapartment1" component={Crudapartment1} />
          <Route path = "/crudbuilding1" component={Crudbuilding1} />
          <Route path = "/crudgarden1" component ={Crudgarden1}/>
          <Route path = "/crudpool1" exact component = {Crudpool1} />
          <Route path = "/crudresident1" component = {Crudresident1} />
          <Route path = "/crudservice1" component = {Crudservice1} />
          <Route path = "/crudvisitor1" component = {Crudvisitor1} />

          <Route path = "/crudapartment23" component = {Crudapartment23} />
          <Route path = "/crudservice23" component = {Crudservice23} />
          <Route path = "/crudvisitor23" component = {Crudvisitor23} />

          <Route path = "/deleteapartment23" component = {Deleteapartment23} />

          <Route path = "/viewapartment" component={Viewapartment} />

          <Route path = "/viewapartment23" component={Viewapartment23} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
