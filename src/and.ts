import { Node } from './node';

export class And extends Node {
  constructor(public readonly left: Node, public readonly right: Node) {
    super();
  }
}
