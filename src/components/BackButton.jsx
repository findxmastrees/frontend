import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../assets/icons/back_icon.svg'

export const BackButton = () => {
  return (
    <Button>
      <Icon />
    </Button>
  )
}

const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`

const Icon = styled(BackIcon)`
  height: 100%;
`
