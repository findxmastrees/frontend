/* eslint-disable default-case */
import { Container, HeaderTitle } from './style'
import { ReactComponent as TreeIcon } from '../../assets/icons/header_tree.svg'
import { ReactComponent as Bookmark } from '../../assets/icons/nav_treelist01.svg'
import { BackButton } from '../common/BackButton'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  // 피그마상에서는 트리정보페이지, 즐겨찾기 부분에서만 쓰이지만 추후 수정될 수 있는 디자인임을 감안해 switch문으로 작성합니다
  switch (location.pathname) {
    case '/bookmark':
      return (
        <div>
          <Container>
            <BackButton />
            <HeaderTitle>트리</HeaderTitle>
            <Bookmark />
          </Container>
        </div>
      )
  }
  return (
    <Container>
      <BackButton />
      <HeaderTitle>트리 상세 정보</HeaderTitle>
      <TreeIcon />
    </Container>
  )
}

export default Header
