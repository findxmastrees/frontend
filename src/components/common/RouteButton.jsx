import React from 'react'
import styled from 'styled-components'
import GoogleLogo from '../../assets/icons/google_icon.svg'
export const RouteButton = ({ text }) => {
  return (
    <ButtonWrapper text={text}>
      {text === 'Google로 계속' && <Image src={GoogleLogo} />}
      {text}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  width: ${({ text }) => (text === '시작하기' ? '346px' : '320px')};
  height: ${({ text }) => (text === '시작하기' ? '52px' : '50px')};
  border-radius: 50px;
  border: none;
  background-color: ${({ text }) =>
    text === '시작하기' ? '#518d2f' : text === 'Google로 계속' ? '#fff' : '#f2f4f7'};
  color: ${({ text }) =>
    text === '시작하기' ? '#fff' : text === 'Google로 계속' ? '#000' : '#aeaeae'};
  font-size: ${({ text }) => (text === '시작하기' ? '20px' : '14px')};
  font-weight: ${({ text }) => (text === 'Google로 계속' ? '900' : '700')};
  cursor: pointer;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  left: 11px;
  top: calc(50% - 15px);
`
