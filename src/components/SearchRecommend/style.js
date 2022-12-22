import styled from 'styled-components'

export const Container = styled.section`
  width: calc(100% - 50px);
  margin: 26px auto;
  overflow: hidden;
  position: relative;
`

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  & strong {
    font-weight: 800;
  }

  &::after {
    content: '';
    width: min(262px, 100%);
    height: 1px;
    background-color: black;
    margin-left: 20px;
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 300;
  display: inline-block;

  & strong {
    color: #1f7158;
  }

  & span {
    font-weight: 800;
  }
`

export const Address = styled.p`
  float: right;
  display: flex;
  align-items: center;
  color: #1f7158;
`

export const CardsContainer = styled.div`
  width: min(370px, 100%);
`
