import styled, { css } from 'styled-components'

export const StyledInput = styled.div`
  margin: 1rem 0;
  label,
  input,
  textarea {
    display: block;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    background: #f8f8f8;
    padding: 0.15rem 0.25rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }

  ${(props) =>
    props.invalid &&
    css`
      label,
      p {
        color: red;
      }
      input,
      textarea {
        border-color: red;
        background: #ffd1d1;
      }
    `}
`
