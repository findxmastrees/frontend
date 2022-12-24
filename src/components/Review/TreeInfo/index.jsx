import React from 'react'
import * as S from './style'
import { PencilIcon } from '../../Icons'

export const TreeInfo = ({ able_days, pet_yn, end_date, etc, outdoor_yn, start_date }) => {
  return (
    <S.Container>
      <S.TitleBox>
        <S.InfoTitle>트리 정보</S.InfoTitle>
        <S.InfoEditLink href='www.naver.com'>
          <PencilIcon /> 정보 수정 제안하기
        </S.InfoEditLink>
      </S.TitleBox>
      <S.InfoList>
        <S.InfoItem>
          <S.ItemTitle>공간</S.ItemTitle>
          <span>{outdoor_yn === 'Y' ? '야외' : '실내'}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.ItemTitle>영업일</S.ItemTitle>
          <span>{able_days?.split(',')?.join(', ')}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.ItemTitle>전시 기간</S.ItemTitle>
          <span>
            {start_date} ~ {end_date}
          </span>
        </S.InfoItem>
        <S.InfoItem>
          <S.ItemTitle>반려동물</S.ItemTitle>
          <span>{pet_yn === 'Y' ? '동반 가능' : '동반 불가능'}</span>
        </S.InfoItem>
        <S.InfoItem>
          <S.ItemTitle>참고정보</S.ItemTitle>
          <span>{etc}</span>
        </S.InfoItem>
      </S.InfoList>
    </S.Container>
  )
}
