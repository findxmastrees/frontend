import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as S from './style'

export const SharingModal = ({ setUrlCopiedAlert, setOpenShareModal }) => {
  const currentUrl = window.location.href

  return (
    <S.Container>
      <CopyToClipboard text={currentUrl}>
        <S.Btn onClick={() => setUrlCopiedAlert(true)}>URL 복사하기</S.Btn>
      </CopyToClipboard>
      <S.CancelBtn onClick={() => setOpenShareModal(false)}>취소</S.CancelBtn>
    </S.Container>
  )
}
