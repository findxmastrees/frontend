import React from 'react'
import * as S from './style'
import { ReactComponent as Logo } from '../../assets/icons/landing_logo.svg'
import landingTree from '../../assets/img/loading-tree.gif'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
  const navigate = useNavigate()
  const home = () => {
    navigate('/')
  }
  return (
    <div>
      <S.Wrapper>
        <div>
          <img src={landingTree} width='204px' height='204px' />
        </div>
        <div>
          <Logo />
        </div>
        <div>트리가 없는데 어쩌란 말이냐...</div>
        <div>어쩔트리로 트리를 찾아보고</div>
        <div>모두에게 트리를 공유해보세요!</div>
        <button onClick={home}>시작하기</button>
        <div>copyright © 팀 테트리스(TT)</div>
      </S.Wrapper>
    </div>
  )
}
