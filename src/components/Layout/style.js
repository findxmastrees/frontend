import styled from 'styled-components'

export const Container = styled.div`
  max-width: 420px;
  min-height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
`
export const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 10;
`
