import React from 'react'

import { Container,Row,Col, ListGroup, ListGroupItem, List } from 'reactstrap'

import '../Footer/footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4'>
          <div>
            <h1>Como Sano S.A</h1>
          </div>
          <p className='footer__text mt-4'>
            Empresa que presta sus servicios al gobierno de chile para combatir la mala nutrición de los niños
          </p>
        </Col>

        <Col lg='3'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Links interesantes</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Gobierno de chile</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'> 
                <Link to='#'>SANU</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Ministerio de educación de chile</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Comidas sanas</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className='footer__copyright'>Copyright {year} creado por Tomás Castro</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer