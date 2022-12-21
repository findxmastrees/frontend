import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchInput } from '../../components/SearchInput'
import { SearchRecommend } from '../../components/SearchRecommend'
import { SearchResult } from '../../components/SearchResult'
import { useGetTreesRecommendQuery } from '../../store/api/treeApiSlice'

export const SearchPage = () => {
  const [input, setInput] = useState('')

  const myLocation = useSelector((store) => store.auth.myLocation)
  const { data } = useGetTreesRecommendQuery({
    map_x: myLocation.lat,
    map_y: myLocation.lon,
  })

  // const trees = useSelector((state) => state.tree.trees)
  // console.log(input.length, input.length === 0)
  // console.log(data.length, data.length === 0)
  // console.log(input.length === 0 || data.length === 0)
  return (
    <>
      <SearchInput input={input} setInput={setInput} />
      {input.length === 0 || data.length === 0 ? (
        <SearchRecommend myLocation={myLocation} data={data} />
      ) : (
        <ul>
          {data.map(({ tree_id, tree_name, tree_addr }) => (
            <SearchResult key={tree_id} info={{ tree_name, tree_addr }} />
          ))}
        </ul>
      )}
    </>
  )
}
