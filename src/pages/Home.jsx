import React from 'react'

import Helmet from '../components/Helmet/Helmet'

import homeImage from '../assets/images/HomeImage.jpeg'
import '../styles/home.css'
import {motion} from 'framer-motion'


import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ProductList from '../components/UI/ProductList'

const Home = () => {

  const year = new Date().getFullYear();
  return <Helmet title={"Inicio"}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero__subtitle'>Opciones de planes de almuerzos nuevos en este {year} se encuentran mas abajo</p>
              <h2>¿Quieres loguearte o registrarte? ¡Pulsa en el botón de abajo!</h2>

              <motion.button whileTap={{scale:1.2}} className='change__btn'><Link to='/login'>¡Logueate!</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='7'>
            <div className='hero__img'>
              <img src={homeImage} alt='' width='500'></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='food__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Productos alimenticios</h2>
          </Col>
          <ProductList />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home