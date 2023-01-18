import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import '../styles/new-order.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewOrder = () => {

    
    const [id, idChange] = useState("");
    const [mvegan, mveganChange] = useState("");
    const [mceliac, mceliacChange] = useState("");
    const [mestan, mestanChange] = useState("");
    const [mautoc, mautocChange] = useState("");
    const [mcaloric, mcaloricChange] = useState("");
    const [date, dateChange] = useState("");

    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();
      const orderForm={mvegan,mceliac,mestan,mautoc,mcaloric,date}

      //console.log({mvegan,mceliac,mestan,mautoc,mcaloric,date})
      axios.post("http://localhost:8000/orders", orderForm)
      .then((res) => {
        alert('Su pedido fue registrado')
        navigate('/orders')
      }).catch((err) => {
        console.log(err.message)
      })
      
    }

  return <Helmet title='New Order'>
    <CommonSection title='Formulario de pedidos'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 m-2'>Crear nuevo pedido</h3>

            <Form className='order__form' onSubmit={handleSubmit}>
              <FormGroup className='form__group'>
                <input value={id} disabled type='text' placeholder='ID' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={mvegan} onChange={e=> mveganChange(e.target.value)} type='text' placeholder='M. Vegetarianos' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={mceliac} onChange={e=> mceliacChange(e.target.value)} type='text' placeholder='M. Celiacos' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={mestan} onChange={e=> mestanChange(e.target.value)} type='text' placeholder='M. Estandar' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={mautoc} onChange={e=> mautocChange(e.target.value)} type='text' placeholder='M. Autóctono' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={mcaloric} onChange={e=> mcaloricChange(e.target.value)} type='text' placeholder='M. Caloricos' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={date} onChange={e=> dateChange(e.target.value)} type='date' size='35'/>
              </FormGroup>

              <button type='submit' className='createorder__btn'>Crear orden</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default NewOrder