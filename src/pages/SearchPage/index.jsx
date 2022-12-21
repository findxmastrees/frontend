import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SearchInput } from '../../components/SearchInput'
import { SearchRecommend } from '../../components/SearchRecommend'
import { SearchResult } from '../../components/SearchResult'

export const SearchPage = () => {
  const trees = useSelector((state) => state.tree.trees)

  const location = useLocation()
  const { state: myLocation } = location

  return (
    <>
      <SearchInput />
      <ul>
        {trees.map(({ id, name, address }) => (
          <SearchResult key={id} info={{ name, address }} />
        ))}
      </ul>
      <SearchRecommend myLocation={myLocation} />
    </>
  )
}
