import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.5rem;
`
export const SuccessContentText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const OrderInfo = styled.div`
  /* Order info */
  border: 1px solid black;
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  position: absolute;
  width: 526px;
  height: 270px;

  border-radius: 6px 36px;
`

export const SuccessContentOption = styled.div`
  display: flex;
  align-items: center;
`
