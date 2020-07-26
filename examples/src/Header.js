import React from 'react';
import { Container,Col, Row} from '../../Grid';
import {Button} from '../../src/Form';
const Header = () => {
  return (
    <Container lg>
    <Row b_b={1} borderColor="primary" spacing="10">
      <Col md={3} t_c>
        Logo Here
      </Col>
      <Col md={9}>
        <Button mar_h={1} color="primary" background="white">React</Button>
      </Col>
  </Row>
    </Container>);
};

export default Header;