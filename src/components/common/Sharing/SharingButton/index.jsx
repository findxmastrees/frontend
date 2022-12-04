import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SharingModal } from '../SharingModal'
import * as S from './style'
import { ReactComponent as SharingIcon } from '../../../../assets/icons/sharing.svg'
import { showShareModal } from '../../../../store/slices/modalSlice'

export const SharingButton = () => {
  const dispatch = useDispatch()
  const shareModal = useSelector((state) => state.modal.shareShow)

  const onModal = () => {
    if (!shareModal) {
      dispatch(showShareModal())
    } else {
      dispatch(showShareModal())
    }
  }

  useEffect(() => {}, [shareModal])

  return (
    <>
      <S.Share onClick={onModal}>
        <SharingIcon />
      </S.Share>
      {shareModal && <SharingModal />}
      <S.IconTitle>공유</S.IconTitle>
    </>
  )
}
