import React, { useState } from 'react'
import styled from 'styled-components'
import TreeImages from './treeImages'
import AddressModal from './addressModal'
import { ReactComponent as BookMarkerIcon } from '../assets/icons/bookmarker.svg'
import { ReactComponent as SharingIcon } from '../assets/icons/sharing.svg'
import { ReactComponent as ArrowBottom } from '../assets/icons/arrowBottom.svg'

const TreeInfos = (props) => {
  const [IsClickModal, setClickModal] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)

  return (
    <>
      {IsClickModal && <AddressModal />}
      <Container>
        <ClickBox>
          <Title>{props.treeTitle}</Title>
          <IconBox>
            <Bookmark onClick={() => setBookMarking(!IsBookMarking)}>
              <BookMarkerSvg />
            </Bookmark>
            <ClickTitle>저장됨</ClickTitle>
          </IconBox>
          <IconBox>
            <Share>
              <SharingIcon />
            </Share>
            <ClickTitle>공유</ClickTitle>
          </IconBox>
        </ClickBox>
        <AddressBox>
          <Location>{props.treeLocation}</Location>
          <Address>{props.treeAddress}</Address>
          <AddressArrow onClick={() => setClickModal(!IsClickModal)}>
            <ArrowBottom />
          </AddressArrow>
        </AddressBox>
        <TreeImages />
      </Container>
    </>
  )
}
const Container = styled.section`
  width: 392px;
  height: 216px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
`
const ClickBox = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 5px 22px;
`

const Title = styled.div`
  width: 235px;
  height: 38px;
  font-weight: 800;
  font-size: 25px;
  text-overflow: ellipsis;
  margin-top: 18px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`

const Bookmark = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
`

const BookMarkerSvg = styled(BookMarkerIcon)`
  color: ${(props) => (props.IsBookMarking ? 'yellow' : 'none')};
`

const Share = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
`

const ClickTitle = styled.span`
  font-size: #2c2c2c;
  font-weight: 300;
  font-size: 10px;
  margin-top: 5px;
`

const AddressBox = styled.article`
  margin: 0 0 13px 22px;
`

const Location = styled.span`
  font-weight: 700;
  font-size: 12px;
  margin-right: 12px;
`

const Address = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin: 0 4px 0 12px;
`

const AddressArrow = styled.button`
  background: #ffffff;
  border: none;
  padding: 0;
`
export default TreeInfos
