import React from 'react';
import { Container,Col, Row} from '../../Grid';
import {Button} from '../../Form';
const Header = () => {
  return (
    <Row b_b={1} borderColor="primary" spacing="10">
      <Col md={2} t_c>
        Logo Here
      </Col>
      <Col md={10} t_c>
        <Button>Menu 1</Button>
        <Button>Menu 2</Button>
        <Button>Menu 3</Button>
      </Col>
  </Row>);
};

export default Header;