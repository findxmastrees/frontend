import React, { useEffect, useState } from 'react'
import * as S from './style'
import { BackButton } from '../../../components'
import { useLazyGetTreesSearchQuery } from '../../../store/api/treeApiSlice'

export const SearchInput = ({ input, setInput, setResult, debouncedSearchQuery }) => {
  const [change, setChange] = useState(false)
  const [getTreesSearch] = useLazyGetTreesSearchQuery()

  useEffect(() => {
    !input && setChange(false)
  }, [input])

  const handleInput = async (e) => {
    setChange(true)
    setInput(e.target.value)
  }

  useEffect(() => {
    if (!input.length) return // eslint-disable-next-line no-extra-semi
    ;(async function () {
      const { data } = await getTreesSearch({ search_param: debouncedSearchQuery })
      setResult(data)
    })()
  }, [debouncedSearchQuery])

  return (
    <S.Container>
      <BackButton />
      <S.Input placeholder='트리, 주소 검색' onChange={handleInput} value={input}></S.Input>
      {change && <S.EraseBtn onClick={() => setInput('')} />}
    </S.Container>
  )
}
