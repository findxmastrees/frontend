import React, { useState } from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useGetTreeQuery } from '../../store/api/treeApiSlice'
import { selectComment } from '../../store/slices/reviewSlice'
import { useGetCommentsListQuery, useSetReviewMutation } from '../../store/api/reviewApiSlice'
import { SelectComments } from '../../components/ReviewWrite/SelectComments'
import { ReviewButton } from '../../components/Review/ReviewButton'
import { ReviewWriteTitle } from '../../components/ReviewWrite/ReviewWriteTitle'
import { UploadPhotoAndReview } from '../../components/ReviewWrite/UploadPhotoAndReview'
import * as S from './style'

export const WriteReviewPage = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const { tree_id } = useParams()
  const [setReview] = useSetReviewMutation()
  const { data: tree, isTreeLoading } = useGetTreeQuery({ tree_id })
  const { data: commentsList, isLoading } = useGetCommentsListQuery()

  const { comment } = useSelector((store) => store.review)
  const [char, setChar] = useState('')
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  })

  const onActive = (selectedComment) => {
    dispatch(selectComment(selectedComment))
  }

  const showLimitChar = (e) => {
    const char = e.target.value
    setChar(char)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    // formData.append('file', files[0])
    const commentList = comment.map((list) => list.comment_id)

    let value = {
      title: `${tree && tree.tree_name}`,
      content: `${char}`,
      tree_id: `${tree && tree.tree_id}`,
      img: image ? image.preview_URL : null,
      comment_id_list: commentList ? commentList.join(',') : null,
    }

    // const blob = new Blob([JSON.stringify(value)], { type: 'application/json' })
    // console.log(blob)
    // formData.append('data', blob)
    formData.append('data', value)
    console.log(formData)
    setReview(formData)
    // .then(navigate(`/review/${tree.tree_id}`))
  }

  if (isLoading) {
    return <p>...loading</p>
  }

  if (isTreeLoading) {
    return <p>...loading</p>
  }

  return (
    <>
      <Header />
      <S.Container>
        <ReviewWriteTitle {...tree} />
        <S.Section>
          <S.CommentsTitle>
            코멘트 리뷰
            {/* <S.CommentsSmallTitle>(1개 ~ 3개)</S.CommentsSmallTitle> */}
          </S.CommentsTitle>
          <S.CommentsDesc>이 트리에 어울리는 코멘트를 골라주세요.</S.CommentsDesc>
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <S.CommentsBox>
              {commentsList?.map((comment) => (
                <SelectComments key={comment.comment_id} comment={comment} onActive={onActive} />
              ))}
            </S.CommentsBox>
            <S.ReviewBox>
              <UploadPhotoAndReview
                image={image}
                setImage={setImage}
                char={char}
                showLimitChar={showLimitChar}
              />
            </S.ReviewBox>
            <ReviewButton write typeSubmit='submit' />
          </form>
        </S.Section>
      </S.Container>
    </>
  )
}
