import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showAddressModal, showShareModal } from '../../../../store/slices/modalSlice'
import { AddressModal } from '../AddressModal/index'
import { SharingButton } from '../../Sharing/SharingButton'
import { BookmarkButton } from '../../BookMark'
import styled from 'styled-components'
import { ReactComponent as ArrowBottom } from '../../../../assets/icons/arrowBottom.svg'
import { ReactComponent as ArrowUp } from '../../../../assets/icons/arrowUp.svg'

export const TreeNames = ({
  goToTreePage, // 트리 페이지로
}) => {
  const dispatch = useDispatch()

  const { name, address, lotNumber } = useSelector((store) => store.tree.tree)
  const adModal = useSelector((state) => state.modal.addressShow)
  const shareModal = useSelector((state) => state.modal.shareShow)

  const [IsArrowBtn, setArrowBtn] = useState(false)

  const onModal = () => {
    setArrowBtn(!IsArrowBtn)
    if (!adModal) {
      dispatch(showAddressModal())
    } else {
      dispatch(showAddressModal())
    }
  }

  return (
    <>
      <div>
        <ClickBox>
          <Title onClick={goToTreePage}>{name}</Title>
          <IconBox>
            <BookmarkBox>
              <BookmarkButton />
            </BookmarkBox>
            <SharingBox>
              <SharingButton shareModal={shareModal} />
            </SharingBox>
          </IconBox>
        </ClickBox>
        <AddressBox>
          <Location>15m</Location>
          <Address>{address}</Address>
          <AddressArrow onClick={onModal}>
            {IsArrowBtn ? <ArrowUp /> : <ArrowBottom />}
          </AddressArrow>
          {adModal && <AddressModal address={address} lotNumber={lotNumber} />}
        </AddressBox>
      </div>
      {adModal && <Overlay onClick={() => dispatch(showAddressModal())} />}
      {shareModal && <Overlay onClick={() => dispatch(showShareModal())} />}
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
export const Overlay = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 5;
`
