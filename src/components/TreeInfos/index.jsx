import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './style'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

export const TreeInfos = () => {
  const { tree_id, tree_name, distance, tree_addr, tree_detail_addr, tree_img_limit3 } =
    useSelector((store) => store.tree.tree)

  return (
    <>
      <S.Container>
        <TreeNames
          tree_id={tree_id}
          tree_name={tree_name}
          distance={distance}
          tree_addr={tree_addr}
          tree_detail_addr={tree_detail_addr}
        />
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
