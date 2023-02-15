import React, { useState } from 'react'
import { Header } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
  const navigate = useNavigate()
  const { tree_id } = useParams()
  const { comment } = useSelector((store) => store.review)

  const [setReview] = useSetReviewMutation()
  const { data: tree, isTreeLoading } = useGetTreeQuery({ tree_id })
  const { data: commentsList, isLoading } = useGetCommentsListQuery()

  const [reviewChar, setReviewChar] = useState('')
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '',
  })

  const onActive = (comment) => {
    dispatch(selectComment(comment))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const commentId = comment.map((list) => list.comment_id)

    const title = tree && `${tree.tree_name}`
    const user_id = ''
    const tree_id = tree && `${tree.tree_id}`
    let img = image ? image.image_file : null
    let contents = reviewChar && `${reviewChar}`
    let comment_id_list = commentId ? commentId.join(',') : null

    const formData = new FormData()
    if (img) formData.append('img', img)
    formData.append('title', title)
    formData.append('contents', contents)
    formData.append('user_id', user_id)
    formData.append('tree_id', tree_id)
    formData.append('comment_id_list', comment_id_list)
    setReview(formData).then(navigate(`/tree/${tree_id}`, { replace: true }))
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
                reviewChar={reviewChar}
                setReviewChar={setReviewChar}
              />
            </S.ReviewBox>
            <ReviewButton write typeSubmit='submit' />
          </form>
        </S.Section>
      </S.Container>
    </>
  )
}
