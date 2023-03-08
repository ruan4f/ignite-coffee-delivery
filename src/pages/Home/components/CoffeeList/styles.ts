import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 7.5rem 3rem 7.5rem;
`
export const CoffeeListTitle = styled.h1`
  padding-top: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeListCards = styled.div`
  display: flex;
  padding-top: 3.5rem;
`
