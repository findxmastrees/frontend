import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import AddressModal from '../common/treeInfos/AddressModal'
import TreeImages from '../common/treeInfos/TreeImages'
import { ReactComponent as BookMarkerIcon } from '../../assets/icons/bookmarker.svg'
import { ReactComponent as SharingIcon } from '../../assets/icons/sharing.svg'
import { ReactComponent as ArrowBottom } from '../../assets/icons/arrowBottom.svg'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrowUp.svg'

const TreeInfos = (props) => {
  const [IsClickModal, setClickModal] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)

  const navigate = useNavigate()

  const goToTreePage = () => {
    navigate('/tree')
  }

  return (
    <>
      {IsClickModal && (
        <AddressModal setIsRoadName={props.setIsRoadName} setCopiedAlert={props.setCopiedAlert} />
      )}
      <S.Container>
        <S.ClickBox>
          <S.Title onClick={goToTreePage}>{props.treeTitle}</S.Title>
          <S.IconBox>
            <S.Bookmark onClick={() => setBookMarking(!IsBookMarking)}>
              {<BookMarkerIcon fill={IsBookMarking ? 'yellow' : 'white'} />}
            </S.Bookmark>
            <S.IconTitle>저장됨</S.IconTitle>
          </S.IconBox>
          <S.IconBox>
            <S.Share>
              <SharingIcon />
            </S.Share>
            <S.IconTitle>공유</S.IconTitle>
          </S.IconBox>
        </S.ClickBox>
        <S.AddressBox>
          <S.Location>{props.treeLocation}</S.Location>
          <S.Address>{props.treeAddress}</S.Address>
          <S.AddressArrow onClick={() => setClickModal(!IsClickModal)}>
            {IsClickModal ? <ArrowUp /> : <ArrowBottom />}
          </S.AddressArrow>
        </S.AddressBox>

        <S.TreeImagesBox goToTreePage={goToTreePage}>
          {/* {.map((image) => (
            <TreeImages>image={image}</TreeImages>
          ))} */}
          <TreeImages />
        </S.TreeImagesBox>
      </S.Container>
    </>
  )
}
export default TreeInfos
