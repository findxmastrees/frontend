import React, { useState } from 'react'
import { SharingModal } from '../SharingModal'
import ToastAlert from '../../../common/ToastAlert/index'
import * as S from './style'
import { SharingIcon } from '../../../Icons'

export const SharingButton = ({ IsOpenShareModal, setOpenShareModal, responsive }) => {
  const [urlCopiedAlert, setUrlCopiedAlert] = useState(false)

  return (
    <>
      {responsive ? (
        <>
          <S.SmallShare>공유하기</S.SmallShare>
        </>
      ) : (
        <>
          <S.Share onClick={() => setOpenShareModal(true)}>
            <SharingIcon />
          </S.Share>
          {IsOpenShareModal && (
            <SharingModal
              setOpenShareModal={setOpenShareModal}
              setUrlCopiedAlert={setUrlCopiedAlert}
            />
          )}
          <S.IconTitle>공유</S.IconTitle>

          {urlCopiedAlert && (
            <ToastAlert urlCopiedAlert={urlCopiedAlert} setUrlCopiedAlert={setUrlCopiedAlert} />
          )}
        </>
      )}
    </>
  )
}
