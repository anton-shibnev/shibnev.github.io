import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Works } from './pages';

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/works' component={Works} />
          {/* <Route exact path='/contacts' component={Contacts} /> */}
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
