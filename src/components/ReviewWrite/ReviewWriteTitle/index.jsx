import React from 'react'
import { useGetTreeQuery } from '../../../store/api/treeApiSlice'
import * as S from './style'

export const ReviewWriteTitle = ({ tree_id }) => {
  const { data: tree } = useGetTreeQuery({ tree_id })

  return (
    <>
      <S.TreeTitle>
        <S.MainAddress>{tree?.tree_name}</S.MainAddress>
        <S.DetailAddess>{tree?.tree_addr}</S.DetailAddess>
      </S.TreeTitle>
    </>
  )
}
