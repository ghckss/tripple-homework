import { MetricsContainer as Container } from "./styles";
import { MetricsItem } from "components/awards";

import PlayStoreLogo from "resources/play-store2x.png";
import AppleLogo from "resources/badge-apple4x.png";

const MetricsContainer = () => {
  return (
    <Container delay={800}>
      <MetricsItem
        image={PlayStoreLogo}
        text={"2018 구글 플레이스토어\n올해의 앱 최우수상 수상"}
      />
      <MetricsItem
        image={AppleLogo}
        text={"2018 애플 앱스토어\n오늘의 여행앱 선정"}
      />
    </Container>
  );
};

export default MetricsContainer;
