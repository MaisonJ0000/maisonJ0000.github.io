import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism';

const indexDoc = () => (
  <>
    <h1>디렉토리별로 계정을 다르게 설정하는 법</h1>
    <p>
      SSH, Secure Shell Protocol 방식으로 하려면
    </p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'vi .ssh/config\n'
      + '        - ```Host github-MaisonJ0000\n'
      + '            HostName github.com\n'
      + '            User git\n'
      + '            IdentityFile ~/.ssh/MaisonJ0000_rsa```'}
    </SyntaxHighlighter>
    <p>이 방법을 활용한다.</p>
    <p>rsa파일은 ssh-keygen 를 실행하여 만든다.</p>

    <p> 계정을 설정할 디렉토리에서 git init을 실행한 후</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      {'git config user.name MaisonJ0000\n'
      + 'git config user.email maison.J0000@gmail.com\n'}
    </SyntaxHighlighter>

    <p>아래처럼 remote-origin을 설정한다.</p>
    <SyntaxHighlighter language="jsx" style={prism}>
      github-MaisonJ0000:MaisonJ0000/Blog.git
    </SyntaxHighlighter>
  </>
);

export default indexDoc;
