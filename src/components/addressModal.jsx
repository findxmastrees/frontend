import React from 'react'
import styled from 'styled-components'

const AddressModal = (props) => {
  return (
    <>
      <Container>
        <RoadName>{props.roadName}</RoadName>
        <LotNumber>{props.lotNumber}</LotNumber>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  bottom: 190px;
  left: 51px;
  width: 351px;
  height: 50px;
  background: #ffffff;
  border: 0.5px solid gray;
  z-index: 1000;
`

const RoadName = styled.div``

const LotNumber = styled.div``

export default AddressModal
