import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 7.5rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      text-decoration: none;
    }
  }
`

export const CartLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  height: 2.375rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.purple};
  font-size: 0.825rem;
  line-height: 130%;

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
  }
`

export const CartLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 130%;
`
