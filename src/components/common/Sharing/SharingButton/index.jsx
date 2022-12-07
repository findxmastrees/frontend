import React, { useState } from 'react'
import { SharingModal } from '../SharingModal'
import ToastAlert from '../../../common/ToastAlert/index'
import * as S from './style'
import { ReactComponent as SharingIcon } from '../../../../assets/icons/sharing.svg'

export const SharingButton = ({ IsOpenShareModal, setOpenShareModal }) => {
  const [urlCopiedAlert, setUrlCopiedAlert] = useState(false)

  return (
    <>
      <S.Share onClick={() => setOpenShareModal(true)}>
        <SharingIcon />
      </S.Share>
      {IsOpenShareModal && (
        <SharingModal setOpenShareModal={setOpenShareModal} setUrlCopiedAlert={setUrlCopiedAlert} />
      )}
      <S.IconTitle>공유</S.IconTitle>

      {urlCopiedAlert && (
        <ToastAlert urlCopiedAlert={urlCopiedAlert} setUrlCopiedAlert={setUrlCopiedAlert} />
      )}
    </>
  )
}
