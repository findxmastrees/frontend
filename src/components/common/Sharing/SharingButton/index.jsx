import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SharingModal } from '../SharingModal'
import ToastAlert from '../../../common/ToastAlert/index'
import * as S from './style'
import { ReactComponent as SharingIcon } from '../../../../assets/icons/sharing.svg'
import { showShareModal } from '../../../../store/slices/modalSlice'

export const SharingButton = ({ shareModal }) => {
  const dispatch = useDispatch()

  const onModal = () => {
    if (!shareModal) {
      dispatch(showShareModal())
    } else {
      dispatch(showShareModal())
    }
  }

  useEffect(() => {}, [shareModal])

  const [urlCopiedAlert, setUrlCopiedAlert] = useState(false)
  console.log(urlCopiedAlert)
  return (
    <>
      <S.Share onClick={onModal}>
        <SharingIcon />
      </S.Share>
      {shareModal && <SharingModal setUrlCopiedAlert={setUrlCopiedAlert} />}
      <S.IconTitle>공유</S.IconTitle>

      {urlCopiedAlert && (
        <ToastAlert urlCopiedAlert={urlCopiedAlert} setUrlCopiedAlert={setUrlCopiedAlert} />
      )}
    </>
  )
}
