import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../../assets/icons/location_icon.svg'

export const LocationButton = () => {
  return (
    <Button>
      <BackIcon />
    </Button>
  )
}

const Button = styled.button`
  width: 38px;
  height: 38px;
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
