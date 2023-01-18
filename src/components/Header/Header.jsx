import React, {useRef,useEffect} from 'react'
import './header.css'

import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const nav__link = [
  {
    path:'home',
    display: 'Inicio'
  },
  {
    path: 'login',
    display: 'Login'
  }
]

const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
      stickyHeaderFunc()

      return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper'>
            <div className='nav__title'>
              <h1>Como sano S.A</h1>
            </div>

          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>
              {
                nav__link.map((item,index) => (
                  <li className='nav__item'>
                    <NavLink to={item.path} key={index} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='mobile__menu'>
            <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header