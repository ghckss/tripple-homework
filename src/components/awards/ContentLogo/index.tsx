import { FC } from 'react'

import { ContentImage, ContentLogoContainer, ContentText } from './styles'

const ContentLogo: FC = () => {
  return (
    <ContentLogoContainer>
      <ContentImage />
      <ContentText>2019년 2월 기준</ContentText>
    </ContentLogoContainer>
  )
}

export default ContentLogo
