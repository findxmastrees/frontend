import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  display: inline-block;
  width: 120px;
  height: 55px;
  right: -2px;
  margin-top: 45px;
  background: #ffffff;
  z-index: 100;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  cursor: pointer;
`
export const Modal = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 7px 10px;
`
export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const BtnTitle = styled.span`
  color: #000000;
  text-align: center;
  font-size: 6px;
  font-weight: 300;
  margin-top: 5px;
`
