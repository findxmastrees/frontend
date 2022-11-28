import styled from 'styled-components'

export const Container = styled.section`
  position: fixed;
  width: 392px;
  height: 150px;
  bottom: 10px;
  right: 14px;
  background: #fdfbfb;
  opacity: 90%;
  z-index: 2;
  border-radius: 5px;
`

export const Btn = styled.button`
  width: 100%;
  height: 50px;
  color: #3d3a3a;
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
