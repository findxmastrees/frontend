import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ImgSection = styled.section`
  width: 100%;
  text-align: center;
`

export const ImgItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 14px 24px;

  @media screen and (max-width: 280px){
    grid-template-columns: repeat(2, 1fr);  
  }
`

export const MoreLink = styled(Link)`
  display: block;
  width: calc(100% - 48px);
  margin: 0 auto;
  margin-bottom: 16px;
  padding: 11px 0;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000;
  cursor: pointer;
`
