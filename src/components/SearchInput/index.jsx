import React, { useEffect, useState } from 'react'
import * as S from './style'
import { BackButton } from '../common/BackButton'

export const SearchInput = ({ input, setInput }) => {
  const [change, setChange] = useState(false)

  useEffect(() => {
    !input && setChange(false)
  }, [input])

  const handleInput = (e) => {
    setChange(true)
    setInput(e.target.value)
  }

  return (
    <S.Container>
      <BackButton />
      <S.Input placeholder='트리, 주소 검색' onChange={handleInput} value={input}></S.Input>
      {change && <S.EraseBtn onClick={() => setInput('')} />}
    </S.Container>
  )
}
