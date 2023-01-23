import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStarTreeMutation } from '../../../store/api/treeApiSlice'
import * as S from './style'
import { BookmarkerIcon } from '../../Icons'

export const BookMark = ({ tree_id, responsive }) => {
  const navigate = useNavigate()

  const { uid } = useSelector((store) => store.auth)
  const [IsBookMarking, setIsBookMarking] = useState(false)

  const [updateStarTree] = useStarTreeMutation()

  const handleStarTree = () => {
    setIsBookMarking(!IsBookMarking)
    updateStarTree({ tree_id })
  }

  return (
    <>
      {responsive ? (
        <>
          <S.SmallBookmark onClick={() => (uid ? handleStarTree() : navigate('/sign-in'))}>
            저장하기
          </S.SmallBookmark>
        </>
      ) : (
        <>
          <S.Bookmark onClick={() => (uid ? handleStarTree() : navigate('/sign-in'))}>
            {<BookmarkerIcon fill={IsBookMarking === 1 ? 'yellow' : 'white'} />}
          </S.Bookmark>
          <S.IconTitle>{IsBookMarking ? '저장됨' : '저장'}</S.IconTitle>
        </>
      )}
    </>
  )
}
