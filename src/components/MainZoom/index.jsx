import React from 'react'
import * as S from './style'

export const ZoomButton = ({ map }) => {
  const zoomIn = () => {
    map.setLevel(map.getLevel() - 1)
  }

  const zoomOut = () => {
    map.setLevel(map.getLevel() + 1)
  }

  return (
    <S.ButtonWrapper>
      <S.Button onClick={zoomIn} top={true}>
        +
      </S.Button>
      <S.Button onClick={zoomOut} top={false}>
        -
      </S.Button>
    </S.ButtonWrapper>
  )
}
