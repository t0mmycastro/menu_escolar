import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'


const Signup = () => {

  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");

  const navigate = useNavigate()

  const isValidate = () => {
    let isProceded = true;
    let errormessage = 'Por favor, ingresa los siguientes datos: '
    if(id===null || id==='') {
      isProceded=false;
      errormessage += ' Usuario,';
    }
    if(name===null || name==='') {
      isProceded=false;
      errormessage += ' Nombre,';
    }
    if(email===null || email==='') {
      isProceded=false;
      errormessage += ' Email,';
    }
    if(password===null || password==='') {
      isProceded=false;
      errormessage += ' Contraseña';
    }
    if(!isProceded) {
      alert(errormessage)
    } else {
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

      }else{
          isProceded = false;
          alert('Please enter the valid email')
      }
    }
    return isProceded
  }

  const handleSubmit = (e) => {
  
    e.preventDefault();
    let usuario = {id,name,email,password}
    
    // console.log(usuario)
    if(isValidate()) {
      axios.post("http://localhost:8000/user", usuario)
      .then(res => {
        alert('Te has registrado correctamente')
        navigate('/login')
     })
      .then(err => {console.log(err)})
    }  
  }

  return <Helmet title='Signup'>
    <CommonSection title='Signup'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 m-2'>¡Registrate!</h3>

            <Form className='auth__form' onSubmit={handleSubmit}>
              <FormGroup className='form__group'>
                <input value={id} onChange={e => idChange(e.target.value)} type='text' placeholder='Ingresa tu liceo' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={name} onChange={e => nameChange(e.target.value)} type='text' placeholder='Ingresa tu nombre' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={email} onChange={e => emailChange(e.target.value)} type='email' placeholder='Ingresa tu email' size='35'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input value={password} onChange={e => passwordChange(e.target.value)} type='password' placeholder='Ingresa tu contraseña' size='35'/>
              </FormGroup>

              <button type='submit' className='login__btn'>Crear una cuenta</button>
              <p>¿Ya tienes una cuenta? <Link to="/login">¡logueate!</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup;