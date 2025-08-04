# nodetest

## Setup

```sh
asdf install
bun install
```

## Run Examples

### Fail Case We Want To Work

```sh
❯ bun index.ts
1 | import { Node } from './node';
2 |
3 | export class And extends Node {
                             ^
ReferenceError: Cannot access 'Node' before initialization.
      at /Users/astathis/code/nodetest/src/and.ts:3:26
      at loadAndEvaluateModule (2:1)

Bun v1.2.19 (macOS arm64)
```

### Working Case Without Imports

```sh
❯ bun onefile.ts
```
