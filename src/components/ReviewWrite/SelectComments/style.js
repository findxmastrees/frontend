import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 5px 12px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-bottom: 7px;
  background: ${(props) => (props.selected ? '#1F7158' : '#FFFFFF')};
  color: ${(props) => (props.selected ? '#FFFFFF;' : '#1A1A1A')};
  cursor: pointer;
`
export const CommentsImg = styled.img`
  width: 28px;
  height: 28px;
`

export const CommentsBtn = styled.div`
  margin-left: 6px;
  font-size: 14px;
`
