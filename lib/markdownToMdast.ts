import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

type Tree = import('unist').Node<import('unist').Data>;

function customPlugin() {
  return (tree: Tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective'
          || node.type === 'leafDirective'
          || node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {});

        // @ts-ignore
        data.hName = node.name;
        // @ts-ignore
        data.hProperties = node.attributes;
      }
    });
  };
}

const markdownToMdast = (markdown: string) => {
  const result = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(customPlugin)
    .parse(markdown);
  return result;
};

export default markdownToMdast;
