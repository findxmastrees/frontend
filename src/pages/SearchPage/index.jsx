import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchInput } from '../../components/SearchInput'
import { SearchRecommend } from '../../components/SearchRecommend'
import { SearchResult } from '../../components/SearchResult'
import { useGetTreesRecommendQuery } from '../../store/api/treeApiSlice'
import { useDebounce } from '../../hooks/useDebounce'

export const SearchPage = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])
  const debouncedSearchQuery = useDebounce(input, 500)

  const myLocation = useSelector((store) => store.auth.myLocation)
  const { data } = useGetTreesRecommendQuery({
    map_x: myLocation.lat,
    map_y: myLocation.lon,
  })

  return (
    <>
      <SearchInput
        input={input}
        setInput={setInput}
        setResult={setResult}
        debouncedSearchQuery={debouncedSearchQuery}
      />
      {data && data.length ? (
        input.length === 0 ? (
          <SearchRecommend myLocation={myLocation} data={data} />
        ) : (
          <ul>
            {result.map(({ tree_id, tree_name, tree_addr }) => (
              <SearchResult key={tree_id} info={{ tree_id, tree_name, tree_addr }} />
            ))}
          </ul>
        )
      ) : null}
    </>
  )
}
