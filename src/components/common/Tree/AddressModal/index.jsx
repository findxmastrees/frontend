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
          <S.RoadNameBtn>도로명</S.RoadNameBtn>
          {address}
          <S.IconBox onClick={() => handleCopyClipBoard(address)}>
            <AddressCopyIcon />
          </S.IconBox>
        </S.AdBox>
        <S.AdBox>
          <S.LotNumberBtn>지번</S.LotNumberBtn>
          {lotNumber}
          <S.IconBox onClick={() => handleCopyClipBoard(lotNumber)}>
            <AddressCopyIcon />
          </S.IconBox>
        </S.AdBox>
      </S.Container>

      {adCopiedAlert && <ToastAlert setAdCopiedAlert={setAdCopiedAlert} />}
    </>
  )
}
