import styled from 'styled-components'

import { FadeInContainer } from 'components/common'
import Logo from 'resources/triple2x.png'

export const ContentLogoContainer = styled(FadeInContainer)`
  position: relative;
  width: 400px;
  height: 338px;
`

export const ContentImage = styled.img.attrs(() => ({ src: Logo }))`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const ContentText = styled.div`
  position: absolute;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  width: 100%;
  top: 280px;
`
