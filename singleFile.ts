
import { Node } from './src/singleFile'

const x = new Node();
const y = new Node();

x.and(y).or(x);


console.log('Success!');
