import type { Node } from './node';
import { Nodes } from './nodes';

export class Mixins {
  and = (other: Node) => new Nodes.And(this, other);
  or = (other: Node) => new Nodes.Or(this, other);
}
