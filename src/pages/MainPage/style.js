import styled from 'styled-components'

export const Container = styled.main`
  max-width: 420px;
  width: 100%;
  height: 100vh;
  padding: 24px 14px 0;
  position: relative;
`

export const InfoSection = styled.section`
  position: absolute;
  width: 90%;
  z-index: 2;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
`

export const ButtonWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`
