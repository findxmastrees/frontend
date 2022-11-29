import styled from 'styled-components'
import { ReactComponent as Erase } from '../../assets/icons/erase_icon.svg'

export const Container = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #bfbfbf;
  display: flex;
  padding-left: 62px;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  outline: none;

  &::placeholder {
    color: #aeaeae;
  }
`

export const EraseBtn = styled(Erase)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
