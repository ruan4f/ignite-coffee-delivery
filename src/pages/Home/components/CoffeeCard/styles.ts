import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  height: 20rem;
  left: 0px;
  top: 0px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
`

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CoffeeCardOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
