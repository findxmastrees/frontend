import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  min-height: 286px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  margin-top: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 209px;
  object-fit: cover;
`

export const InfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: 9px;
  }
`
export const TreeName = styled.strong`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`

export const TreeAddress = styled.address`
  color: #878787;
  font-weight: 300;
  font-size: 12px;
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
`

export const SharingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
