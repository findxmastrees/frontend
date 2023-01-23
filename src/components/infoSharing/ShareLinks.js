export const shareToTwitter = (SharingInfo) => {
  const sharedLink =
    'text=' +
    encodeURIComponent(SharingInfo.title + ' \n ') +
    encodeURIComponent(SharingInfo.baseUrl)
  window.open(`https://twitter.com/intent/tweet?${sharedLink}`)
}

export const shareToFacebook = (SharingInfo) => {
  const sharedLink = encodeURIComponent(SharingInfo.baseUrl)
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`)
}

export const shareToMobileWeb = (SharingInfo) => {
  if (navigator.share) {
    navigator.share({
      title: SharingInfo.title,
      url: SharingInfo.baseUrl,
    })
  } else {
    alert('공유하기가 지원되지 않는 환경 입니다.')
  }
}
