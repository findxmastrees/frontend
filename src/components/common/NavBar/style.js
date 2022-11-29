/* eslint-disable */
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100px;
  border-top: 1px solid #bfbfbf;
  position: fixed;
  bottom: 0;
`

export const Menu = styled.ul`
  /* background-color: lavenderblush; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const MenuWrap = styled(NavLink)`
  /* background-color: salmon; */
  vertical-align: middle;
  margin-top: 13px;
  //세로 정렬이 안먹어서 임시로 마진처리합니다
  text-decoration: none;
  color: #2c2c2c;
  > div {
    /* background-color: salmon; */
    /* margin-bottom: 5px; */
    width: 54px;
    height: 54px;
    margin: 0 auto;
  }
  > li {
    /* background-color: pink; */
    margin-top: 5px;
    width: 70px;
    /* height: 100px; */
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    text-align: center;
  }
`
