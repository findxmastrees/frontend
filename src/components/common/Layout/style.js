import styled from 'styled-components'

export const Container = styled.div`
  width: min(420px, 100%);
  min-height: 100vh;
  margin-left: 50%;
  background-color: #fff;

  @media screen and (max-width: 1100px) {
    margin: 0 auto;
  }
`
