import styled from 'styled-components'
import Card from '../../shared/components/UIElements/Card'

export const Caption = styled.h2`
  text-align: center;
`

// export const authentication__header = styled.header`
//   color: white;
//   text-align: center;
// `

export const Authentication = styled(Card)`
  width: 90%;
  max-width: 25rem;
  margin: 7rem auto;
  text-align: center;

  form {
    margin-bottom: 1rem;
  }
`
