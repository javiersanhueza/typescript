import fetch from 'node-fetch';

interface Employee2 {
  firstName: string;
  lastName: string;
  fullName(): string
}

let employee: Employee2 = {
  firstName: 'Theo',
  lastName: 'Sanhueza',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// employee.firstName = 10; // Error - Type 'number' is not assignable to type 'string'


// La interfaz Employee anterior también se puede expresar como un alias de tipo mediante la palabra clave type:
type Employee3 = {
  firstName: string;
  lastName: string;
  fullName(): string;
}

/*
* La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades,
* mientras que una interfaz siempre es extensible. Además, solo se puede describir una unión o tupla mediante
* un alias de tipos.
*
*/

// Extensión de una interfaz
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

let myIceCream: IceCream = {
  flavor: 'vainilla',
  scoops: 5
}
console.log(myIceCream.flavor);

const tooManyScoops = (dessert: IceCream) => {
  if (dessert.scoops >= 4) {
    return `${dessert.scoops} is too many scoops`;
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops(myIceCream));

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream2: Sundae = {
  flavor: 'vainilla',
  scoops: 2,
  sauce: 'caramel',
  whippedCream: true
}

const tooManyScoops2 = (dessert: Sundae) => {
  if (dessert.scoops >= 4) {
    return `${dessert.scoops} is too many scoops`;
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops2(myIceCream2));

// Tipos indexables
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream3: IceCreamArray;
myIceCream3 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream3[0];
console.log(myStr);

// Descripción de una API de JavaScript mediante una interfaz
const fetchURL: string = 'https://jsonplaceholder.typicode.com/posts'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (url: string) => {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

const showPost = async () => {
  let posts = await fetchPosts(fetchURL);

  let post = posts[0];
  console.log(`Post # ${post.id}`)
  console.log(`Author: ${post.userId === 1 ? 'Administrator' : post.userId.toString()}`)
  console.log(`Title: ${post.title}`)
  console.log(`Body: ${post.body}`)
}

showPost();
