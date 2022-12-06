import styled from 'styled-components'

export const Container = styled.article`
  position: relative;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgb(0 0 0 / 5%);
  border-radius: 10px;
  z-index: 3;
`

export const ImgSection = styled.section`
  width: 100%;
  text-align: center;
`

export const ImgItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 14px 24px;
  padding-top: 0px;
  cursor: pointer;
`
