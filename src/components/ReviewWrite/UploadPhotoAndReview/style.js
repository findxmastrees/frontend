import styled from 'styled-components'

export const ReviewTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  margin: 26px 0 14px 0;
`

export const PhotoPreview = styled.img`
  display: ${(props) => (props.none ? 'none' : 'block')};
  margin-bottom: ${(props) => (props.none ? 'none' : '14px')};
  width: 372px;
  height: 270px;
  object-fit: none;
  border-radius: 5px;
`

export const PhotoUploadBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 133px;
  height: 42px;
  border: 1px solid #878787;
  border-radius: 5px;
  cursor: pointer;
`

export const PhotoUpload = styled.div`
  margin-left: 12px;
  font-weight: 800;
  font-size: 12px;
`
export const PhotoUploadInput = styled.input`
  display: none;
`

export const ReviewArea = styled.textarea`
  width: 372px;
  height: 136px;
  font-size: 12px;
  margin: 16px 0 25px 0;
  padding: 13px 18px 25px 18px;
  outline: none;
  resize: none;
  cursor: pointer;
`
