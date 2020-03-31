import styled from "@emotion/styled";

export const ImageHolder = styled.div<{ aspectRatio: number }>`
  position: relative;
  padding-top: calc(${({ aspectRatio }) => aspectRatio} * 100%);
  margin-bottom: 32px;
`;

export const ImageElement = styled.img<{ zIndex: number }>(props => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: props.zIndex,
}));
