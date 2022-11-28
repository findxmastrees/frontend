import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import AddressModal from '../common/tree/AddressModal'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

const TreeInfos = ({ uid, setIsRoadName, setCopiedAlert }) => {
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
          uid={uid}
          goToTreePage={goToTreePage}
          setClickModal={setClickModal}
          IsClickModal={IsClickModal}
          IsBookMarking={IsBookMarking}
          setBookMarking={setBookMarking}
          setIsRoadName={setIsRoadName}
          setCopiedAlert={setCopiedAlert}
        />
        <S.ImgSection goToTreePage={goToTreePage}>
          {/* {.map((image) => (
            <TreeImages>image={image}</TreeImages>
          ))} */}
          <S.ImgItems>
            {arr.map((_, i) => (
              <ReviewImg key={i} />
            ))}
          </S.ImgItems>
        </S.ImgSection>
      </S.Container>
    </>
  )
}
export default TreeInfos
