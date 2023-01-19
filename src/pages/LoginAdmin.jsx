import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'

const LoginAdmin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userNavigate = useNavigate()

  // Petición API ADMIN
  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.log('proceed')
      axios.get("http://localhost:8000/administradores/"+username)
      .then((res) => {
        return res.data;
      }).then((resp) => {
        console.log(resp)
        if(Object.keys(resp).length===0){
          alert('Por favor, ingresa un usuario válido')
        } else {
          if(resp.password===password){
            userNavigate('/orders/admin/')
            alert('Te logueaste con éxito')
          } else {
            alert('Porfavor ingresa unas credenciales válidas')
          }
        }
      }).catch((err) => {
        
      })
    }
  }

  // Validación
  const validate = () => {
    let result = true;
    if(username === '' || username === null) {
      result=false
      alert('Por favor, ingresa tu usuario')
    }
    if(password === '' || password === null) {
      result=false
      alert('Por favor, ingresa tu contraseña')
    }
    return result;
  }

  return <Helmet title='Login'>
    <CommonSection title='Login administradores'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 m-2'>¡Inicia sesión!</h3>
            <Form className='auth__form' onSubmit={proceedLogin}>
              <FormGroup className='form__group'>
                <input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='Ingresa tu usuario' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Ingresa tu contraseña' size='35'/>
              </FormGroup>

              <button type='submit' className='login__btn'>Login</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default LoginAdmin