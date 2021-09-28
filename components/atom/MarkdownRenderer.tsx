import _ from 'lodash';
import Popover from './Popover';

const { Prism: SyntaxHighlighter } = require('react-syntax-highlighter');
const { prism } = require('../../node_modules/react-syntax-highlighter/dist/esm/styles/prism');

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
      return (opts) => {
        const { value, lang } = opts;
        return (
          <SyntaxHighlighter language={lang} style={prism}>
            {value}
          </SyntaxHighlighter>
        );
      };
    case 'containerDirective':
      // @ts-ignore
      return (opts) => {
        const { name, attributes, children } = opts;
        const componentMap: {[index: string]:any} = {
          Popover: {
            component: Popover,
            getProps: () => _.assign(attributes, { body: children }),
          },
        };
        const ComponentFactory = componentMap[name].component(
          componentMap[name].getProps(),
        );
        return ComponentFactory;
      };

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
