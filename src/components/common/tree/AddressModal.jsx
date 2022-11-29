/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AddressCopy } from '../../../assets/icons/addressCopy.svg'
// import ToastAlert from '../ToastAlert'

export const AddressModal = ({ address, lotNumber }) => {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      return false
    }
  }

  // toast alert
  // const [whichAd, setWhichAd] = useState('')
  // const [adCopiedAlert, setAdCopiedAlert] = useState(false)

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
                  // setWhichAd('RoadName'),
                  // setAdCopiedAlert(true),
                )
              }
            />
          </RoadName>
        </AdBox>
        <AdBox>
          <LotNumberBtn>지번</LotNumberBtn>
          <LotNumber>
            {lotNumber}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(
                  Object.values({ lotNumber })[0],
                  // setWhichAd('lotNumber'),
                  // setAdCopiedAlert(true),
                )
              }
            />
          </LotNumber>
        </AdBox>
      </Container>
      {/* {adCopiedAlert && (
        <ToastAlert adCopiedAlert={adCopiedAlert} setWhichAd={setWhichAd} whichAd={whichAd} />
      )} */}
    </>
  )
}

const Container = styled.article`
  position: absolute;
  width: 330px;
  height: 90px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  padding: 10px;
  z-index: 200;
  font-size: 12px;
  line-height: 20px;
`

const AdBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
`
const RoadNameBtn = styled.button`
  height: 21px;
  width: 47px;
  line-height: 0;
  color: gray;
  font-size: 12px;
  padding: 3px;
  margin-right: 7px;
  background: transparent;
  border: 1px solid #e1e1e1;
`

const LotNumberBtn = styled.button`
  height: 21px;
  width: 29px;
  line-height: 0;
  padding: 2px;
  margin-right: 7px;
  color: gray;
  font-size: 12px;
  background: transparent;
  border: 1px solid #e1e1e1;
`

const AddressIcon = styled(AddressCopy)`
  cursor: pointer;
  margin-left: 3px;
`
export default AddressModal
