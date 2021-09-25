type Node = {
  children: Node[],
  type: string,
  value: any,
}

const getComponent = (node: Node) => {
  switch (node.type) {
    case 'root':
      // @ts-ignore
      return ({ children }) => <>{children}</>;

    case 'paragraph':
      // @ts-ignore
      return ({ children }) => <p>{children}</p>;

    case 'emphasis':
      // @ts-ignore
      return ({ children }) => <em>{children}</em>;

    case 'heading':
      // @ts-ignore
      return ({ children, depth = 2 }) => {
        const Heading = `h${depth}`;
        // @ts-ignore
        return <Heading>{children}</Heading>;
      };
    case 'text':
      // @ts-ignore
      return ({ value }) => <>{value}</>;
    case 'code':
      // @ts-ignore
      return ({ value }) => <>{value}</>;
    case 'containerDirective':
      // @ts-ignore
      return ({ value }) => <section>{value}</section>;

      /* Handle all types here … */

    default:
      // @ts-ignore
      return ({ children }) => <>{children}</>;
  }
};

const Node = (node: Node) => {
  const Component = getComponent(node);
  const { children } = node;

  return children ? (
    <Component {...node}>
      {children.map((child) => (
        <Node {...child} />
      ))}
    </Component>
  ) : (
    <Component {...node} />
  );
};

type Props = {
  mdast: Node,
}

const MarkdownRenderer = ({ mdast }: Props) => <Node {...mdast} />;

export default MarkdownRenderer;
