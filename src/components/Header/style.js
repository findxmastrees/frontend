import styled from 'styled-components'

export const Container = styled.header`
  width: inherit;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #b9b9b9;
  background-color: #fff;
  z-index: 100;
`

export const HeaderTitle = styled.h1`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  text-indent: -9999px;
  color: transparent;
`
