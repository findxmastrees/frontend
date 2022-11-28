import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 420px;
  height: 752px;
  color: #518d2f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-child {
    margin-top: 124px;
    /* background-image: url(https://user-images.githubusercontent.com/91241596/204324985-9a567510-018d-47c7-a8b7-c0e5e1881a9f.gif);
    */
    width: 204px;
    height: 204px;
  }
  > div:nth-child(2) {
    margin-top: 50px;
  }
  > div:nth-child(3) {
    margin-top: 24px;
    font-family: 'UhBeeSe_hyun';
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
  }
  > div:nth-child(4) {
    margin-top: 14px;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
  }
  > div:nth-child(5) {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
  }
  > button {
    margin-top: 46px;
    width: 346px;
    height: 52px;
    background: #518d2f;
    border-radius: 50px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #fff;
  }
  > div:last-child {
    margin-top: 112px;
    font-weight: 500;
    font-size: 10px;
    line-height: 150%;
    color: #b9b9b9;
    letter-spacing: -0.011em;
  }
`
