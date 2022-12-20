import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStarTreeMutation } from '../../../store/api/treeApiSlice'
import * as S from './style'
import { ReactComponent as BookMarkerIcon } from '../../../assets/icons/bookmarker.svg'

export const BookmarkButton = ({ tree_id }) => {
  const navigate = useNavigate()

  const { uid } = useSelector((store) => store.auth)
  const [IsBookMarking, setBookMarking] = useState(false)
  const [updateStarTree] = useStarTreeMutation()

  const handleStarTree = () => {
    setBookMarking(true)
    updateStarTree({ tree_id, user_id: uid })
  }

  return (
    <>
      <S.Bookmark onClick={() => (uid ? handleStarTree() : navigate('/sign-in'))}>
        {<BookMarkerIcon fill={IsBookMarking ? 'yellow' : 'white'} />}
      </S.Bookmark>
      <S.IconTitle>저장</S.IconTitle>
    </>
  )
}
