import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeCardOption,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src="/coffees/coffee-expresso.png" alt="" />
        <span>Tradicional</span>
      </CoffeeCardContent>
      <CoffeeCardContent>
        <h1>Expresso Tradicional</h1>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeCardContent>
      <CoffeeCardOption>
        <span>R$ 9,90</span>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <ShoppingCart size={28} weight="fill" />
      </CoffeeCardOption>
    </CoffeeCardContainer>
  )
}
