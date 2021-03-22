import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Home, Works } from './pages';
import { rem, wh } from './style/modal';

const Main = styled.main`
  position: relative;

  &::after {
    content: '';
    ${wh('100vh')};
    position: absolute;
    top: -50vh;
    right: ${rem('-200px')};
    background-color: ${({ theme }) => theme.LIGHT};
    transform: rotate(45deg);
    border-radius: ${rem('99px')};
    opacity: 0.2;
    pointer-events: none;
  }
`;

const App = () => {
  return (
    <Router>
      <Header />

      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/works' component={Works} />
          {/* <Route exact path='/contacts' component={Contacts} /> */}
        </Switch>
      </Main>

      <Footer />
    </Router>
  );
};

export default App;
