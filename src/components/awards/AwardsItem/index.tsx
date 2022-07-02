import { FC, PropsWithChildren } from "react";
import { AwardsItemContainer } from "./styles";

const AwardsItem: FC<PropsWithChildren> = ({ children }) => {
  return <AwardsItemContainer>{children}</AwardsItemContainer>;
};

export default AwardsItem;
