import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/order-detail.css'
import { Link } from 'react-router-dom';
import QRCode from 'qrcode'

const OrderDetail = () => {

    const{orderid}=useParams();

    const [orderData, orderDataChange] = useState({})
    const [qrcode, setQrCode] = useState('')

    useEffect(() => {
        axios("http://localhost:8000/orders/"+orderid)
        .then((res) => {
          return res.data;
        }).then((resp) => {
          orderDataChange(resp)
          console.log(resp)
        }).catch((err) => {
          console.log(err.message)
        })
    }, [])

    let data = {
        mvegan: orderData.mvegan,
        mceliac: orderData.mceliac,
        mestan: orderData.mestan,
        mautoc: orderData.mautoc,
        mcaloric: orderData.mcaloric,
        date: orderData.date
    }

    let stJson = JSON.stringify(data)

    const GenerateQRCode = () => {
        QRCode.toDataURL(stJson, (err, stJson) => {
            if (err) return console.error(err)

            setQrCode(stJson)
        })
    }
    

  return <Helmet title='Detalle'>
    <CommonSection title='Detalle de la orden' />
    <Container>
        <Row>
            <Col lg='6'>
                <div className='target__order'>
                    <h3 className='title__detail'>Detalles del pedido: </h3>
                <ListGroup className=''>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 orders__list'>
                        <p>Menús vegetarianos: Se ordenaron {orderData.mvegan}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 orders__list'>
                        <p>Menús celiacos: Se ordenaron {orderData.mceliac}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 orders__list'>
                        <p>Menús estandar: Se ordenaron {orderData.mestan}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 orders__list'>
                        <p>Menús autóctono: Se ordenaron {orderData.mautoc}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                        <p>Menús calóricos: Se ordenaron {orderData.mcaloric}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                        <p>Fecha del pedido: {orderData.date}</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                    
                    {qrcode && <div>
                        <p>Código QR generado</p>
                       <img src={qrcode} className='qrcode__img' />
                    </div>}
                    </ListGroupItem>
                </ListGroup>

                <div className='btn__general'>
                    <button type='submit' className='volver__btn'><Link to='/orders'>Volver</Link></button>
                    <button onClick={GenerateQRCode} className='qr__btn'>Generar codigo QR</button>
                    
                </div>
                </div>
            </Col>
        </Row>
    </Container>
  </Helmet>
}

export default OrderDetail