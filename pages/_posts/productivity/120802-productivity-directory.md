---
title: directory 별로 repository command 관리하기
description: directory 별로 나뉜 project마다 저마다의 명령어가 있는데 생각이 안나 package.json을 열어보시나요? directory alias를 쉽게 설정하는 법과 프로젝트의 작업 환경을 명령어로 즉시 열 수 있는 방법을 알아봅니다.
tags: directory, iTerm2, zsh, direnv, zshrc, quick directory alias, intellij, terminal, tmux, tmuxinator
date: 20210802
---

# Needs

markdown
![Amazon Rainforest](/path/to/image)

<span class="caption">The [Amazon Rainforest](https://en.wikipedia.org/wiki/Amazon_rainforest) contains a multitude of species.</span>

(macOS)  
- iTerm2에서 directory마다 변수를 설정하거나 조회할 수 있고, command를 변수에 담아서 바로 실행할 수 있도록 합니다.
- iTerm2에서 명령어를 통해 현재 directory에서 IntelliJ를 바로 엽니다.
- directory를 변경하지 않고 원하는 프로젝트의 작업환경을 바로 엽니다.

# [direnv](https://direnv.net/)

direnv의 원래 용도는 환경변수를 directory별로 관리하는 것이 목적입니다.

본 글에서는 directory마다 변수를 설정하거나 조회할 수 있고, command를 변수에 담아서 바로 실행하는 용도로 활용하려고 합니다.

direnv는 shell의 확장기능입니다.

- [용어사전: shell] 문자열로 된 명령어를 입력하면 이를 해석하여 운영체제의 기능과 서비스를 구현할 수 있도록 하는 인터페이스입니다.
macOS의 경우 bash가 기본 shell이었는데, 특정 버전 이후로 zsh로 변경되었습니다.

저는 zsh를 사용하고 있어 적용하였습니다.

## Expected Usage

```zsh
# 디렉토리 진입 시 자동으로 variable들을 알려줍니다.
$ cd ~/project-a
direnv: loading ~/project-a/.envrc
direnv: export +dev +test

# 등록한 command를 바로 실행할 수 있습니다.
$ eval $dev
dev start...
...
```

## Setup (macOS)

```zsh
$ brew install direnv
```

```zsh
$ direnv version
2.27.0
```

각 shell마다 extention mechanism이 다르기 때문에 hook을 실행해줘야 비로소 동작합니다.
`~/.zshrc` 에 다음을 추가합니다.
- [용어사전: .zshrc] Run Command의 줄임말으로, zsh가 시작할 때 실행됩니다.

```
eval "$(direnv hook zsh)"
```

기본적인 설치는 끝입니다. 이제 변수 등록을 해보겠습니다.

```zsh
$ direnv edit .
```

```
export dev='npm run dev'
export test='npm run test'
```

.envrc에 대해 의도치않게 동작하는 경우를 막기 위해 default로 deny 설정이 걸려있습니다.
따라서 이를 allow해줍니다.

```zsh
$ direnv allow
direnv: loading ~/project-a/.envrc
```

등록한 변수들은 다음과 같이 조회하고 command를 실행할 수 있습니다.

```zsh
$ echo $dev
npm run dev
$ eval $dev
dev start...
...
```

# advanced quick directory alias

쉘 스크립트 중에서 [quick-directory-alias](https://github.com/mcwoodle/shell-directory-management)
를 조금 수정하여 사용하는 [advanced-quick-directory-alias](https://github.com/dakoo/shell-directory-management) 를 발견하였습니다.
(http://hochulshin.com/quick-directory-alias/)

여기서 intellij IDEA를 alias directory에 대해 바로 실행하는 부분이 매력적이어서 활용하려고 합니다.

물론 alfred workflow 이용해서 경로를 입력하여 바로 실행하거나, 간단한 스크립트로 현재 디렉토리에서 여는 방법도 있습니다
(https://cron-tab.github.io/2018/01/09/ide-intellij-open-current-path-from-terminal/).

터미널로 경로 검색을 하다가 필요한 경우 alias를 current directory에 손쉽게 설정할 수 있는 점과,
이미 등록된 alias는 current directory에 관계없이 바로 열 수 있는 점이 장점입니다.

## Expected Usage
```zsh
$ d e project-a ij
```

## Setup
[스크립트](https://github.com/dakoo/shell-directory-management/blob/master/quick-directory-aliases.sh) 
를 다운로드 받습니다.

저는 oh-my-zsh를 설치한 관계로 비록 oh-my-zsh의 tool은 아니지만 제가 나중에 기억해서 찾을 수 있도록
`/Users/j10k/.oh-my-zsh/tools` 에 다운을 받았습니다.

그리고 해당 스크립트를 `.zshrc`에서 실행시켜줍니다.

```
export ZSH="/Users/j10k/.oh-my-zsh"

source $ZSH/tools/quick-directory-aliases.sh
```

그러면 기본적인 설치는 끝입니다.

## Usage

current directory에 대한 alias 추가는 다음과 같습니다.
```zsh
$ d
```

alias 목록 조회 및 이동은 다음과 같습니다.
```zsh
$ d
pr-a = /Users/j10k/project-a -> this is project a.
pr-b = /Users/j10k/project-b -> this is project b.

$ d pr-a
# /Users/j10k/project-a 로 이동
```

alias directory를 intellij IDEA로 열 수 있습니다.
```zsh
$ d e pr-a ij
# /Users/j10k/project-a를 intellij에서 열어준다.
```

`no such file or directory: /usr/local/bin/idea`
문구를 마주치는 경우 intellij의 설치 경로를 확인하여 스크립트를 변경해주어야 합니다.

저는 경로가 `/Users/j10k/Library/Application\ Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.6682.168/IntelliJ\ IDEA.app/Contents/MacOS/idea`
으로 설정되어 있었습니다.

(Dock에서 intellij 아이콘을 Finder로 열어 경로를 확인했습니다.)


advanced-quick-directory-alias.sh의 190 line을 수정해줍니다.

```
case "$2" in
    ij) /Applications/IntelliJ\ IDEA.app/Contents/MacOS/idea $_d_cmd;;
    st) stree $_d_cmd;;
    op) open $_d_cmd;;
    *) "$2" $_d_cmd;;
```

스크립트를 한 번 실행시켜줍니다.
```zsh
$ source ~/.zshrc
```

alias directory를 intellij IDEA로 열 수 있습니다.
```zsh
$ d e pr-a ij
cd /Users/j10k/project-a
2021-08-02 22:55:08.493 idea[51923:1815024] allVms required 1.8*,1.8+
...
```

# [tmux](https://github.com/tmux/tmux/wiki), [tmuxinator](https://github.com/tmuxinator/tmuxinator)

tmux는 terminal multiplexer입니다.
- [용어사전: multiplexer] 여러 입력 중 하나를 선택하여 하나의 라인에 전달하는 장치

즉 여러 terminal session을 관리하고, 그 중에 원하는 session에 접속할 수 있게 합니다.

session은 여러 개의 pane으로 구성할 수 있어서 한 프로젝트에 대해 창을 여럿 배치하여 관리할 때 효과적입니다. 

tmuxinator는 tmux의 설정을 기록해두고 multiplexing 기능을 손쉽게 사용할 수 있게 도와줍니다.

이 둘을 이용하면 원하는 프로젝트의 작업환경을 간단한 명령어로 열 수 있습니다.

## Expected Usage 
```zsh
$ mux start blog@dev
# 세션이 열리며 기본으로 설정해두었던 명령어를 바로 실행합니다.
cd /Users/j10k/Maison/Blog
npm run dev
```

## Setup
### tmux 
```zsh
brew install tmux
```

`~/.zshrc`에 다음과 같이 plugin을 추가합니다.
```
plugins=(
    ...
    tmux
)
```

tmux에서 마우스 스크롤이 동작하지 않는 경우 아래 설정을 추가합니다.

```zsh
$ vi ~/.tmux.conf
```

```
set -g mouse on
```

[사용 팁]

마우스 드래그로 selection할 때에는 opt를 누른 채로 드래그하면 됩니다.

iTerm2의 경우
`preference-general-"Applications in terminal may access clipboard:"`
를 체크해주면 됩니다.

### tmuxinator
```zsh
$ gem install tmuxinator
```

<!-- TOGGLE -->
### (잠시) rbenv

ruby가 설치되어 있지 않다면 rbenv를 이용해 설치하고 버전관리를 해주면 좋습니다.
```
$ brew install rbenv ruby-build
$ rbenv install --list
$ rbenv install 3.0.0
$ rbenv versions
`* system (set by /Users/j10k/.rbenv/version)
3.0.0
```

`~/.zshrc`에 다음을 추가합니다.
```
eval "$(rbenv init -)" 
```

그런데 제 경우는 터미널이 시작할 때 ~/.zshrc의 다른 line들은 잘 동작하나 `eval "$(rbenv init -)"` 만 잘 동작하지 않는 것 같았습니다.
(echo로 확인)
그래서 해결책을 찾기 전 까지는 `source ~/.zshrc` 로 터미널이 열린 뒤에 한 번 더 실행시켜 ruby 버전을 적용해주려고 합니다.

iTerm2의 `Preference -> Profiles -> Command => Send text at start` 에
`source ~/.zshrc` 를 추가하는 방법도 있지만 시작 시 조금 느려집니다.

### (다시) tmuxinator

설치 후에는 alias 설정을 해줍시다.
`~/.zshrc`에 다음을 추가합니다.
```
alias mux="tmuxinator"
```

## Usage

블로그의 개발 환경을 등록해놓으려고 합니다.

```zsh
mux new blog@dev
```

`/Users/j10k/.config/tmuxinator/blog@dev.yml` 파일을 열어주며, `new` 키워드로 yml 파일 생성 뿐만 아니라 편집 또한 가능합니다.

저는 tmux에 대해 초보여서 pane 하나의 매우 간단한 구성만 해보았습니다.

```
name: blog@dev
root: ~/Blog/

windows:
  - editor:
      layout: main-vertical
      panes:
        - npm run dev
```

이제 아래 명령어로 tmux 세션을 바로 열 수 있고, 등록한 command가 세션 시작시 실행됩니다.
```zsh
mux start blog@dev
```
