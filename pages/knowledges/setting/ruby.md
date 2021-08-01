# Ruby

## 버전 관리 with rbenv

`$ brew install rbenv ruby-build`


$ rbenv install --list
$ rbenv install 3.0.0

$ rbenv versions

`* system (set by /Users/j10k/.rbenv/version)
3.0.0
`
system으로 되어 있다.

`rbenv global 3.0.0`


vi ~/.bash_profile

### bash_profile

적용이 안되면

우선 iTerm2의 Preference -> Profiles -> Command => Send text at start
에
source ~/.zshrc

를 추가하고,

~/.zshrc에 추가하자.


eval "$(rbenv init -)" 
를 한 줄 추가
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

### zshrc의 eval문제?

zshrc는 실행된다. (zshrc에서 echo해보면 잘 출력됨)

대신 eval rbenv가 먹히지 않는다. 초기화의 문제인지.. 그래서
우선 iTerm2의 Preference -> Profiles -> Command => Send text at start
에
source ~/.zshrc
를 추가하면

한 번 더 실행이되면서 eval도 실행된다. 

대신 iterm 시작 시 조금 느려지는 것 같다.
ruby를 자주 쓰지는 않으니 그냥 필요할 떄 source ~/.zshrc를 실행하는 것으로 그치자.
