## import


## Symbol

```
const a = {};
a[Symbol('save')] = '날아가면 안되는 정보';
a['save'] = 44;
a[Symbol('save')] = '심지어 이런식이라도';
a // { save: 44, [Symbol(save)]: '날아가면 안되는 정보', [Symbol(save)]: '심지어 이런식이라도' }

```


## 히든 클래스
자바스크립트는 클래스 없이 객체를 생성할 수 있고, 생성된 이후에도 동적으로 프로퍼티와 메서드를 추가할 수 있다.
그래서 객체의 프로퍼티에 접근하려면 dynamic lookup을 해야하니 느린가?

그렇지 않다. 히든 클래스라는 개념이 있다.

https://v8.dev/blog/fast-properties

우선, Array-indexed properties, 즉 [1, 2, 3] 이나 {1: "a", 2: "b"} 같은 것은 순차적으로 정보를 담을 수 있다.
따라서 elements store (in JS Object) 에 저장한다.
named properties들은 properties store 에 저장한다. 여기에는 히든 클래스가 적용된다.
히든 클래스에는 bit field들이 존재하고 이에는 property의 수와 descriptor array를 가리키는 포인터가 존재한다.
property가 추가될 때마다 히든 클래스가 transform된다. object의 shape을 기억하는 형태로 바뀐다고 생각하면 쉽다.

요약해보면 정적 lookup은 메모리 오프셋을 가지고 있는데, 동적 lookup은 메모리 오프셋을 모르기 때문에
히든 클래스에 프로퍼티가 변경될 때 마다 메모리 오프셋을 업데이트하는 형태이다. transform은
처음에 할당된 히든 클래스가 바뀌는 형태가 아니라, 히든 클래스 C1 => C2 => C3로 계속 새로 생성되며 이 참조 연결고리가 변경되는 형태이다.

https://engineering.linecorp.com/ko/blog/v8-hidden-class/

여기서 크롬에서 메모리 id 확인하는 방법은 다음에도 유용하게 쓸 것 같다.
