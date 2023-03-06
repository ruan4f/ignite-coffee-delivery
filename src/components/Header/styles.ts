import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 7.5rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const CartLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  height: 2rem;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.825rem;
  line-height: 130%;
`

export const CartLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  width: 2rem;
  height: 2rem;
  padding: 8px;
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 130%;
`
