import styled from "@emotion/styled";

export const DescriptionHolder = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const TextDescription = styled.p`
  color: white;
  font-size: 4.8rem;
  font-weight: bold;
  text-align: center;

  & span {
    display: block;
  }

  @media (max-width: 650px) {
    font-size: 3.6rem;
  }
`;
