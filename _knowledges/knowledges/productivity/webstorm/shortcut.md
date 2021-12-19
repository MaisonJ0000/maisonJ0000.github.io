install vscode plugin

[modify]
(File: Open Recent)
REMOVE Refactor this ctrl + shift + r
MODIFY recent files to ctrl + shift + r
open recent: ctrl + r


(cursorHome)
move caret to line start/end: home,end


(View: Show Explorer)
Tool windows: Project: opt + 1
" : Find: opt + 2
" : Commit: opt + 3

# Navigation
REMOVE/ recent file: ctrl + r
ADD/ recent file: cmd + e
ADD/open recent: ctrl + r


## Window
REMOVE/ Split and Move Right: ctrl + cmd + rightArrow
ADD/ Move to Opposite Group: ctrl + cmd + rightArrow

# Code
## Completion
REMOVE/ Choose Lookup Item: enter

[new]
ON/view-appearance-details in tree view
ON/preferences-editor-codeStyle-Javascript-import- (scheme: default) use paths relative to project (vscode에서 "javascript.preferences.importModuleSpecifier": "non-relative",)
ON/preferences-editor-codeStyle-Typescript-import- (scheme: default) use paths relative to config (vscode에서 "typescript.preferences.importModuleSpecifier": "non-relative",)

ON/preferences-editor-codeStyle-HTML-other- Add for JSX attributes - none

ON/Editor | General | Code Completion page of the IDE settings Ctrl+Alt+S and select Suggest variable and parameter names



cmd + k, k : commit
cmd + k, p : push (remove old mapping: copy path)

ctrl + shift + z : rollback


open Project tool window: cmd + 1
selected file in Project: shift + cmd + 1

open Commit tool window: cmd + 2


# Navigation

jump to edit source :
    Plugins-FTP/SFTP Connectivity-Edit Local File: cmd + downArrow

Goto Next Splitter: opt + 1, opt + 2

# lint
fix eslint problems: cmd + ;


# Edit
## Move

REMOVE/ join line: ctrl + J
REMOVE/ scroll to center: ctrl + L
REMOVE/ delete to line end: ctrl + K

ADD/ move caret to next word: ctrl + L
ADD/ move caret to next word: with selection: ctrl + shift + L
ADD/ move caret to prev word: ctrl + J
ADD/ move caret to prev word: with selection: ctrl + shift + J
ADD/ DOWN: ctrl + K
ADD/ UP: ctrl + I


## Select
ADD/ extend selection: ctrl + shift + I, ctrl + shift + upArrow
ADD/ shrink selection: ctrl + shift + K, ctrl + shift + downArrow


[nature]

## edit

### watch info
opt + space   OR   opt + f12 : Quick Definition

### edit
shift + opt + downArrow: duplicate line down
