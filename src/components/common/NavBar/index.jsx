/* eslint-disable */
import React from 'react'
import * as S from './style'
import { useLocation } from 'react-router-dom'
//스케치아이콘
import { ReactComponent as Home } from '../../../assets/icons/nav_home00.svg'
import { ReactComponent as Register } from '../../../assets/icons/nav_register00.svg'
import { ReactComponent as List } from '../../../assets/icons/nav_treelist00.svg'
import { ReactComponent as My } from '../../../assets/icons/nav_my00.svg'
//색상아이콘
import { ReactComponent as Home1 } from '../../../assets/icons/nav_home01.svg'
import { ReactComponent as Register1 } from '../../../assets/icons/nav_register01.svg'
import { ReactComponent as List1 } from '../../../assets/icons/nav_treelist01.svg'
import { ReactComponent as My1 } from '../../../assets/icons/nav_my01.svg'

export const NavBar = () => {
  const location = useLocation().pathname
  const betaAlert = () => {
    alert('트리에 불을 밝히고 있어요! 불이 켜지길 기다려주세요!')
  }

  return (
    <S.Wrapper>
      <S.Menu>
        <S.MenuWrap to='/'>
          <div>{location === '/' ? <Home1 /> : <Home />}</div>
          <li>홈</li>
        </S.MenuWrap>
        <S.MenuWrap to='/map'>
          <div>{location === '/map' ? <Register1 /> : <Register />}</div>
          <li>트리 등록하기</li>
        </S.MenuWrap>
        <S.MenuWrap>
          {/* 저장한 트리 페이지 라우터가 없어서 임시로 마이페이지로 링크합니다
          <div>{location === '/my' ? <List1 /> : <List />}</div> */}
          <div>
            <List onClick={betaAlert} />
          </div>
          <li>저장한 트리</li>
        </S.MenuWrap>
        <S.MenuWrap to='/my'>
          <div>{location === '/my' ? <My1 /> : <My />}</div>
          <li>MY</li>
        </S.MenuWrap>
      </S.Menu>
    </S.Wrapper>
  )
}
