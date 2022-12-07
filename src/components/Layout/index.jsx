import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../common/NavBar'
import { Container } from './style'

export const Layout = () => {
  return (
    <Container>
      <Outlet />
      <NavBar />
    </Container>
  )
}
