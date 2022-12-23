import styled from 'styled-components'

export const Container = styled.main`
  width: inherit;
  height: calc(100vh - 100px);
  padding: 24px 14px 0;
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
