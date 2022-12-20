import styled from 'styled-components'

export const ClickBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 5px 22px;
`

export const Title = styled.div`
  width: 235px;
  height: 38px;
  font-weight: 800;
  font-size: 25px;
  margin-top: 18px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
    height: 30px;
    font-size: 23px;
  }
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;

  @media screen and (max-width: 300px) {
    display: none;
  }
`

export const BookmarkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`

export const SharingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`

export const AddressBox = styled.article`
  position: relative;
  margin: 0 0 0 22px;
  padding-bottom: 13px;
`

export const Location = styled.span`
  position: relative;
  font-weight: 700;
  font-size: 12px;
  margin-right: 12px;
  margin-left: 2px;

  &::after {
    content: '';
    position: absolute;
    right: -12px;
    background-color: #e8e8e8;
    width: 1px;
    top: 3px;
    height: 12px;
  }

  @media screen and (max-width: 300px) {
    font-size: 11px;
  }
`

export const Address = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  font-size: 12px;
  margin: 0 4px 0 12px;

  @media screen and (max-width: 300px) {
    font-size: 11px;
  }
`

export const AddressArrow = styled.button`
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const SmallDropBtn = styled.button`
  display: none;
  @media screen and (max-width: 300px) {
    display: block;
    position: relative;
    top: 16px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
  }
`

export const SmallModalBox = styled.div`
  display: none;
  @media screen and (max-width: 300px) {
    display: block;
    position: absolute;
    top: 33px;
    right: -1px;
    width: 63px;
    height: 50px;
    background: #ffffff;
    padding: 6px 12px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    z-index: 10;
  }
`

export const Overlay = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`
