import styled from 'styled-components'

export const CustomModal = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`
export const Content = styled.div`
  padding: 1rem 0.5rem;
  ${({ contentClass }) => contentClass === 'noPadding' && `padding: 0`}
`
export const Footer = styled.footer`
  padding: 1rem 0.5rem;
  ${({ footerClass }) => footerClass === 'alignRight' && `text-align: right`}
`
export const Header = styled.header`
  width: 100%;
  padding: 1rem 0.5rem;
  background: #2a006e;
  color: white;
  h2 {
    margin: 0.5rem;
  }
`
