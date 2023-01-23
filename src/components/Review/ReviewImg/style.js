import styled from 'styled-components'

export const ImgWrapper = styled.li`
  display: block;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  cursor: ${(props) => (props.toInfo ? 'pointer' : 'initial')};
`
