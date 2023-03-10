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
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  position: absolute;
  width: 526px;
  height: 270px;
  left: calc(50% - 526px / 2 - 297px);
  top: 296px;

  border-radius: 6px 36px;
`

export const SuccessContentOption = styled.div`
  display: flex;
  align-items: center;
`
