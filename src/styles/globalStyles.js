import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
${reset}

@font-face {
font-family: 'UhBeeSe_hyun';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
font-weight: normal;
font-style: normal;
}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');

html {
  font-family: 'Noto Sans KR';
}
*, *::before, *::after {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box
}

body {
  margin: 0;
  padding: 0;
  background-color: #ddd;
  background-image: url('https://user-images.githubusercontent.com/91241596/207074275-6c2877ac-b2c5-4924-876e-01ef269ed57a.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

@media screen and (max-width: 1300px) {
  body {
    background-image: url('https://user-images.githubusercontent.com/91241596/207074992-ebaa19a1-c243-4137-858e-004c1e2b9924.png');
  }
}

@media screen and (max-width: 1100px) {
  body {
    background-image: url('https://user-images.githubusercontent.com/91241596/207076488-34006564-8339-43fb-b45c-a5c476d3b4b1.png')
  }
}

@media screen and (max-width: 850px) {
  body {
    background-image: url('https://user-images.githubusercontent.com/91241596/207076990-d8a7fc76-587a-4ccd-8d58-b26ad6b05d18.png')
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}


`
