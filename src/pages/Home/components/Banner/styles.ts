import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34rem;
  background-image: url('/background.svg');
  background-size: cover;
`

export const BannerContent = styled.div`
  max-width: 90rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7.5rem;
  gap: 4rem;

  div {
    img {
      padding-top: 6rem;
    }
  }
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
  font-size: 3rem;
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
`

export const BannerContentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
interface BannerContentOptionSvgProps {
  variant: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
}

export const BannerContentOptionSvg = styled.div<BannerContentOptionSvgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.variant]};
`
