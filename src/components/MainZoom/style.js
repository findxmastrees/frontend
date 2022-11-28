import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 2;
`
export const Button = styled.button`
  display: block;
  width: 38px;
  height: 38px;
  border: none;
  background-color: #fff;
  border-radius: ${({ top }) => (top ? '5px 5px 0 0 ' : '0 0 5px 5px')};
  ${({ top }) => top && `border-bottom: 1px solid #DEDEDE`}
`
