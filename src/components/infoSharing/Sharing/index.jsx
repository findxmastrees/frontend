import React, { useState } from 'react'
import { SharingModal, ToastAlert } from '../../../components'
import * as S from './style'
import { SharingIcon } from '../../Icons'

export const Sharing = ({ IsOpenShareModal, setOpenShareModal, responsive }) => {
  const [urlCopiedAlert, setUrlCopiedAlert] = useState(false)

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     await navigator.share(SHARING_INFO)
  //   } else {
  //     setOpenShareModal(true)
  //   }
  // }

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
