import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import stringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkRehype)
    .use(stringify)
    .process(markdown);
  return result.toString();
};

export default markdownToHtml;
