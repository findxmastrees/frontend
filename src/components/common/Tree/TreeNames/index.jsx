import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddressModal } from '../AddressModal/index'
import { SharingButton } from '../../Sharing/SharingButton'
import { BookmarkButton } from '../../BookMark'
import * as S from './style'
import { ArrowBottomIcon, ArrowUpIcon } from '../../../Icons'

export const TreeNames = () => {
  const navigate = useNavigate()

  const { tree_id, tree_name, distance, tree_addr, tree_detail_addr } = useSelector(
    (store) => store.tree.tree,
  )

  const [IsArrowBtn, setArrowBtn] = useState(false)
  const [IsOpenShareModal, setOpenShareModal] = useState(false)
  const [IsOpenAdModal, setOpenAdModal] = useState(false)
  const [IsOpenSmallStarModal, setIsOpenSmallStarModal] = useState(false)

  const onAdModal = () => {
    setArrowBtn(!IsArrowBtn)
    setOpenAdModal(!IsOpenAdModal)
  }

  return (
    <>
      <div>
        <S.ClickBox>
          <S.Title onClick={() => navigate(`/tree/${tree_id}`)}>{tree_name}</S.Title>
          <S.IconBox>
            <S.BookmarkBox>
              <BookmarkButton tree_id={tree_id} />
            </S.BookmarkBox>
            <S.SharingBox>
              <SharingButton
                IsOpenShareModal={IsOpenShareModal}
                setOpenShareModal={setOpenShareModal}
              />
            </S.SharingBox>
          </S.IconBox>
          <S.SmallDropBtn onClick={() => setIsOpenSmallStarModal(true)}>
            {IsOpenSmallStarModal && (
              <S.SmallModalBox>
                <BookmarkButton responsive>저장하기</BookmarkButton>
                <SharingButton responsive>공유하기</SharingButton>
              </S.SmallModalBox>
            )}
          </S.SmallDropBtn>
        </S.ClickBox>
        <S.AddressBox>
          {distance && <S.Location>{distance}m</S.Location>}
          <S.Address>{tree_addr}</S.Address>
          <S.AddressArrow onClick={onAdModal}>
            {IsArrowBtn ? <ArrowUpIcon /> : <ArrowBottomIcon />}
          </S.AddressArrow>
          {IsOpenAdModal && <AddressModal address={tree_addr} lotNumber={tree_detail_addr} />}
        </S.AddressBox>
      </div>
      {IsOpenSmallStarModal && <S.Overlay onClick={() => setIsOpenSmallStarModal(false)} />}
      {IsOpenAdModal && <S.Overlay onClick={onAdModal} />}
      {IsOpenShareModal && <S.Overlay onClick={() => setOpenShareModal(false)} />}
    </>
  )
}
