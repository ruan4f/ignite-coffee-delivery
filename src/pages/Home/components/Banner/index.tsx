import {
  BannerContainer,
  BannerContent,
  BannerContentOption,
  BannerContentOptionSvg,
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
            <BannerContentOption>
              <BannerContentOptionSvg variant="yellow-dark">
                <ShoppingCart size={24} weight="fill" />
              </BannerContentOptionSvg>
              <span>Compra simples e segura</span>
            </BannerContentOption>

            <BannerContentOption>
              <BannerContentOptionSvg variant="base-text">
                <Package size={24} weight="fill" />
              </BannerContentOptionSvg>
              <span>Embalagem mantém o café intacto</span>
            </BannerContentOption>

            <BannerContentOption>
              <BannerContentOptionSvg variant="yellow">
                <Timer size={24} weight="fill" />
              </BannerContentOptionSvg>
              <span>Entrega rápida e rastreada</span>
            </BannerContentOption>

            <BannerContentOption>
              <BannerContentOptionSvg variant="purple">
                <Coffee size={24} weight="fill" />
              </BannerContentOptionSvg>
              <span>O café chega fresquinho até você</span>
            </BannerContentOption>
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
