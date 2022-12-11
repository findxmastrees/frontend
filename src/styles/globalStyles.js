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
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
}

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
  background-image: url('https://user-images.githubusercontent.com/91241596/204526640-4b898487-af4b-4304-ab6f-e24ba0f0ba7a.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
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

@media screen and (max-width: 1250px) {
  body {
    background-image: url('https://user-images.githubusercontent.com/91241596/204527149-b54074f2-7553-4afa-9685-308569a3ebad.png');
  }
}

@media screen and (max-width: 850px) {
  body {
    background-image: unset;
    background-color: #dddfe2;
  }
}
`
