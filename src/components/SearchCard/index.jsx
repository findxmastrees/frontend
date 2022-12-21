import React, { useState } from 'react'
import * as S from './style'
import DefaultImage from '../../assets/img/reviewImg.png'
import { SearchTreeIcon } from '../Icons'
import { Bookmark } from '../common/BookMark'
import { Sharing } from '../common/Sharing/Sharing'
import { Link } from 'react-router-dom'

export const SearchCard = ({ item }) => {
  const [IsOpenShareModal, setOpenShareModal] = useState(false)
  const [IsOpenSmallStarModal, setIsOpenSmallStarModal] = useState(false)

  return (
    <S.Container>
      <S.Image src={item.tree_img_limit3 ? item.tree_img_limit3[0] : DefaultImage} />
      <S.InfoWrapper>
        <S.TextWrapper>
          <SearchTreeIcon />
          <Link to={`/tree/${item.tree_id}`}>
            <div>
              <S.TreeName>{item.tree_name}</S.TreeName>
              <S.TreeAddress>{item.tree_addr}</S.TreeAddress>
            </div>
          </Link>
        </S.TextWrapper>
        <S.IconBox>
          <S.BookmarkBox>
            <Bookmark tree_id={item.tree_id} />
          </S.BookmarkBox>
          <S.SharingBox>
            <Sharing IsOpenShareModal={IsOpenShareModal} setOpenShareModal={setOpenShareModal} />
          </S.SharingBox>
        </S.IconBox>
        <S.SmallDropBtn onClick={() => setIsOpenSmallStarModal(true)}>
          {IsOpenSmallStarModal && (
            <S.SmallModalBox>
              <Bookmark responsive>저장하기</Bookmark>
              <Sharing responsive>공유하기</Sharing>
            </S.SmallModalBox>
          )}
        </S.SmallDropBtn>
      </S.InfoWrapper>
    </S.Container>
  )
}
