import styled from 'styled-components'

export const Container = styled.div`
  max-width: 420px;
  min-height: 100vh;
  position: relative;
  left: 65%;
  transform: translateX(-50%);
  background-color: #fff;

  @media screen and (max-width: 1100px) {
    left: 50%;
    transform: translateX(-50%);
  }
`
