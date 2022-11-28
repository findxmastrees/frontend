import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AddressCopy } from '../../../assets/icons/addressCopy.svg'

const AddressModal = (props) => {
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
          {/* <RoadName>{props.roadName}</RoadName> */}
          <RoadName>
            서울 송파구 올림픽로43길 88 서울아산병원{' '}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(
                  '도로명주소 복사됨',
                  props.setIsRoadName(true),
                  props.setCopiedAlert(true),
                )
              }
            />
          </RoadName>
        </AdBox>
        <AdBox>
          <LotNumberBtn>지번</LotNumberBtn>
          {/* <LotNumber>{props.lotNumber}</LotNumber> */}
          <LotNumber>
            풍납2동 288-1 서울아산병원{' '}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(
                  '지번주소 복사됨',
                  props.setIsRoadName(false),
                  props.setCopiedAlert(true),
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
  bottom: 165px;
  left: 38px;
  width: 348px;
  height: 80px;
  background: #ffffff;
  border: 0.5px solid gray;
  padding: 10px;
  z-index: 100000;
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
