import { AppContainer, DetailContainer } from "./styles";
import {
  AwardsContainer,
  ContentLogo,
  MetricsContainer,
} from "components/awards";

function App() {
  return (
    <AppContainer>
      <ContentLogo />
      <DetailContainer>
        <AwardsContainer />
        <MetricsContainer />
      </DetailContainer>
    </AppContainer>
  );
}

export default App;
