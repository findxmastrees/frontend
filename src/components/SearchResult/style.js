import styled from 'styled-components'
import { ReactComponent as Tree } from '../../assets/icons/tree.svg'

export const Container = styled.li`
  width: 100%;
  padding: 24px 14px 25px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const TreeIcon = styled(Tree)`
  width: 35px;
  height: 42px;
`

export const Wrapper = styled.div`
  margin-left: 14px;
`
export const TreeName = styled.strong`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`

export const TreeAddress = styled.span`
  font-weight: 350;
  font-size: 12px;
  color: #878787;
  line-height: 150%;
`
