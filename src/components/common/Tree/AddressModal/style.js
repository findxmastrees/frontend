import styled from 'styled-components'

export const Container = styled.article`
  position: absolute;
  width: calc(100% - 22px);
  height: 90px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  padding: 10px;
  z-index: 100;
  font-size: 12px;
  line-height: 20px;

  @media screen and (max-width: 300px) {
    width: 220px;
  }
`

export const AdBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
`

export const Address = styled.div`
  @media screen and (max-width: 300px) {
    font-size: 11px;
  }
`

export const RoadName = styled.button`
  height: 21px;
  width: 47px;
  line-height: 0;
  color: gray;
  font-size: 12px;
  padding: 3px;
  margin-right: 7px;
  background: transparent;
  border: 1px solid #e1e1e1;
  cursor: initial;

  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`

export const LotNumber = styled.button`
  height: 21px;
  width: 29px;
  line-height: 0;
  padding: 2px;
  margin-right: 7px;
  color: gray;
  font-size: 12px;
  background: transparent;
  border: 1px solid #e1e1e1;
  cursor: initial;

  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`

export const IconBox = styled.span`
  margin-left: 5px;
  cursor: pointer;
`
