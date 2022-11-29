import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AddressCopy } from '../../../assets/icons/addressCopy.svg'

export const AddressModal = ({ address, lotNumber, setIsRoadName, setAdCopiedAlert }) => {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      return false
    }
  }

  return (
    <>
      <Container>
        <AdBox>
          <RoadNameBtn>도로명</RoadNameBtn>
          <RoadName>
            {address}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(
                  Object.values({ address })[0],
                  setIsRoadName(true),
                  setAdCopiedAlert(true),
                )
              }
            />
          </RoadName>
        </AdBox>
        <AdBox>
          <LotNumberBtn>지번</LotNumberBtn>
          {/* <LotNumber>{props.lotNumber}</LotNumber> */}
          <LotNumber>
            {lotNumber}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(
                  Object.values({ lotNumber })[0],
                  setIsRoadName(false),
                  setAdCopiedAlert(true),
                )
              }
            />
          </LotNumber>
        </AdBox>
      </Container>
    </>
  )
}

const Container = styled.article`
  position: absolute;
  top: 90px;
  left: 32px;
  width: 328.99px;
  height: 90px;
  background: #ffffff;
  border: 0.5px solid gray;
  padding: 10px;
  z-index: 200;
`

const AdBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
`
const RoadNameBtn = styled.button`
  height: 21px;
  width: 47px;
  line-height: 0;
  color: gray;
  font-size: 8px;
  padding: 3px;
  margin-right: 7px;
  background: transparent;
  border: 1px solid gray;
`

const LotNumberBtn = styled.button`
  height: 21px;
  width: 29px;
  line-height: 0;
  padding: 2px;
  margin-right: 7px;
  color: gray;
  font-size: 8px;
  background: transparent;
  border: 1px solid gray;
`

const RoadName = styled.div``

const LotNumber = styled.div``

const AddressIcon = styled(AddressCopy)`
  cursor: pointer;
`
export default AddressModal
