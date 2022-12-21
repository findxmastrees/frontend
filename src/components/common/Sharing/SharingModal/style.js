import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  width: 280px;
  height: 80px;
  right: 10px;
  margin-top: 45px;
  background: #ffffff;
  opacity: 90%;
  z-index: 100;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  cursor: pointer;
`

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  color: #454040;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #e1e1e1;
`

export const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: #c94c4c;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background: transparent;
`
