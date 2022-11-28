import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  width: 421px;
  height: 852px;
  border: 1px solid black;
`

export const InfoSection = styled.section`
  position: absolute;
  width: 90%;
  height: auto;
  z-index: 2;
  overflow: hidden;
  bottom: 290px;
  left: 51%;
  transform: translate(-50%, -80%);
`
