import AwardsItem from "components/AwardsItem";

import { AwardsContainer as Container } from "./styles";

const AwardsContainer = () => {
  return (
    <Container delay={400}>
      <AwardsItem count="350만 명" subject="여행자" />
      <AwardsItem count="21만 개" subject="여행 리뷰" />
      <AwardsItem count="649만 개" subject="여행 일정" />
    </Container>
  );
};

export default AwardsContainer;
