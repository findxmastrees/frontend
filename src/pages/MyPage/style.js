import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 420px;
  height: 752px;
`
export const User = styled.div`
  /* background-color: mistyrose; */
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 418px;
  > div:first-child {
    width: 420px;
    height: 100px;
    background-image: url(https://user-images.githubusercontent.com/91241596/204346594-31500d9c-d8e1-47c3-8515-4e678313e60e.png);
  }
  > div:nth-child(2) {
    background-color: #ececec;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    /* left: 50%;
    transform: translateX(-50%);
    bottom: 50px; */
    left: 50%;
    transform: translateX(-50%);
    bottom: 65%;
  }
  > div:nth-child(3) {
    width: 70px;
    height: 70px;
    background-image: url(https://user-images.githubusercontent.com/91241596/204347190-f2678c80-2366-4ca9-b58b-e2bfd6355180.png);
    position: relative;
    left: 35px;
    transform: translateX(-50%);
    bottom: 40px;
  }
  > div:nth-child(4) {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.022em;
  }
  > div:nth-child(5) {
    margin-top: 12px;
    background-color: #fff;
    width: 171px;
    height: 30px;
    border: 1px solid #ebebeb;
    border-radius: 50px;
    font-weight: 350;
    font-size: 12px;
    letter-spacing: -0.022em;
    color: #878787;
    padding: 7px 20px 6px 38px;
  }
  > div:nth-child(6) {
    width: 18px;
    height: 18px;
    background-image: url(https://user-images.githubusercontent.com/91241596/204353271-cf68f1b4-09e6-4445-9fee-720e5f37fc81.png);
    position: absolute;
    top: 224px;
    left: 140px;
  }
`
export const MyWrapper = styled.div`
  /* background-color: peachpuff; */
  margin-top: 32px;
  width: 400px;
  display: flex;
  justify-content: space-around;
`
export const MyWrap = styled.div`
  background-color: #f8f8f8;
  width: 100px;
  height: 110px;
  border: 0.5px solid #878787;
  border-radius: 10px;
  position: relative;
  > div:first-child {
    padding: 30px 38px 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.022em;
    color: #000000;
  }
  > div:nth-child(2) {
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.022em;
    color: #000000;
  }
  > div:nth-child(3) {
    width: 31px;
    height: 23px;
    background-image: url(https://user-images.githubusercontent.com/91241596/204352290-49e4cf81-6e0d-4e00-837d-a139bb2a6261.png);
    position: absolute;
    bottom: 98px;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const Menu = styled.ul`
  /* background-color: peachpuff; */
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #000000;
  > li {
    height: 50px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    padding-left: 40px;
    :nth-child(4) {
      color: #9c9c9c;
    }
    :nth-child(5) {
      color: #9c9c9c;
    }
  }
`
