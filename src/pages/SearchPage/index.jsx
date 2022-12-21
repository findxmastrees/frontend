import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SearchInput } from '../../components/SearchInput'
import { SearchRecommend } from '../../components/SearchRecommend'
import { SearchResult } from '../../components/SearchResult'

export const SearchPage = () => {
  const [input, setInput] = useState('')

  const trees = useSelector((state) => state.tree.trees)

  const location = useLocation()
  const { state: myLocation } = location

  return (
    <>
      <SearchInput input={input} setInput={setInput} />
      {input.length === 0 ? (
        <SearchRecommend myLocation={myLocation} />
      ) : (
        <ul>
          {trees.map(({ id, name, address }) => (
            <SearchResult key={id} info={{ name, address }} />
          ))}
        </ul>
      )}
    </>
  )
}
