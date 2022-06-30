import styled, { css } from "styled-components";

const FadeInContainer = styled.div<{ delay?: number }>`
  opacity: 0;

  animation: ${({ delay }) =>
    css`
      fadeIn 500ms ease-in ${delay || 0}ms forwards
    `};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default FadeInContainer;
