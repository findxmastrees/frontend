import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useSelector } from 'react-redux'
// import { shareToTwitter, shareToFacebook } from '../ShareLinks'
import { ShareToKakaoTalk, SharingInfo } from '../ShareToKakaoTalk'
import { Sharing_kakaoIcon, Sharing_urlIcon } from '../../Icons'
import * as S from './style'

export const SharingModal = ({ setUrlCopiedAlert }) => {
  const { tree_id, tree_name, tree_addr } = useSelector((store) => store.tree.tree)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <S.Container>
      <S.Modal>
        <CopyToClipboard text={SharingInfo.baseUrl + '/trees/' + tree_id}>
          <S.BtnBox onClick={() => setUrlCopiedAlert(true)}>
            <Sharing_urlIcon />
            <S.BtnTitle>URL 복사</S.BtnTitle>
          </S.BtnBox>
        </CopyToClipboard>
        <S.BtnBox onClick={() => ShareToKakaoTalk(tree_addr, tree_name)}>
          <Sharing_kakaoIcon />
          <S.BtnTitle>카카오톡</S.BtnTitle>
        </S.BtnBox>
      </S.Modal>
      {/* <S.Btn onClick={() => shareToTwitter(SharingInfo)}>Twitter</S.Btn> */}
      {/* <S.Btn onClick={() => shareToFacebook(SharingInfo)}>Facebook</S.Btn> */}
    </S.Container>
  )
}
