import React from 'react'
import { Containter, Title, Total } from './style'

export const ReviewTitle = ({ title, total }) => {
  return (
    <Containter>
      <Title>{title}</Title>
      <Total>{total}</Total>
    </Containter>
  )
}
