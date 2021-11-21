import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism';

const indexDoc = () => (
  <>
    <h1>링크</h1>
    <p>기본적으로</p>

    <p>pages 디렉토리 내부의 hierarchy로 url 변경을 통한 페이지 접근이 가능하다. 하지만  </p>
    <p>network tab을 살펴보면 redirect를 하면서 모든 resource를 다시 받는 것을 알 수 있다. </p>
    <p>즉 SSR이 원하는 대로 구현되고 있지 않다.</p>
    <p>nextJs는</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'import Link from \'next/link\';'}
    </SyntaxHighlighter>
    <p>를 제공한다.</p>
    <p>이를 활용하면 redirect때도 서버에 재요청을 하지 않는다.</p>
    <p>내부적으론</p>
    <a href="https://reactrouter.com/web/api/StaticRouter">Static Router</a>
    <p>를 활용하는 형태가 아닐까 추측한다.</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'<a href> hi </a>'}
    </SyntaxHighlighter>

    <h1>Trouble Shootings</h1>
    <h3>import 이슈</h3>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'import { prism } from \'react-syntax-highlighter/dist/esm/styles/prism\';'}
    </SyntaxHighlighter>
    <p>와 같은 형태로 import를 하면</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'Unexpected token \'export\''}
    </SyntaxHighlighter>
    <p> 으로 500 에러가 난다.</p>
    <p> 참조 경로의 문제라는 </p>
    <a href="https://github.com/vercel/next.js/issues/883">이야기</a>
    <p>가 있어서</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'import { prism } from \'../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism\';'}
    </SyntaxHighlighter>
    <p>으로 해결을 해 두었다.</p>
  </>
);

export default indexDoc;
