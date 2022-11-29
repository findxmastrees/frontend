import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './style'
import AddressModal from '../common/Tree/AddressModal'
import { ReviewImg } from '../common/TreeImg/index'
import { TreeNames } from '../common/Tree/TreeNames'

const arr = Array.from({ length: 3 }, (_, i) => i)

export const TreeInfos = ({ email, setIsRoadName, setAdCopiedAlert }) => {
  const navigate = useNavigate()
  const currentUrl = window.location.href
  const [IsClickModal, setClickModal] = useState(false)
  const [IsBookMarking, setBookMarking] = useState(false)
  const { address, lotNumber } = useSelector((store) => store.tree.tree)

  const goToTreePage = () => {
    navigate('/tree')
  }

  return (
    <>
      <S.Container>
        {IsClickModal && (
          <AddressModal
            address={address}
            lotNumber={lotNumber}
            setIsRoadName={setIsRoadName}
            setAdCopiedAlert={setAdCopiedAlert}
          />
        )}
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
