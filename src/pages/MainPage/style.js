import styled from 'styled-components'

export const Container = styled.main`
  max-width: 420px;
  width: 100%;
  height: 100vh;
  padding: 24px 14px 0;
  border: 1px solid black;
  position: relative;
`

export const InfoSection = styled.section`
  position: absolute;
  width: 90%;
  z-index: 2;
  overflow: hidden;
  bottom: 290px;
  left: 51%;
  transform: translate(-50%, -80%);
`
