import styled from 'styled-components'

export const Container = styled.main`
  width: 421px;
  height: 852px;
  padding: 24px 14px 14px 0;
  border: 1px solid black;
  position: relative;
`

export const InfoSection = styled.section`
  position: absolute;
  width: 90%;
  height: auto;
  z-index: 2;
  overflow: hidden;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -80%);
`
