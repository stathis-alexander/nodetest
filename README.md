# Circular Classes

An collection of examples of circular class dependencies in `bun` and `typescript`. In all three cases intellisense
works as expected, but in the naive synchronous import fase, `bun` panics with a reference error:
```sh
ReferenceError: Cannot access 'Node' before initialization.
```

## Setup

```sh
asdf install
bun install
```

## Run Examples

### Fail Case We Want To Work

```sh
❯ bun sync.ts
1 | import { Node } from './node';
2 |
3 | export class And extends Node {
                             ^
ReferenceError: Cannot access 'Node' before initialization.
      at /Users/astathis/code/nodetest/src/and.ts:3:26
      at loadAndEvaluateModule (2:1)

Bun v1.2.19 (macOS arm64)
```

Naively importing classes from several files does not work since `bun` will do DFS on the dependencies and then sort
them in reverse by depth, causing the `Mixins` class to be defined last.

### Working Case: Single File

```sh
❯ bun singleFile.ts
Success!
```

However, defining all the classes in a single file works as you'd expect, so long as you define the classes in the
appropriate order.


### Working Case: Lazy Imports

```sh
❯ bun lazy.ts
Success!
```

A workaround is to implement a lazy loading pattern, as seen in `lazy.ts`.
