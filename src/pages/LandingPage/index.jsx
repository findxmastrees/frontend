/* eslint-disable*/
import React, { useState } from 'react'
import * as S from './style'
import { ReactComponent as Logo } from '../../assets/icons/tree_logo.svg'
import landingTree from '../../assets/img/tree-animation.gif'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
  const [hover, setHover] = useState(0)
  const hoverStyle = { color: '#ffe16f', border: '1px solid #ffef16f' }
  const navigate = useNavigate()
  const home = () => {
    navigate('/home')
  }
  return (
    <div>
      <S.Wrapper>
        <div>
          <Logo />
        </div>
        <div>
          <div>트리가 없는데 어쩌란 말이냐...</div>
          <div>어쩔트리로 트리를 찾아보고</div>
          <div>모두에게 트리를 공유해보세요!</div>
          <button onClick={home}>시작하기</button>
        </div>
        <div>
          <img src={landingTree} width='308px' height='392px' />
        </div>
        <div>copyright © 팀 테트리스(TT)</div>
      </S.Wrapper>
    </div>
  )
}
