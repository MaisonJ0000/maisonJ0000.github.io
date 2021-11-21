# clone 위한 ssh 설정

rsa와 rsa.pub 생성
`ssh-keygen -t rsa -b 4096 -C "maisonj0000@gmail.com"`

github settings에 등록

~/.ssh/config 에 host 등록

```
Host github-MaisonJ0000
  HostName github.com
  User git
  IdentityFile ~/.ssh/MaisonJ0000_rsa
```

git clone 시 복사한 url을 변경

before: g clone git@github.com:organization/repo1.git

github.com이라는 호스트를 변경할 것이다.

after: g clone git@github-MaisonJ0000:organization/repo1.git
