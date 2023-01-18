import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import axios from 'axios'


const OrderUpdate = () => {

    const [id, idChange] = useState("");
    const [mvegan, mveganChange] = useState("");
    const [mceliac, mceliacChange] = useState("");
    const [mestan, mestanChange] = useState("");
    const [mautoc, mautocChange] = useState("");
    const [mcaloric, mcaloricChange] = useState("");
    const [date, dateChange] = useState("");

    const{orderid}=useParams();
    const navigate = useNavigate()

    //const [orderData, orderDataChange] = useState({})

    const isValidate = () => {
        let isProceded = true;
      let errormessage = 'Por favor, ingresa los siguientes datos: '
      if(mvegan===null || mvegan==='') {
        isProceded=false;
        errormessage += ' M. Vegan,';
      }
      if(mceliac===null || mceliac==='') {
        isProceded=false;
        errormessage += ' M. Celiac,';
      }
      if(mestan===null || mestan==='') {
        isProceded=false;
        errormessage += ' M. Estan,';
      }
      if(mautoc===null || mautoc==='') {
        isProceded=false;
        errormessage += ' M. Autoc';
      }
      if(mcaloric===null || mcaloric==='') {
        isProceded=false;
        errormessage += ' M. Caloric';
      }
      if(date===null || date==='') {
        isProceded=false;
        errormessage += ' Fecha';
      }
      if(!isProceded) {
        alert(errormessage)
      }
  
      return isProceded
      }

    const handleSubmit = e => {
        e.preventDefault();
        const orderForm={id,mvegan,mceliac,mestan,mautoc,mcaloric,date}
  
        //console.log({mvegan,mceliac,mestan,mautoc,mcaloric,date})
        if(isValidate()) {
          axios.put("http://localhost:8000/orders/"+orderid, orderForm)
          .then((res) => {
            alert('Su pedido fue rectificado')
            navigate('/orders')
          }).catch((err) => {
            console.log(err.message)
          })
        }   
      }

      useEffect(() => {
        axios("http://localhost:8000/orders/"+orderid)
        .then((res) => {
          return res.data;
        }).then((resp) => {
         // orderDataChange(resp)
          idChange(resp.id);
          mveganChange(resp.mvegan)
          mceliacChange(resp.mceliac)
          mestanChange(resp.mestan)
          mautocChange(resp.mautoc)
          mcaloricChange(resp.mcaloric)
          dateChange(resp.data)
          console.log(resp)
        }).catch((err) => {
          console.log(err.message)
        })
    }, [])
    
  

  return <Helmet title='Rectificar'>
  <CommonSection title='Formulario para rectificar'/>
  <section>
    <Container>
      <Row>
        <Col lg='6' className='m-auto text-center'>
          <h3 className='fw-bold fs-4 m-2'>Rectificar pedido</h3>

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
              <input required value={mestan} onChange={e=> mestanChange(e.target.value)} type='text' placeholder='M. Estandar' size='35'/>
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

            <button type='submit' className='createorder__btn'>Rectificar pedido</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
</Helmet>
}

export default OrderUpdate