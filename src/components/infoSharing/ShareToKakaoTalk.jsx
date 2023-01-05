export const SharingInfo = {
  baseUrl: 'https://63860b066ed8c30db7349d3b--comforting-moonbeam-e55e7d.netlify.app',
  description: '어쩔트리로 트리를 찾아보고 모두에게 트리를 공유해보세요!',
  imageUrl:
    'https://img.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg?w=2000',
}

export const ShareToKakaoTalk = (tree_addr, tree_name) => {
  if (window.Kakao === undefined) {
    return
  }

  const kakao = window.Kakao

  if (window.kakao) {
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
    }

    kakao.Share.sendDefault({
      objectType: 'location',
      address: `${tree_addr}`,
      addressTitle: `${tree_name}`,
      content: {
        title: `공유된 트리를 확인해보세요!`,
        description: SharingInfo.description,
        imageUrl: SharingInfo.imageUrl,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'http://localhost:3000/',
          webUrl: 'http://localhost:3000/',
        },
      },
    })
  }
}
