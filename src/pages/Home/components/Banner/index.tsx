import {
  BannerContainer,
  BannerContent,
  BannerContentOptions,
  BannerContentSubTitle,
  BannerContentText,
  BannerContentTitle,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeImage from '../../../../assets/coffee-image.png'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerContentText>
          <BannerContentTitle>
            Encontre o café perfeito para qualquer hora do dia
          </BannerContentTitle>
          <BannerContentSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </BannerContentSubTitle>

          <BannerContentOptions>
            <span>
              <ShoppingCart size={32} weight="fill" />
              Compra simples e segura
            </span>
            <span>
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={32} weight="fill" />O café chega fresquinho até você
            </span>
          </BannerContentOptions>
        </BannerContentText>
        <div>
          <img
            src={coffeeImage}
            alt="Imagem de um café com o logo do Coffee Delivery"
          />
        </div>
      </BannerContent>
    </BannerContainer>
  )
}
