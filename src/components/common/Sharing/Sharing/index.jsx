import React, { useState } from 'react'
import { SharingModal } from '../SharingModal'
import ToastAlert from '../../../common/ToastAlert/index'
import * as S from './style'
import { SharingIcon } from '../../../Icons'

// const SHARING_INFO = {
//   title: '어쩔트리',
//   text: '어쩔트리로 트리를 공유해보세요!',
//   baseUrl: 'https://63860b066ed8c30db7349d3b--comforting-moonbeam-e55e7d.netlify.app/',
// }

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
