import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;
  background-image: url('/background.svg');
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7.5rem;
  gap: 4rem;
`

export const BannerContentText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const BannerContentTitle = styled.h1`
  padding-top: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const BannerContentSubTitle = styled.h2`
  padding-top: 1rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const BannerContentOptions = styled.div`
  padding-top: 4.125rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  span {
  }
`
