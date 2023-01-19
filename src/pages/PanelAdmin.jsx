import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const PanelAdmin = () => {

  const[orderData, orderDataChange] = useState(null)
  const navigate = useNavigate()

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

  const loadDetail = (orderid) => {
    navigate("/orders/detail-admin/"+orderid)
  }

  return <Helmet title=' Admin'>
    <CommonSection title='Panel de administrador' />
    <Container>
      <Row>
        <div className='botones'>
          <div className='btn__logout'>
            <button><Link to='/login'>Logout</Link></button>
          </div>
        </div>

        <Col lg='9'>
          <table className='table bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>LICEO</th>
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
                    <td>{item.liceo}</td>
                    <td>{item.mvegan}</td>
                    <td>{item.mceliac}</td>
                    <td>{item.mestan}</td>
                    <td>{item.mautoc}</td>
                    <td>{item.mcaloric}</td>
                    <td>
                    <button onClick={() => {loadDetail(item.id)}} className='btn__detalle'>Ver detalle</button>
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

export default PanelAdmin