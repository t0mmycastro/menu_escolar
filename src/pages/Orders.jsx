import React, {useEffect, useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/orders.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Orders = () => {

  const[orderData, orderDataChange] = useState(null)

  useEffect(() => {
    axios("http://localhost:8000/orders/")
    .then((res) => {
      return res.data;
    }).then((resp) => {
      orderDataChange(resp)
      console.log(resp)
    }).catch((err) => {
      console.log(err.message)
    })


  }, [])
  

  return <Helmet title='Menu de ordenes'>
    <CommonSection title='Menu de ordenes'/>
    <Container>
      <Row>
        <div className='botones'>
          <div className='btn__logout'>
            <button><Link to='/login'>Logout</Link></button>
          </div>
          <div className='btn__pedidos'>
            <button><Link to='/new-order'>Crear pedido</Link></button>
          </div>
        </div>

        <Col lg='9'>
          <table className='table bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>M1</th>
                <th>M2</th>
                <th>M3</th>
                <th>M4</th>
                <th>M5</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              { orderData &&
                orderData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.mvegan}</td>
                    <td>{item.mceliac}</td>
                    <td>{item.mestan}</td>
                    <td>{item.mautoc}</td>
                    <td>{item.mcaloric}</td>
                    <td>
                    <button className='btn__rectificar'>Rectificar</button>
                    <button className='btn__detalle'>Ver detalle</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </Helmet>
}

export default Orders