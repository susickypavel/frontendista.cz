import React, { Children } from "react";
import styled from "@emotion/styled";

interface Props {
  type: ListTypes;
}

type ListTypes = "number" | "bullet";

const listTypes: Record<ListTypes, "ol" | "ul"> = {
  bullet: "ul",
  number: "ol",
};

const BlockContentList: React.FC<Props> = ({ children, type }) => {
  const StyledList = styled(listTypes[type])`
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  `;

  return (
    <StyledList>
      {Children.map(children, child => {
        return child;
      })}
    </StyledList>
  );
};

interface ListItemProps {
  type: ListTypes;
  index: number;
  node: {
    listItem: ListTypes;
  };
}

export const BlockContentListItem: React.FC<ListItemProps> = ({
  children,
  index,
  node: { listItem },
}) => {
  const StyledListItem = styled.li`
    &:before {
        content: "${listItem === "bullet" ? "- " : `${index + 1}. `}";
    }
  `;

  return <StyledListItem>{children}</StyledListItem>;
};

export default BlockContentList;
