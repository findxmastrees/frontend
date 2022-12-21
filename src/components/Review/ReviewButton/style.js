import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ReviewLink = styled(Link)`
  display: block;
  width: calc(100% - 47px);
  margin: 0 auto;
  padding: 11px 0;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  background: #1F7158;
  border-radius: 10px;
`

export const BtnWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: inherit;
  padding: 24px 0;
  text-align: center;
  background-color: #fff;
`
