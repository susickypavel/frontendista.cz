declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "@sanity/block-content-to-react" {
  export type Serializer = Partial<{
    types: {
      [P in "image" | "code"]?: (props: any) => JSX.Element;
    };
    marks: any;
    list: any;
    listItem: any;
    hardBreak: any;
  }>;

  export interface BlockContentProps {
    blocks: {
      [item: string]: any;
    }[];
    serializers: Serializer;
    /**
     * When more than one block is given, a container node has to be created.
     * Passing a className will pass it on to the container.
     * Note: see renderContainerOnSingleChild.
     */
    className?: string;
    /**
     * When a single block is given as input, the default behavior is to not render any container.
     * If you always want to render the container, pass true.
     */
    renderContainerOnSingleChild?: boolean;
    /**
     * When encountering image blocks, this defines which query parameters to apply in order to control size/crop mode etc.
     */
    imageOptions?: any;
    projectId?: string;
    dataset?: string;
  }

  let BlockContent: React.FC<BlockContentProps>;

  export default BlockContent;
}
