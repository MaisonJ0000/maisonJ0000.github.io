### direnv

brew install direnv

hook 설정

eval "$(direnv hook zsh)"
in .zshrc

direnv 설정

```
export dev="npm run dev"
```

eval $dev

### quick directory alias

.zshrc

source $ZSH/tools/quick-directory-aliases.sh
추가

intellij 실행하기

# plugins

after oh my zsh install

`git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions`

`git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting`

설치 이후에
~/.zshrc

```
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

# vim

~/.vimrc

```
set autoindent " 자동 들여쓰기
" set nu " 줄 번호
set ts=2 " 탭 select
set shiftwidth=2 " 자동 들여쓰기 너비
set showmatch " 일치하는 괄호 하이라이팅
set laststatus=2 " 상태바 표시 항상
set ruler " 현재 커서 위치 표시

" Syntax Highlighting
if has("syntax")
    syntax on
endif
```
