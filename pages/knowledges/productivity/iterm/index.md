##

- ctrl + r
  bck-i-search
  
example

  ctrl + r, blog
  cd Maison/Blog




### tmux

`gem install tmuxinator`

alias setting

alias mux="tmuxinator"

mux start blog@dev


```
...
root: ~/Maison/Blog/

windows:
- editor:
  layout: main-vertical
  # Synchronize all panes of this window, can be enabled before or after the pane commands run.
  # 'before' represents legacy functionality and will be deprecated in a future release, in favour of 'after'
  # synchronize: after
  panes:
  - npm run dev

```

요렇게 시작해봄.


