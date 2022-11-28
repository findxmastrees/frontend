import styled from 'styled-components'

export const Container = styled.article`
  position: absolute;
  bottom: 98px;
  left: 14px;
  width: 392px;
  height: 238px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  z-index: 10000;
`

// 사진
// export const TreeImagesBox = styled.div`
//   display: flex;
//   height: 102px;
//   margin: 13px 0 22px 22px;
// `

export const ImgSection = styled.section`
  width: 100%;
  text-align: center;
`

export const ImgItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 14px 24px;
`
