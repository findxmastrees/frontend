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
  text-overflow: ellipsis;
  margin-top: 18px;
  cursor: pointer;
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;
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
`

export const Address = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  font-size: 12px;
  margin: 0 4px 0 12px;
`

export const AddressArrow = styled.button`
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
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
