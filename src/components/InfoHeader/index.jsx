import { Container, HeaderTitle } from './style'
import { ReactComponent as TreeIcon } from '../../assets/icons/header_tree.svg'
import { BackButton } from '../common/BackButton'

const InfoHeader = () => {
  return (
    <Container>
      <BackButton />
      <HeaderTitle>트리 싱세 정보</HeaderTitle>
      <TreeIcon />
    </Container>
  )
}

export default InfoHeader
