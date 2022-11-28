import styled from 'styled-components'

export const Container = styled.article`
  position: absolute;
  bottom: 114px;
  left: 14px;
  width: 392px;
  height: 216px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  z-index: 10000;
`

export const ClickBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 5px 22px;
`

export const Title = styled.div`
  width: 235px;
  height: 38px;
  font-weight: 800;
  font-size: 25px;
  text-overflow: ellipsis;
  margin-top: 18px;
  cursor: pointer;
`
// 저장됨, 공유
export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  cursor: pointer;
`

export const Bookmark = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

// export const BookMarkerSvg = styled(BookMarkerIcon)`
//   color: ${(props) => (props.IsBookMarking ? 'yellow' : 'none')};
// `

export const Share = styled.button`
  width: 25px;
  height: 24px;
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const IconTitle = styled.span`
  font-size: #2c2c2c;
  font-weight: 300;
  font-size: 10px;
  margin-top: 5px;
`

export const AddressBox = styled.article`
  margin: 0 0 13px 22px;
`

export const Location = styled.span`
  font-weight: 700;
  font-size: 12px;
  margin-right: 12px;
`

export const Address = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin: 0 4px 0 12px;
  cursor: pointer;
`

export const AddressArrow = styled.button`
  background: #ffffff;
  border: none;
  padding: 0;
  cursor: pointer;
`

// 사진
export const TreeImagesBox = styled.div`
  display: flex;
  height: 102px;
  margin: 13px 0 22px 22px;
`
