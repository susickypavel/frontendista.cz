/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg";

declare module "@sanity/block-content-to-react" {
  type BlockElements =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "blockquote"
    | "code"
    | "block"
    | "image";
  type MarksElements = "link";
  export default class BlockContent extends React.Component<{
    blocks: any;
    serializers?: Partial<{
      types: Partial<Record<BlockElements, (props: any) => any>>;
      marks: Partial<Record<MarksElements, (props: any) => any>>;
      list: any;
      listItem: any;
      hardBreak: boolean;
      container: any;
    }>;
    className?: string;
    renderContainerOnSingleChild?: boolean;
    imageOptions?: any;
  }> {
    static defaultSerializers: any;
  }
}

declare module "baffle";

declare module "react-lazy-load" {
  export default class LazyLoad extends React.Component<
    Partial<{
      offsetVertical: number | string;
      offsetHorizontal: number | string;
      offsetTop: number | string;
      offsetBottom: number | string;
      offsetLeft: number | string;
      offsetRight: number | string;
      throttle: number | string;
      debounce: boolean;
      height: number | string;
      width: number | string;
      onContentVisible: Function;
    }>
  > {}
}
