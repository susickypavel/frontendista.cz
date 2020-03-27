import styled from "@emotion/styled";

export const SplitterSVG = styled.svg`
  border-left: 2px solid rgba(33, 33, 33, 0.75);
  border-right: 2px solid rgba(33, 33, 33, 0.75);
  padding: 12px;
  height: calc(100vh - 24px);
  padding-right: 11px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const WrappedSplitterSVG = styled.svg`
  border-top: 2px solid rgba(33, 33, 33, 0.75);
  border-bottom: 2px solid rgba(33, 33, 33, 0.75);
  padding: 12px;
  width: calc(100% - 24px);

  display: none;
  @media (max-width: 1000px) {
    display: inherit;
  }
`;
