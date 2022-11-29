import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  width: 280px;
  height: 80px;
  bottom: 40px;
  right: 50px;
  background: black;
  opacity: 90%;
  z-index: 555;
  border-radius: 5px;
`

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  color: #c1bdbd;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #ddd;

  cursor: pointer;
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
