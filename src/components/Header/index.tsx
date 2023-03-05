import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <MapPin size={24} />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
