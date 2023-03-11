import { PaymentMethodOptionsContainer } from './styles'
import { CreditCard, Money, Bank } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'

export const paymentMethods = {
  credit: {
    title: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    title: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    title: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { title, icon }]) => (
        <PaymentMethodInput
          key={title}
          id={key}
          icon={icon}
          title={title}
          value={key}
          {...register('paymentMethod')}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
