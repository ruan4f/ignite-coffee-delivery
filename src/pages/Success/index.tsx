import {
  OrderInfo,
  SuccessContainer,
  SuccessContentOption,
  SuccessContentText,
} from './styles'

import deliveryImage from '../../assets/delivery-image.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <SuccessContentText>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessContentText>
        <OrderInfo>
          <SuccessContentOption>
            <span>Entrega em Rua João Daniel Martinelli, 102</span>
            <span>Farrapos - Porto Alegre, RS</span>
          </SuccessContentOption>
          <SuccessContentOption>
            <span>Previsão de entrega</span>
            <span>20 min - 30 min </span>
          </SuccessContentOption>
          <SuccessContentOption>
            <span>Pagamento na entrega</span>
            <span>Cartão de Crédito</span>
          </SuccessContentOption>
        </OrderInfo>
      </div>
      <div>
        <img src={deliveryImage} alt="" />
      </div>
    </SuccessContainer>
  )
}
