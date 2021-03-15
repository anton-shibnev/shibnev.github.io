import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Works, Contacts } from './pages';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/contacts' component={Contacts} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
