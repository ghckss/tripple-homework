import AwardsItem from "components/AwardsItem";

import { AwardsContainer as Container } from "./styles";

const AwardsContainer = () => {
  return (
    <Container>
      <AwardsItem count="700만 명" subject="여행자" />
      <AwardsItem count="100만 개" subject="여행 리뷰" />
      <AwardsItem count="470만 개" subject="여행 일정" />
    </Container>
  );
};

export default AwardsContainer;
