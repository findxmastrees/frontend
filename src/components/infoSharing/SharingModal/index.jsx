import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useSelector } from 'react-redux'
// import { shareToTwitter, shareToFacebook } from '../ShareLinks'
import { SharingInfo } from './SharingInfo'
import { Sharing_kakaoIcon, Sharing_urlIcon } from '../../Icons'
import * as S from './style'

export const SharingModal = ({ setUrlCopiedAlert }) => {
  const { tree_id } = useSelector((store) => store.tree.tree)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js' // 카카오톡 SDK
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return
    }

    const kakao = window.Kakao

    if (window.kakao) {
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }

      kakao.Share.sendDefault({
        objectType: 'location',
        address: SharingInfo.address,
        addressTitle: SharingInfo.addressTitle,
        content: {
          title: SharingInfo.title,
          description: SharingInfo.description,
          imageUrl: SharingInfo.imageUrl,
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl:
              'https://63860b066ed8c30db7349d3b--comforting-moonbeam-e55e7d.netlify.app',
            webUrl: 'https://63860b066ed8c30db7349d3b--comforting-moonbeam-e55e7d.netlify.app',
          },
        },
      })
    }
  }

  return (
    <S.Container>
      <S.Modal>
        <CopyToClipboard text={SharingInfo.baseUrl + '/trees/' + tree_id}>
          <S.BtnBox onClick={() => setUrlCopiedAlert(true)}>
            <Sharing_urlIcon />
            <S.BtnTitle>URL 복사</S.BtnTitle>
          </S.BtnBox>
        </CopyToClipboard>
        <S.BtnBox onClick={() => shareToKakaoTalk()}>
          <Sharing_kakaoIcon />
          <S.BtnTitle>카카오톡</S.BtnTitle>
        </S.BtnBox>
      </S.Modal>
      {/* <S.Btn onClick={() => shareToTwitter(SharingInfo)}>Twitter</S.Btn> */}
      {/* <S.Btn onClick={() => shareToFacebook(SharingInfo)}>Facebook</S.Btn> */}
    </S.Container>
  )
}
