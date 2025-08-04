import type { Node } from './node';

const registry = {
  And: null as any,
  Or: null as any
};

export class Mixins {
  and = (other: Node) => {
    if (!registry.And) {
      registry.And = require('./and').And;
    }
    return new registry.And(this, other);
  };

  or = (other: Node) => {
    if (!registry.Or) {
      registry.Or = require('./or').Or;
    }
    return new registry.Or(this, other);
  };
}
