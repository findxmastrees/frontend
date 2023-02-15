import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SearchInput, SearchRecommend, SearchResult } from '../../components'
import { useLazyGetTreesRecommendQuery } from '../../store/api/treeApiSlice'
import { useDebounce } from '../../hooks/useDebounce'

export const SearchPage = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])
  const [recommendData, setRecommendData] = useState([])

  const debouncedSearchQuery = useDebounce(input, 500)
  const [getTreesRecommend] = useLazyGetTreesRecommendQuery()

  const myLocation = useSelector((store) => store.auth.myLocation)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const { data } = await getTreesRecommend({
        map_x: myLocation.lat,
        map_y: myLocation.lon,
      })
      setRecommendData(data)
    })()
  }, [])

  useEffect(() => {
    if (recommendData && recommendData.length) return
    ;(async () => {
      const { data: newData } = await getTreesRecommend({
        map_x: 37.5100003045053,
        map_y: 127.10286871659851,
      })
      setRecommendData(newData)
    })()
  }, [recommendData])

  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>{error}</p>

  return (
    <>
      <SearchInput
        input={input}
        setInput={setInput}
        setResult={setResult}
        debouncedSearchQuery={debouncedSearchQuery}
      />
      {input.length ? (
        <ul>
          {result.map(({ tree_id, tree_name, tree_addr }) => (
            <SearchResult key={tree_id} info={{ tree_id, tree_name, tree_addr }} />
          ))}
        </ul>
      ) : (
        recommendData && <SearchRecommend myLocation={myLocation} data={recommendData} />
      )}

      {/* // {data && data.length ? (
      //   input.length === 0 ? (
      //     <SearchRecommend myLocation={myLocation} data={data} />
      //   ) : (
      //     <ul>
      //       {result.map(({ tree_id, tree_name, tree_addr }) => (
      //         <SearchResult key={tree_id} info={{ tree_id, tree_name, tree_addr }} />
      //       ))}
      //     </ul>
      //   )
      // ) : null} */}
    </>
  )
}
