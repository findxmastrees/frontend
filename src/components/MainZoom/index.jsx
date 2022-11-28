import React from 'react'
import * as S from './style'
import { ReactComponent as ZoomIn } from '../../assets/icons/zoomin.svg'
import { ReactComponent as ZoomOut } from '../../assets/icons/zoomout.svg'

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
        <ZoomIn />
      </S.Button>
      <S.Button onClick={zoomOut} top={false}>
        <ZoomOut />
      </S.Button>
    </S.ButtonWrapper>
  )
}
