import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const ReviewBtn = styled.button`
  display: block;
  width: calc(100% - 47px);
  margin: 0 auto;
  padding: 11px 0;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  background-color: #1f7158;
  border-radius: 10px;
  border: none;
`

export const BtnWrapper = styled.div`
  width: ${(props) => (props.write ? '372px' : 'inherit')};
  position: ${(props) => (props.write ? 'initial' : 'fixed')};
  bottom: 0;
  padding: 24px 0;
  text-align: center;
  background: ${(props) => (props.write ? 'transparent' : '#fff')};
`
