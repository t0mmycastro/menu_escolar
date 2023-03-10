import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userNavigate = useNavigate()

  // Petición a la API
  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.log('proceed')
      axios.get("http://localhost:8000/user/"+username)
      .then((res) => {
        return res.data;
      }).then((resp) => {
        console.log(resp)
        if(Object.keys(resp).length===0){
          alert('Por favor, ingresa un usuario válido')
        } else {
          if(resp.password===password){
            userNavigate('/orders')
            alert('Te logueaste con éxito')
          } else {
            alert('Porfavor ingresa unas credenciales válidas')
          }
        }
      }).catch((err) => {
        
      })
    }
  }

  // Validación del Login
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
    <CommonSection title='Login'/>
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
              <p>¿No tienes cuenta? <Link to="/signup">¡registrate!</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login