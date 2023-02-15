import React from 'react'
import * as S from './style'
import { Review_uploadIcon, CloseIcon } from '../../Icons'

export const UploadPhotoAndReview = ({ image, setImage, reviewChar, setReviewChar }) => {
  const showLimitChar = (e) => {
    const reviewChar = e.target.value
    setReviewChar(reviewChar)
  }

  const handleChange = (e) => {
    e.preventDefault()

    const fileReader = new FileReader()

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      })
    }
  }

  return (
    <>
      <S.ReviewTitle>리뷰를 남겨주세요</S.ReviewTitle>
      {image.preview_URL ? (
        <>
          <S.PhotoPreview src={image.preview_URL} alt='' />
          <S.CloseBtn>
            <S.CloseBtnIcon onClick={() => setImage('')}>
              <CloseIcon />
            </S.CloseBtnIcon>
          </S.CloseBtn>
        </>
      ) : (
        <>
          <S.PhotoPreview none alt='' />
          <S.PhotoUploadBox>
            <Review_uploadIcon />
            <S.PhotoUpload name='file'>사진 추가하기</S.PhotoUpload>
            <S.PhotoUploadInput
              onChange={handleChange}
              onClick={(e) => (e.target.value = null)}
              name='file'
              type='file'
              accept='image/*'
            />
          </S.PhotoUploadBox>
        </>
      )}

      <S.ReviewArea
        required
        maxLength={150}
        placeholder='트리를 구경한 소감이 어땠는지 알려주세요.'
        onChange={showLimitChar}
      />
      <S.LimitCharBox>
        <S.LimitChar>{reviewChar.length}</S.LimitChar> / 150
      </S.LimitCharBox>
    </>
  )
}
