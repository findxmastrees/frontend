import React from 'react'
import * as S from './style'
import { useSelector } from 'react-redux'
// import { NavBar } from '../../components/common/NavBar'

export const MyPage = () => {
  const { email, displayName } = useSelector((store) => store.auth)

  return (
    <div>
      <S.Wrapper>
        <S.User>
          <div></div>
          <div></div>
          <div></div>
          <div>{displayName}</div>
          <div>{email}</div>
          <div></div>
          <S.MyWrapper>
            <S.MyWrap>
              <div>10</div>
              <div>등록한 트리</div>
              <div></div>
            </S.MyWrap>
            <S.MyWrap>
              <div>3</div>
              <div>저장한 트리</div>
              <div></div>
            </S.MyWrap>
            <S.MyWrap>
              <div>5</div>
              <div>내가 쓴 후기</div>
              <div></div>
            </S.MyWrap>
          </S.MyWrapper>
        </S.User>
        <S.Menu>
          <li>문의하기 / 신고하기</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>로그아웃</li>
          <li>탈퇴하기</li>
        </S.Menu>
      </S.Wrapper>
      {/* <NavBar /> */}
    </div>
  )
}
