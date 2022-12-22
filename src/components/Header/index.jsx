/* eslint-disable default-case */
import { Container, HeaderTitle } from './style'
import { ReactComponent as TreeIcon } from '../../assets/icons/header_tree.svg'
import { ReactComponent as Bookmark } from '../../assets/icons/nav_treelist01.svg'
import { ReactComponent as Register } from '../../assets/icons/nav_register01.svg'
import { ReactComponent as My } from '../../assets/icons/nav_my01.svg'
import { BackButton } from '../common/BackButton'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // 피그마상에서는 트리정보페이지, 즐겨찾기 부분에서만 쓰이지만 추후 수정될 수 있는 디자인임을 감안해 switch문으로 작성합니다
  switch (location.pathname) {
    case '/bookmark':
      return (
        <div>
          <Container>
            <BackButton />
            <HeaderTitle>트리</HeaderTitle>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
              <Bookmark />
            </div>
          </Container>
        </div>
      )
    case '/map':
      return (
        <div>
          <Container>
            <BackButton />
            <HeaderTitle>트리</HeaderTitle>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
              <Register />
            </div>
          </Container>
        </div>
      )
    case '/my':
      return (
        <div>
          <Container>
            <BackButton />
            <HeaderTitle>트리</HeaderTitle>
            <My />
          </Container>
        </div>
      )
  }
  return (
    <Container>
      <BackButton />
      <HeaderTitle>트리 상세 정보</HeaderTitle>
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
        <TreeIcon />
      </div>
    </Container>
  )
}

export default Header
