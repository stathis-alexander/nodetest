import { Node } from './node';

export class Or extends Node {
  constructor(public readonly left: Node, public readonly right: Node) {
    super();
  }
}
