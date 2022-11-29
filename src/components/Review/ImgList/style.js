import styled from 'styled-components'

export const ImgSection = styled.section`
  width: 100%;
  text-align: center;
`

export const ImgItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 14px 24px;
`

export const MoreButton = styled.button`
  width: calc(100% - 48px);
  padding: 11px 0;
  margin-bottom: 16px;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
`
