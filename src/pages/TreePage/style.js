import styled from 'styled-components'

export const MainContainer = styled.main`
  width: inherit;
  position: relative;
  padding: 76px 0 100px;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`
