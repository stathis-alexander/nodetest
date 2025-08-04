import type { Constructor } from "../types";
import type { And } from "./and";
import type { Or } from "./or";

export class Nodes {
  private static _And: Constructor<And> = null as any;
  private static _Or: Constructor<Or> = null as any;

  static get And() {
    if(!this._And) this._And = require('./and').And;
    return this._And;
  }

  static get Or() {
    if(!this._Or) this._Or = require('./or').Or;
    return this._Or;
  }
}
