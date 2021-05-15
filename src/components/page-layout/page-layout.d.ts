import { ReactHTML } from "react";

export interface PageLayoutProps {
  /**
   * Title of the page the component encloses.
   */
  title: string;
  /**
   * Optional element that encloses content of the page.
   */
  wrapper?: {
    element: keyof ReactHTML;
    /**
     * Whitespace-separated list of classes styled by CSS.
     */
    classes: string;
  };
}
