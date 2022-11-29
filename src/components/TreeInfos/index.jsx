import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import AddressModal from '../common/Tree/AddressModal'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/Tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

const TreeInfos = ({ email, setIsRoadName, setAdCopiedAlert }) => {
  const navigate = useNavigate()
  const currentUrl = window.location.href
  const [IsClickModal, setClickModal] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)

  const goToTreePage = () => {
    navigate('/tree')
  }

  return (
    <>
      {IsClickModal && (
        <AddressModal setIsRoadName={setIsRoadName} setAdCopiedAlert={setAdCopiedAlert} />
      )}
      <S.Container>
        <TreeNames
          email={email}
          goToTreePage={goToTreePage}
          setClickModal={setClickModal}
          IsClickModal={IsClickModal}
          IsBookMarking={IsBookMarking}
          setBookMarking={setBookMarking}
          setIsRoadName={setIsRoadName}
          setAdCopiedAlert={setAdCopiedAlert}
          currentUrl={currentUrl}
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
