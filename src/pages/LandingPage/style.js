import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url(https://user-images.githubusercontent.com/91241596/206886491-60af948a-46de-4ebb-85e0-6f4ed6ea05a6.png);
  width: 420px;
  /* height: 752px; */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin-top: 84px;
  }
  > div:nth-child(2) {
    text-align: center;
    &:hover {
      color: #ffe16f;
      button {
        color: #ffe16f;
        border: 1px solid #ffe16f;
      }
    }
    > div:first-child {
      margin-top: 24px;
      font-family: 'UhBeeSe_hyun';
      font-weight: 700;
      font-size: 12px;
      line-height: 150%;
    }
    > div:nth-child(2) {
      margin-top: 14px;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
    }
    > div:nth-child(3) {
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
    }
    > button {
      margin-top: 34px;
      margin-bottom: 40px;
      width: 192px;
      height: 52px;
      background: #414141;
      border-radius: 50px;
      border: 1px solid #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 150%;
      color: #fff;
      :hover {
        color: #ffe16f;
        border: 1px solid #ffe16f;
      }
    }
  }

  > div:nth-child(5) {
    /* background-image: url(https://user-images.githubusercontent.com/91241596/204324985-9a567510-018d-47c7-a8b7-c0e5e1881a9f.gif);
    */
    width: 204px;
    height: 204px;
  }

  > div:last-child {
    margin-top: 30px;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #bbbbbb;
  }
`
