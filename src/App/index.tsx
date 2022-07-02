import { FC } from 'react'

import { AppContainer, DetailContainer } from './styles'

import {
  AwardsContainer,
  ContentLogo,
  MetricsContainer,
} from 'components/awards'

const App: FC = () => {
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
