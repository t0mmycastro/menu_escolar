import React from 'react'

import {motion} from 'framer-motion'
import productsVeganos from '../../assets/images/productos-veganos.jpg'
import '../../styles/product-card.css'

import { Col } from 'reactstrap'

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4'>
      <div className='product__item p-4'>
      <div className='product__img'>
        <motion.img whileTap={{scale:1.2}} src={productsVeganos} alt='' height='200'/>
      </div>
      <div className='p-2 product__info'>
        <h3 className='product__name'>Productos veganos</h3>
        <span className='d-block'>Alimento vegano</span>
      </div>
    </div>
    </Col>
  )
}

export default ProductCard