import AwardsItem from "components/AwardsItem";
import useCounter from "hooks/useCounter";

import { AwardsContainer as Container } from "./styles";

const AwardsContainer = () => {
  const travelerCount = useCounter(350);
  const reviewCount = useCounter(21);
  const planCount = useCounter(649);

  return (
    <Container delay={400}>
      <AwardsItem count={`${travelerCount}만 명`} subject="여행자" />
      <AwardsItem count={`${reviewCount}만 개`} subject="여행 리뷰" />
      <AwardsItem count={`${planCount}만 개`} subject="여행 일정" />
    </Container>
  );
};

export default AwardsContainer;
