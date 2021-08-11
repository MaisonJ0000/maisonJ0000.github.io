# css

## center align

```
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
```

심플해보이는 방법이다.

### translate

```
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

보통 모달 등을 중앙 정렬할 때 absolute와 조합하기 편하다.


## 여백주기
wrapper에 width, margin auto를 주고 
content는 내용에 맞추는 방법

grid가 심플하지 않나


## position
### absolute
https://www.w3.org/TR/CSS2/visudet.html#containing-block-details
absolute, relative, fixed로 position이 지정된 가장 가까운 조상에 따라 설정된다.
parent에 position: relative을 설정하는 것이 일반적이다. 


## select의 padding
### appearance
```
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
```
가 없으면 padding이 동작하지 않는다. 그러나 appearance는 IE에 한정하여 동작하므로 주의.


## list
### list-style-type
```
    list-style-type: none;
```
bullet을 제거해준다. 브라우저에 따라 다양한 type을 지원한다.


## ui / modal
- modal-container를 전체 영역으로 뿌옇게 색칠하고, modal을 그 위에 그리는 형태.

## animation
### keyframes
```
animation-name: modalopen;
animation-duration: 1s;

@keyframes modalopen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```
- animation을 별도로 지정할 수 있는데 가독성이 훨씬 좋아보인다.
