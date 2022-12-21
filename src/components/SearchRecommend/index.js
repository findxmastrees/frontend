import React from 'react'
import { useGetTreesRecommendQuery } from '../../store/api/treeApiSlice'

export const SearchRecommend = ({ myLocation }) => {
  console.log(myLocation)
  const { data, isLoading, isSuccess, isError, error } = useGetTreesRecommendQuery({
    map_x: myLocation.lat,
    map_y: myLocation.lon,
  })

  return <div>SearchRecommend</div>
}
