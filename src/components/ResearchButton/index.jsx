import React from 'react'
import * as S from './style'

export const ResearchButton = ({ isShown, setIsShown, handleResearch }) => {
  return (
    <S.Button onClick={handleResearch} isShown={isShown}>
      현재 지도에서 트리 재검색
    </S.Button>
  )
}
