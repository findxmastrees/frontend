//infoHeader > Header로 이름 변경
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  ReviewButton,
  ReviewList,
  TreeNames,
  TreeInfo,
  Header,
  ImgList,
  MapImage,
} from '../../components'
import { useGetTreeQuery } from '../../store/api/treeApiSlice'
import * as S from './style'

export const TreePage = () => {
  const { tree_id } = useParams()
  const myLocation = useSelector((store) => store.auth.myLocation)
  const {
    data: tree,
    isLoading,
    isError,
    error,
  } = useGetTreeQuery({ tree_id, map_x: myLocation.lat, map_y: myLocation.lon })
  
  if (isLoading) return <p>Loaindg...</p>

  if (isError) return <p>{error}</p>

  return (
    <>
      <S.MainContainer>
        <Header />
        <MapImage lat={tree.tree_x} lng={tree.tree_y} />
        <TreeNames
          tree_id={tree.tree_id}
          tree_name={tree.tree_name}
          distance={tree.distance}
          tree_addr={tree.tree_addr}
          tree_load_addr={tree.tree_load_addr}
        />
        <TreeInfo {...tree} />
        <ImgList reviewImgs={tree.tree_images} reviewList={tree.review_list} />
        <ReviewList reviewList={tree.review_list} />
        <ReviewButton handleToWrite tree_id={tree_id} />
      </S.MainContainer>
    </>
  )
}
