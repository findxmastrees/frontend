import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  margin-top: ${(props) => (props.share ? '135px' : '95px')};
  margin-left: ${(props) => (props.share ? '0px' : '22.5%')};
  margin-right: ${(props) => (props.share ? '80%' : '0')};
  width: 185px;
  height: 38px;
  text-align: center;
  color: #ffffff;
  line-height: 2.5;
  background: black;
  border-radius: 5px;
  z-index: 1000000;
  opacity: 0.7;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

  @keyframes fadeOut {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 0;
    }
  }

  animation: fadeOut 1.5s ease-in-out 0s 1 normal forwards;
`

export const Content = styled.span`
  color: #ffffff;
`