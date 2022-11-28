import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as S from './style'

export const SharingModal = ({ setIsClicked, currentUrl }) => {
  const url = `${currentUrl}${'어쩌고저쩌고'}`

  return (
    <S.Container>
      <S.Btn id='kakao-link-btn'>카카오톡으로 공유하기</S.Btn>
      <CopyToClipboard text={url}>
        <S.Btn>URL 복사하기</S.Btn>
      </CopyToClipboard>
      <S.CancelBtn onClick={() => setIsClicked(false)}>취소</S.CancelBtn>
    </S.Container>
  )
}
