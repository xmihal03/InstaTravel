import styled, { css } from 'styled-components'

export const Preview = styled.div`
  img {
    width: 100%;
  }
`
export const ImageUploadWrapper = styled.div`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
