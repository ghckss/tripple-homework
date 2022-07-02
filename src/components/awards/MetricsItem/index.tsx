import { FC } from "react";

import { MetricImage, MetricsItemContainer, MetricText } from "./styles";
import { MetricsItemProps } from "./types";

const newlineToBr = (text: string) => {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};

const MetricsItem: FC<MetricsItemProps> = ({ image, text }) => {
  return (
    <MetricsItemContainer>
      <MetricImage src={image} />
      <MetricText>{newlineToBr(text)}</MetricText>
    </MetricsItemContainer>
  );
};

export default MetricsItem;
