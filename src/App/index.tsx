import React from 'react'

import { AppContainer, DetailContainer } from './styles'
import { AwardsContainer, ContentLogo, MetricsContainer } from 'components'

function App() {
  return (
    <AppContainer>
      <ContentLogo />
      <DetailContainer>
        <AwardsContainer />
        <MetricsContainer />
      </DetailContainer>
    </AppContainer>
  )
}

export default App
