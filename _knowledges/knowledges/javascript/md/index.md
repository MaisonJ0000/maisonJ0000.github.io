---
title: md 파일을 react component와 연동하기
description: md 파일을 파싱하는 부분을 살펴보고, 특정 문구에 react component로 연결하는 방법을 알아봅니다.
date: 20210928
type: draft
---

md 파일에 특정 문법을 입력하면, 이를 react component로 변환하여 그려보겠습니다.

예를 들어 md file을 아래와 같이 작성하면,
```md
:::Popover{head="md 파일이란?"}
markdown으로 이루어진 파일을 말합니다.
:::
```

이를 해석하여 react애서 아래와 같은 component로 그려주도록 하는 것입니다.

:::Popover{head="md 파일이란?"}
markdown으로 이루어진 파일을 말합니다.
:::



TODO

## Parsing

## Rehyde


