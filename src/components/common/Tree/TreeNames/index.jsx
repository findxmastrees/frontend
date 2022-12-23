import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddressModal } from '../AddressModal/index'
import { Sharing } from '../../Sharing/Sharing'
import { Bookmark } from '../../BookMark'
import * as S from './style'
import { ArrowBottomIcon, ArrowUpIcon, Sharing_smallIcon } from '../../../Icons'

export const TreeNames = ({ tree_id, tree_name, distance, tree_addr, tree_load_addr }) => {
  const navigate = useNavigate()

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
              <Bookmark tree_id={tree_id} />
            </S.BookmarkBox>
            <S.SharingBox>
              <Sharing IsOpenShareModal={IsOpenShareModal} setOpenShareModal={setOpenShareModal} />
            </S.SharingBox>
          </S.IconBox>
          <S.SmallDropBtn onClick={() => setIsOpenSmallStarModal(true)}>
            <Sharing_smallIcon />
            {IsOpenSmallStarModal && (
              <S.SmallModalBox>
                <Bookmark responsive>저장하기</Bookmark>
                <Sharing responsive>공유하기</Sharing>
              </S.SmallModalBox>
            )}
          </S.SmallDropBtn>
        </S.ClickBox>
        <S.AddressBox>
          {distance && <S.Location>{parseInt(distance)}m</S.Location>}
          <S.Address>{tree_addr}</S.Address>
          <S.AddressArrow onClick={onAdModal}>
            {IsArrowBtn ? <ArrowUpIcon /> : <ArrowBottomIcon />}
          </S.AddressArrow>
          {IsOpenAdModal && <AddressModal address={tree_addr} lotNumber={tree_load_addr} />}
        </S.AddressBox>
      </div>
      {IsOpenSmallStarModal && <S.Overlay onClick={() => setIsOpenSmallStarModal(false)} />}
      {IsOpenAdModal && <S.Overlay onClick={onAdModal} />}
      {IsOpenShareModal && <S.Overlay onClick={() => setOpenShareModal(false)} />}
    </>
  )
}
