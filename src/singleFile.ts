class Mixins {
  and = (other: Node) => new And(this, other);
  or = (other: Node) => new Or(this, other);
}

export class Node extends Mixins {}

class And extends Node {
  constructor(public readonly left: Node, public readonly right: Node) {
    super();
  }
}

class Or extends Node {
  constructor(public readonly left: Node, public readonly right: Node) {
    super();
  }
}
