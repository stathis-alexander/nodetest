import type { Constructor } from '../types';
import type { And } from './and';
import type { Node } from './node';
import type { Or } from './or';

const registry = {
  And: null as Constructor<And> | null,
  Or: null as Constructor<Or> | null
};

export class Mixins {
  and = (other: Node) => {
    if (!registry.And) {
      registry.And = require('./and').And;
    }
    return new registry.And!(this, other);
  };

  or = (other: Node) => {
    if (!registry.Or) {
      registry.Or = require('./or').Or;
    }
    return new registry.Or!(this, other);
  };
}
