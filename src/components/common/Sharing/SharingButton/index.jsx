import React, { useState } from 'react'
import { SharingModal } from '../SharingModal'
import * as S from './style'
import { ReactComponent as SharingIcon } from '../../../../assets/icons/sharing.svg'

export const SharingButton = ({ currentUrl }) => {
  const [IsClicked, setIsClicked] = useState(false)

  return (
    <>
      {IsClicked && <SharingModal currentUrl={currentUrl} setIsClicked={setIsClicked} />}
      <S.Share onClick={() => setIsClicked(true)}>
        <SharingIcon />
      </S.Share>
      <S.IconTitle>공유</S.IconTitle>
    </>
  )
}
