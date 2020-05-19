import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Container from './components/Container';
import Nav from './components/Nav';
import Search from './components/Search'

const navItems = [{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]

const App = () => {
  return (
    <BrowserRouter>
      
      <Nav navItems={navItems} />
      <Container>
        <Search />
      </Container>
      <GlobalStyle />

    </BrowserRouter>
  );
}

export default App;
