## import


## Symbol

```
const a = {};
a[Symbol('save')] = '날아가면 안되는 정보';
a['save'] = 44;
a[Symbol('save')] = '심지어 이런식이라도';
a // { save: 44, [Symbol(save)]: '날아가면 안되는 정보', [Symbol(save)]: '심지어 이런식이라도' }

```
