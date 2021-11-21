---
title: typescript relation
type: draft
description: directory 별로 나뉜 project마다 저마다의 명령어가 있는데 생각이 안나 package.json을 열어보시나요? directory alias를 쉽게 설정하는 법과 프로젝트의 작업 환경을 명령어로 즉시 열 수 있는 방법을 알아봅니다.
tags: directory, iTerm2, zsh, direnv, zshrc, quick directory alias, intellij, terminal, tmux, tmuxinator
date: 20210918
---


### 서브타입

배열이 객체의 서브타입이었나?
object를 상속해서 index를 key로 하는 형태로 구현되어 있나보다.
실제로 console을 출력해보아도 그러하다.

Animal을 상속받는 Bird 클래스가 있으면 Bird는 Animal의 서브타입이고,
이러면 Animal이 필요한 곳에는 Bird클래스를 사용할 수 있다.


### 조건부 타입

```
  type IsString<T> = T extends string
  ? true
  : false
  
  type A = IsString<string> // true
  type B = IsString<number> // false
```

T는 제네릭 타입이다.

T extends string 이라는 '조건'이다.
T 는 string의 서브타입인가? 이라는 의미.
T가 string을 extends 할 수 있는지 검사하는 구문이며, 이런 구문이 더 있을 것이다.

(string | number) extends T ? A : B
는 어떻게 될까?

T가 string도 되고, number도 되는 범위보다 커야 할 것이다.

뭐야 이거 답을 보니 이해가 안되는데?

(string extends T ? A : B) | (number extends T ? A : B)
와 같다고 한다.

아, union type을 봐야할 것 같은데.
T가 string이면

A | B 인거잖아.

수학적으로 make sense인가?

if (S U N) < T then A
if (S U N) !< T then B

예시로 살펴보자.

type ToArray<T> = T[]
type A = ToArray<number>
type B = ToArray<number | string> 

이건 직접 돌려보자.


돌려본 뒤 제네릭이 어떤 형태로 최종 타입을 갖는지 확인을 못하겠다.
방법을 나중에 알아봐야 할 것 같다.

type ToArray<T> = T[]
type A = ToArray<number> // number[]
type B = ToArray<number | string>  (number | string)[]

type ToArray2<T> = T extends unknown ? T[] : T[]
type A = ToArray2<number> // number[]
type B = ToArray2<number | string> // number[] | string[]

왜 이렇게 되는지는 전혀 모르겠지만, 원하는 output을 위해 활용할 수는 있을 것 같다.

예시를 해 보아야 습득할 것 같다.



