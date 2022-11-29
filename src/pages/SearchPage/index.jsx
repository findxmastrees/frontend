import React from 'react'
import { useSelector } from 'react-redux'
import { SearchInput } from '../../components/SearchInput'
import { SearchResult } from '../../components/SearchResult'

export const SearchPage = () => {
  const trees = useSelector((state) => state.tree.trees)

  return (
    <>
      <SearchInput />
      <ul>
        {trees.map(({ id, name, address }) => (
          <SearchResult key={id} info={{ name, address }} />
        ))}
      </ul>
    </>
  )
}
