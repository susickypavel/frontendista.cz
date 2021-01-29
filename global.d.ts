declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "@sanity/block-content-to-react" {
  export interface ContentLinkProps {
    children: React.ReactNodeArray;
    mark: {
      _key: string;
      _type: "link";
      href: string;
    };
    markKey: string;
    _type: "span";
  }

  export type Serializer = Partial<{
    types: {
      [P in "image" | "block"]?: (props: any) => JSX.Element;
    };
    marks: {
      [P in "link"]?: (props: ContentLinkProps) => JSX.Element;
    };
    list: any;
    listItem: any;
    hardBreak: any;
  }>;

  export type ContentHeadings = "h1" | "h2" | "h3" | "h4";

  export interface BlockProps {
    children: any[];
    node: {
      style: ContentHeadings | "normal" | "blockquote";
    };
  }

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

  class BlockContent extends React.Component<BlockContentProps> {
    public static defaultSerializers: any;
  }

  export default BlockContent;
}
