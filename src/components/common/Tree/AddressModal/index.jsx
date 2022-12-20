import { React, useState } from 'react'
import styled from 'styled-components'
import ToastAlert from '../../../common/ToastAlert/index'
import { AddressCopyIcon } from '../../../Icons'

export const AddressModal = ({ address, lotNumber }) => {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      return false
    }
  }

  const [adCopiedAlert, setAdCopiedAlert] = useState(false)

  return (
    <>
      <Container>
        <AdBox>
          <RoadNameBtn>도로명</RoadNameBtn>
          <div>
            {address}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(Object.values({ address })[0], setAdCopiedAlert(true))
              }
            />
          </div>
        </AdBox>
        <AdBox>
          <LotNumberBtn>지번</LotNumberBtn>
          <div>
            {lotNumber}
            <AddressIcon
              onClick={() =>
                handleCopyClipBoard(Object.values({ lotNumber })[0], setAdCopiedAlert(true))
              }
            />
          </div>
        </AdBox>
      </Container>

      {adCopiedAlert && <ToastAlert setAdCopiedAlert={setAdCopiedAlert} />}
    </>
  )
}

const Container = styled.article`
  position: absolute;
  width: calc(100% - 22px);
  height: 90px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  padding: 10px;
  z-index: 100;
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
  cursor: initial;
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
  cursor: initial;
`

const AddressIcon = styled(AddressCopyIcon)`
  cursor: pointer;
  margin-left: 3px;
`

export default AddressModal
