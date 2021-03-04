import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main';
import { Works } from './pages/Works';
import { Contacts } from './pages/Contacts';
import { Blog } from './pages/Blog';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/works' component={Works} />
        <Route path='/blog' component={Blog} />
        <Route path='/contacts' component={Contacts} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
