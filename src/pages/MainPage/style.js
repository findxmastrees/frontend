import styled from 'styled-components'

export const Container = styled.main`
  max-width: 420px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 24px 14px 0;
  position: relative;
  @media screen and (max-width: 390px) {
    height: calc(100dvh - 100px);
  }
`

export const TopWrapper = styled.div`
  width: calc(100% - 28px);
  margin: 0 auto;
  position: absolute;
  z-index: 2;
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