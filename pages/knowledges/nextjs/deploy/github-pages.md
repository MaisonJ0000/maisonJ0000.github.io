# Deploy

## Github pages

github pages로 배포를 할 수 있다.
도메인 명을 원한다면 repo명을 {USERNAME}.github.io 로 생성한다.

github의 settings에서 github pages를 설정하고 배포할 수 있는데,
branch를 master로 설정하게 되면 보통 README.md 파일이 보이는 형태로 배포가 될 것이다.

nextjs 배포의 기본 전략은, gh-pages라는 다른 branch를 두고, 이 branch에 build된 실행 소스만 커밋하는 전략이다.
그리고 github pages의 branch를 gh-pages로 설정하면 실행 소스에 대해 따로 배포가 된다.


next build 로 빌드를 하고
next export 로 ./out/ 디렉토리에 실행 소스를 생성한 후
touch out/.nojekyll 으로 _next 디렉토리 등 underbar가 prefix로 붙은 디렉토리가 github pages에서 처리하지 않도록 설정해둔다.

그리고 ./out/ 디렉토리를 gh-pages branch에 push하면 된다.
방법 중에 하나는 `npm i --save-dev gh-pages` 모듈을 이용해서 
`gh-pages -d out`
으로 push하는 방법이 있다.

### Github actions
master 머지 시 자동으로 배포가 되길 원할 것이다.
이를 gh actions로 간편하게 할 수 있다.

위의 배포과정을 동일하게 수행하면 되는데, gh-pages 모듈을 쓰는 대신에

```
- name: push .out/ to gh-pages
- run: |
  git config user.name github-actions
  git config user.email github-actions@github.com
  git --work-tree out add --all
  git commit -m "Automatic Deploy action run by github-actions"
  git push origin HEAD:gh-pages --force
```
으로 push를 하면, remote server의 git config 설정을 따로 할 필요가 없어서 간편하다.
