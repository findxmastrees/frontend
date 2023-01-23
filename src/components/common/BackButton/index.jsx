import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../../../assets/icons/back_icon.svg'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)}>
      <BackIcon />
    </Button>
  )
}

const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: #fff;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 27px;
  left: 25px;
`
