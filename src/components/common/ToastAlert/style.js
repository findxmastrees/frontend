import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  margin-top: ${(props) => (props.url ? '105px' : '250px')};
  margin-left: ${(props) => (props.url ? '-40px' : '40%')};
  margin-right: ${(props) => (props.url ? '80%' : '0')};
  width: 150px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  line-height: 2.5;
  background: black;
  border-radius: 5px;
  z-index: 1000000;
  opacity: 0.7;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

  @media screen and (max-width: 300px) {
    margin-left: ${(props) => (props.url ? '0' : '20%')};
  }

  @keyframes fadeOut {
    from {
      opacity: 0.7;
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
