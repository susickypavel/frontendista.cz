import * as React from "react";
import { useMenuSection, useSeparator } from "react-aria";

import { MenuItem } from "./menu-item";

export function MenuSection({ section, state }: any) {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section.rendered,
  });

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  return (
    <React.Fragment>
      {section.key !== state.collection.getFirstKey() && <li {...separatorProps} />}
      <li {...itemProps}>
        {section.rendered && <span {...headingProps}>{section.rendered}</span>}
        <ul {...groupProps}>
          {[...section.childNodes].map(node => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </React.Fragment>
  );
}
