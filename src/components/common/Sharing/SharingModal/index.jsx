import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import * as S from './style'

export const SharingModal = ({ setIsClicked, currentUrl }) => {
  const url = `${currentUrl}${'어쩌고저쩌고'}`

  useEffect(() => {
    createKakaoButton()
  }, [])

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }

  // const handleShareToTwitter = () => {
  //   const sharedLink = 'text=' + encodeURIComponent(title + ' \n ') + encodeURIComponent(url)
  //   window.open(`https://twitter.com/intent/tweet?${sharedLink}`)
  // }

  // const handleShareToFb = () => {
  //   const sharedLink = encodeURIComponent(url)
  //   window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`)
  // }

  return (
    <S.Container>
      {/* <S.Btn id='kakao-link-btn'>카카오톡으로 공유하기</S.Btn> */}
      {/* <S.Btn onClick={handleShareToFb}>페이스북으로 공유하기</S.Btn>
      <S.Btn onClick={handleShareToTwitter}>트위터로 공유하기</S.Btn> */}
      <CopyToClipboard text={url}>
        <S.Btn>URL 복사하기</S.Btn>
      </CopyToClipboard>
      <S.CancelBtn onClick={() => setIsClicked(false)}>취소</S.CancelBtn>
    </S.Container>
  )
}
