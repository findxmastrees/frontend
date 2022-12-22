import styled from 'styled-components'

export const ReviewTitle = styled.div`
  font-weight: 800;
  font-size: 16px;
  margin: 26px 0 14px 0;
`

export const PhotoPreview = styled.img`
  display: ${(props) => (props.none ? 'none' : 'block')};
  margin-bottom: ${(props) => (props.none ? 'none' : '14px')};
  width: 200px;
  object-fit: cover;
  border-radius: 5px;
`

export const CloseBtn = styled.div`
  left: 264px;
  top: 77px;
  position: absolute;
  width: 22px;
  height: 22px;
  background: #1f7158;
`

export const CloseBtnIcon = styled.div`
  position: absolute;
  top: 2px;
  left: 6px;
  cursor: pointer;
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
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  outline: none;
  resize: none;
  cursor: pointer;

  &::placeholder {
    color: #b9b9b9;
  }
`
