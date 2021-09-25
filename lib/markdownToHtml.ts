import { unified } from 'unified';
import remarkParse from 'remark-parse';
import stringify from 'rehype-stringify';
import remark2rehype from 'remark-rehype';

// import remarkCustom from 'remark-custom';

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    // .use(remarkCustom)
    .use(remark2rehype)
    .use(stringify)
    .process(markdown);
  return result.toString();
};

export default markdownToHtml;
