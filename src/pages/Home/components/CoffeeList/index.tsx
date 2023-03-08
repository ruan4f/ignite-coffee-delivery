import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListCards, CoffeeListContainer, CoffeeListTitle } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Nossos Cafés</CoffeeListTitle>
      <CoffeeListCards>
        <CoffeeCard />
      </CoffeeListCards>
    </CoffeeListContainer>
  )
}
