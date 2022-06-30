import { FC } from "react";
import { AwardsItemContainer } from "./styles";
import { AwardsItemProps } from "./types";

const AwardsItem: FC<AwardsItemProps> = ({ count, subject }) => {
  return (
    <AwardsItemContainer>
      <strong>{count}</strong>의 {subject}
    </AwardsItemContainer>
  );
};

export default AwardsItem;
