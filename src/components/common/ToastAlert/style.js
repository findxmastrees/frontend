import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: ${(props) => (props.share ? '2px' : '-118px')};
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

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-300%);
    }
  }

  animation: slideIn 0.5s ease-in-out 0s 1 normal forwards;
`

export const Content = styled.span`
  /* font-weight: 600; */
  color: #ffffff;
`
