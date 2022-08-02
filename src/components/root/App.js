import React from 'react';
import { Container } from 'reactstrap'
import Navi from '../navi/Navi';
import DashBoard from '../root/Dashboard';

function App() {
  return (
        <Container>
    <Navi />
    <DashBoard />
        </Container>
  );
}

export default App;
