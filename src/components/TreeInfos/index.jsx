import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/Tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

export const TreeInfos = () => {
  const navigate = useNavigate()

  const goToTreePage = () => {
    navigate('/tree')
  }

  return (
    <>
      <S.Container>
        <TreeNames goToTreePage={goToTreePage} />
        <S.ImgSection goToTreePage={goToTreePage}>
          {/* {.map((image) => (
            <TreeImages>image={image}</TreeImages>
          ))} */}
          <S.ImgItems>
            {arr.map((_, i) => (
              <ReviewImg key={i} />
            ))}
          </S.ImgItems>
        </S.ImgSection>
      </S.Container>
    </>
  )
}
