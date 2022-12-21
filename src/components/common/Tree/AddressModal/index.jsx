import { React, useState } from 'react'
import ToastAlert from '../../../common/ToastAlert/index'
import * as S from './style'
import { AddressCopyIcon } from '../../../Icons'

export const AddressModal = ({ address, lotNumber }) => {
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setAdCopiedAlert(true)
      return Object.values({ text })[0]
    } catch (err) {
      return false
    }
  }

  const [adCopiedAlert, setAdCopiedAlert] = useState(false)

  return (
    <>
      <S.Container>
        <S.AdBox>
          <S.RoadName>도로명</S.RoadName>
          <S.Address>
            {address}
            <S.IconBox onClick={() => handleCopyClipBoard(address)}>
              <AddressCopyIcon />
            </S.IconBox>
          </S.Address>
        </S.AdBox>
        <S.AdBox>
          <S.LotNumber>지번</S.LotNumber>
          <S.Address>
            {lotNumber}
            <S.IconBox onClick={() => handleCopyClipBoard(lotNumber)}>
              <AddressCopyIcon />
            </S.IconBox>
          </S.Address>
        </S.AdBox>
      </S.Container>

      {adCopiedAlert && <ToastAlert setAdCopiedAlert={setAdCopiedAlert} />}
    </>
  )
}
