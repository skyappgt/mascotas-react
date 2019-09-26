import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import N404 from '../pages/N404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Pet from '../pages/Pet';
import Layout from '../components/Layout';
import '../styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mascotas/:id" component={Pet} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/panel" component={Dashboard} />
        <Route component={N404} />
      </Switch>  
    </Layout> 
  </BrowserRouter>
  
);

export default App;