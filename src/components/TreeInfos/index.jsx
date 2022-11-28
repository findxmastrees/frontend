import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import AddressModal from '../common/tree/AddressModal'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/tree/TreeNames'

const TreeInfos = ({ setIsRoadName, setCopiedAlert }) => {
  const [IsClickModal, setClickModal] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)

  const navigate = useNavigate()

  const goToTreePage = () => {
    navigate('/tree')
  }

  return (
    <>
      {IsClickModal && (
        <AddressModal setIsRoadName={setIsRoadName} setCopiedAlert={setCopiedAlert} />
      )}
      <S.Container>
        <TreeNames
          setClickModal={setClickModal}
          IsClickModal={IsClickModal}
          IsBookMarking={IsBookMarking}
          setBookMarking={setBookMarking}
          setIsRoadName={setIsRoadName}
          setCopiedAlert={setCopiedAlert}
        />
        <S.TreeImagesBox goToTreePage={goToTreePage}>
          {/* {.map((image) => (
            <TreeImages>image={image}</TreeImages>
          ))} */}
          <ReviewImg />
        </S.TreeImagesBox>
      </S.Container>
    </>
  )
}
export default TreeInfos
