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
  top: 100px;
  left: 55px;
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 1px solid black;
  z-index: 1000;
`

const RoadName = styled.div``

const LotNumber = styled.div``

export default AddressModal
