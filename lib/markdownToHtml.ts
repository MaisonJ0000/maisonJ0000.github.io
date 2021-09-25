import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkCustom from 'remark-custom';
import stringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

// import remarkCustom from 'remark-custom';

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkCustom)
    .use(remarkRehype)
    .use(stringify)
    .process(markdown);
  return result.toString();
};

export default markdownToHtml;
