import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BookMarkerIcon } from '../../../assets/icons/bookmarker.svg'
import { ReactComponent as SharingIcon } from '../../../assets/icons/sharing.svg'
import { ReactComponent as ArrowBottom } from '../../../assets/icons/arrowBottom.svg'
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg'

export const TreeNames = ({
  goToTreePage, // 트리 페이지로
  setBookMarking, // 북마크
  IsBookMarking, // 북마크
  setClickModal, // 주소 모달
  IsClickModal, // 주소 모달
}) => {
  return (
    <>
      <ClickBox>
        <Title onClick={goToTreePage}>treeTitle</Title>
        <IconBox>
          <Bookmark onClick={() => setBookMarking(!IsBookMarking)}>
            {<BookMarkerIcon fill={IsBookMarking ? 'yellow' : 'white'} />}
          </Bookmark>
          <IconTitle>저장됨</IconTitle>
        </IconBox>
        <IconBox>
          <Share>
            <SharingIcon />
          </Share>
          <IconTitle>공유</IconTitle>
        </IconBox>
      </ClickBox>
      <AddressBox>
        <Location>treeLocation</Location>
        <Address>treeAddress</Address>
        <AddressArrow onClick={() => setClickModal(!IsClickModal)}>
          {IsClickModal ? <ArrowUp /> : <ArrowBottom />}
        </AddressArrow>
      </AddressBox>
    </>
  )
}

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
// 저장됨, 공유
export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  cursor: pointer;
`

export const Bookmark = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const Share = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const IconTitle = styled.span`
  font-size: #2c2c2c;
  font-weight: 300;
  font-size: 10px;
  margin-top: 5px;
`

export const AddressBox = styled.article`
  margin: 0 0 13px 22px;
`

export const Location = styled.span`
  font-weight: 700;
  font-size: 12px;
  margin-right: 12px;
`

export const Address = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin: 0 4px 0 12px;
  cursor: pointer;
`

export const AddressArrow = styled.button`
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`
