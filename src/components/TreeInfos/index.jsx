import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './style'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/Tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

export const TreeInfos = () => {
  const { tree_id, tree_img_limit3 } = useSelector((store) => store.tree.tree)

  return (
    <>
      <S.Container>
        <TreeNames />
        <S.ImgSection>
          <S.ImgItems>
            {tree_img_limit3 ? (
              <>
                {arr.map((_, i) => (
                  <ReviewImg key={i} tree_id={tree_id} reviewImg={tree_img_limit3} />
                ))}
              </>
            ) : (
              <ReviewImg tree_id={tree_id} reviewImg={tree_img_limit3} />
            )}
          </S.ImgItems>
        </S.ImgSection>
      </S.Container>
    </>
  )
}
