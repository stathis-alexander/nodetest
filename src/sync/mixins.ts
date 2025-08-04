import { And } from './and';
import type { Node } from './node';
import { Or } from './or';

export class Mixins {
  and = (other: Node) => new And(this, other);
  or = (other: Node) => new Or(this, other);
}
