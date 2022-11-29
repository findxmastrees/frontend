import styled from 'styled-components'

export const MainContainer = styled.main`
  height: calc(100vh - 100px);
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`
