import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { BookmarkerIcon, ArrowBottomIcon, ArrowUpIcon } from '../../Icons'
import { SharingButton } from '../Sharing/SharingButton'
import { AddressModal } from '../Tree/AddressModal'

export const TreeNames = ({
  goToTreePage, // 트리 페이지로
  currentUrl,
}) => {
  const navigate = useNavigate()
  const { name, address, lotNumber } = useSelector((store) => store.tree.tree)
  const { email } = useSelector((store) => store.auth)

  const [IsArrowBtn, setArrowBtn] = useState(false)
  const [IsModalClick, setModalClick] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)

  const onModal = () => {
    setModalClick(!IsModalClick)
    setArrowBtn(!IsArrowBtn)
  }

  return (
    <>
      {' '}
      <ClickBox>
        <Title onClick={goToTreePage}>{name}</Title>
        <IconBox>
          <Bookmark onClick={() => (email ? setBookMarking(!IsBookMarking) : navigate('/sign-in'))}>
            {<BookmarkerIcon fill={IsBookMarking ? 'yellow' : 'white'} />}
          </Bookmark>
          <IconTitle>저장됨</IconTitle>
        </IconBox>
        <IconBox>
          <SharingButton currentUrl={currentUrl} />
        </IconBox>
      </ClickBox>
      <AddressBox>
        <Location>15m</Location>
        <Address>{address}</Address>
        <AddressArrow onClick={onModal}>
          {IsArrowBtn ? <ArrowUpIcon /> : <ArrowBottomIcon />}
        </AddressArrow>
        {IsModalClick && <AddressModal address={address} lotNumber={lotNumber} />}
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
`

export const Bookmark = styled.button`
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
  position: relative;
  margin: 0 0 0 22px;
  padding-bottom: 13px;
`

export const Location = styled.span`
  position: relative;
  font-weight: 700;
  font-size: 12px;
  margin-right: 12px;

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
