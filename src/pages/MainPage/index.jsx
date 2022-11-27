import React from 'react'
import styled from 'styled-components'
import TreeInfos from '../../components/treeInfos'

export const MainPage = () => {
  return (
    <>
      <Container>
        <TreeInfos />
      </Container>
    </>
  )
}

const Container = styled.main`
  width: 421px;
  height: 852px;
  padding: 24px 14px 14px 0;
  border: 1px solid black;
`
