/* eslint-disable default-case */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './style'

export const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
