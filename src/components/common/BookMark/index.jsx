import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './style'
import { ReactComponent as BookMarkerIcon } from '../../../assets/icons/bookmarker.svg'

export const BookmarkButton = () => {
  const navigate = useNavigate()

  const { email } = useSelector((store) => store.auth)
  const [IsBookMarking, setBookMarking] = useState(false)

  return (
    <>
      <S.Bookmark onClick={() => (email ? setBookMarking(!IsBookMarking) : navigate('/sign-in'))}>
        {<BookMarkerIcon fill={IsBookMarking ? 'yellow' : 'white'} />}
      </S.Bookmark>
      <S.IconTitle>저장됨</S.IconTitle>
    </>
  )
}
