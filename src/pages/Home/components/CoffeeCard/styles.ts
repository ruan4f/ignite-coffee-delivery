import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  height: 20rem;
  left: 0px;
  top: 0px;

  /* Base/Card */
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
`
