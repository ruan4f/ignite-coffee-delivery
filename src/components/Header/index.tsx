import { NavLink } from 'react-router-dom'
import { CartLink, CartLocation, HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Home">
          <CartLocation>
            <MapPin size={20} />
            Porto Alegre
          </CartLocation>
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <CartLink>
            <ShoppingCart size={20} />
          </CartLink>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
