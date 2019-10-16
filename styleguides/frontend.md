# Desarrollar Frontend

## 1. HTML

### 1.1. Semántica

HTML5 nos proporciona muchos elementos semánticos destinados a describir con precisión el contenido. Asegúrese de beneficiarse de su rico vocabulario.

```html
<!-- bad -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- good -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

Asegúrese de comprender la semántica de los elementos que está utilizando. Es peor usar un elemento semántico de manera incorrecta que permanecer neutral.

```html
<!-- bad -->
<h1>
  <figure>
    <img alt="Company" src="logo.png" />
  </figure>
</h1>

<!-- good -->
<h1>
  <img alt="Company" src="logo.png" />
</h1>
```

### 1.3. Accesibilidad

La accesibilidad no debería ser una ocurrencia tardía. No tiene que ser un experto en WCAG (Web Content Accessibility Guidelines) para mejorar su sitio web, puede comenzar de inmediato arreglando las pequeñas cosas que hacen una gran diferencia, como:

- aprendiendo a usar el atributo `alt` correctamente
- asegurándose de que sus enlaces y botones estén marcados como tales (sin atrocidades como `<div class=button>`)
- no depender exclusivamente de colores para comunicar información
- etiquetar explícitamente los controles de formulario

```html
<!-- bad -->
<h1><img alt="Logo" src="logo.png" /></h1>

<!-- good -->
<h1><img alt="Company" src="logo.png" /></h1>
```

### 1.4. Codificación de idioma y caracteres

Si bien la definición del lenguaje es opcional, se recomienda declararlo siempre en el elemento raíz.

El estándar HTML requiere que las páginas utilicen la codificación de caracteres UTF-8. Debe declararse y, aunque puede declararse en el encabezado HTTP Content-Type, se recomienda declararlo siempre a nivel de documento.

```html
<!-- bad -->
<!DOCTYPE html>
<title>Hello, world.</title>

<!-- good -->
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8" />
  <title>Hello, world.</title>
</html>
```

### 1.5. Performance

A menos que haya una razón válida para cargar sus scripts antes de su contenido, no bloquee el procesamiento de su página. Si su hoja de estilo es pesada, aísle los estilos que son absolutamente necesarios inicialmente y difiera la carga de las declaraciones secundarias en una hoja de estilo separada. Dos solicitudes HTTP son significativamente más lentas que una, pero la percepción de velocidad es el factor más importante.

```html
<!-- bad -->
<!DOCTYPE html>
<meta charset="utf-8" />
<script src="analytics.js"></script>
<title>Hello, world.</title>
<p>...</p>

<!-- good -->
<!DOCTYPE html>
<meta charset="utf-8" />
<title>Hello, world.</title>
<p>...</p>
<script src="analytics.js"></script>
```

## 2. CSS

### 2.1. Punto y coma

Si bien el punto y coma es técnicamente un separador en CSS, siempre trátelo como un terminador.

```css
/* bad */
div {
  /*color: red*/
}

/* good */
div {
  color: red;
}
```

### 2.2. Modelo de caja

El modelo de caja idealmente debería ser el mismo para todo el documento. Un global `* { box-sizing: border-box; }`está bien, pero no cambie el modelo de caja predeterminado en elementos específicos si puede evitarlo.

```css
/* bad */
div {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

/* good */
div {
  padding: 10px;
}
```

### 2.3. Flow

No cambie el comportamiento predeterminado de un elemento si puede evitarlo. Mantenga los elementos en el flujo de documentos naturales tanto como pueda. Por ejemplo, eliminar el espacio en blanco debajo de una imagen no debería hacer que cambie su visualización predeterminada:

```css
/* bad */
img {
  display: block;
}

/* good */
img {
  vertical-align: middle;
}
```

Del mismo modo, no quite un elemento del flujo si puede evitarlo.

```css
/* bad */
div {
  width: 100px;
  position: absolute;
  right: 0;
}

/* good */
div {
  width: 100px;
  margin-left: auto;
}
```

### 2.4. Posicionamiento

Hay muchas formas de posicionar elementos en CSS. Favorezca las especificaciones de diseño modernas, como Flexbox y Grid, y evite eliminar elementos del flujo de documentos normal, por ejemplo con `position: absolute`.

### 2.5. Selectores

Minimice los selectores estrechamente acoplados al DOM. Considere agregar una clase a los elementos que desea hacer coincidir cuando su selector exceda 3 pseudo-clases estructurales, descendientes o combinadores hermanos.

```css
/* bad */
div:first-of-type :last-child > p ~ *

/* good */
div:first-of-type .info
```

Evite sobrecargar sus selectores cuando no lo necesite.

```css
/* bad */
img[src$='svg'],
ul > li:first-child {
  opacity: 0;
}

/* good */
[src$='svg'],
ul > :first-child {
  opacity: 0;
}
```

### 2.6. Especificidad

No haga que los valores y selectores sean difíciles de anular. Minimice el uso de `id`'s y evite `!important`.

```css
/* bad */
.bar {
  color: green !important;
}
.foo {
  color: red;
}

/* good */
.foo.bar {
  color: green;
}
.foo {
  color: red;
}
```

### 2.7. Sobrescribir estilos

Anular estilos hace que los selectores y la depuración sean más difíciles. Evítalo cuando sea posible.

```css
/* bad */
li {
  visibility: hidden;
}
li:first-child {
  visibility: visible;
}

/* good */
li + li {
  visibility: hidden;
}
```

### 2.8. Herencia

No duplique declaraciones de estilo que puedan heredarse.

```css
/* bad */
div h1,
div p {
  text-shadow: 0 1px 0 #fff;
}

/* good */
div {
  text-shadow: 0 1px 0 #fff;
}
```

### 2.9. Brevedad

Mantenga su código conciso. Use propiedades abreviadas y evite usar varias propiedades cuando no sea necesario.

```css
/* bad */
div {
  transition: all 1s;
  top: 50%;
  margin-top: -10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
}

/* good */
div {
  transition: 1s;
  top: calc(50% - 10px);
  padding: 5px 10px 20px;
}
```

### 2.10. Idioma

Prefiera el inglés a las matemáticas.

```css
/* bad */
:nth-child(2n + 1) {
  transform: rotate(360deg);
}

/* good */
:nth-child(odd) {
  transform: rotate(1turn);
}
```

### 2.11. Prefijos

Mate los prefijos de proveedores obsoletos de forma agresiva. Si necesita usarlos, insértelos antes de la propiedad estándar.

```css
/* bad */
div {
  transform: scale(2);
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -ms-transform: scale(2);
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
}

/* good */
div {
  -webkit-transform: scale(2);
  transform: scale(2);
  transition: 1s;
}
```

### 2.12. Animaciones

Favorezca las transiciones sobre las animaciones. Evite animar otras propiedades que `opacity`y `transform`.

```css
/* bad */
div:hover {
  animation: move 1s forwards;
}
@keyframes move {
  100% {
    margin-left: 100px;
  }
}

/* good */
div:hover {
  transition: 1s;
  transform: translateX(100px);
}
```

#### 2.13. Unidades

Use valores sin unidades cuando pueda. Favor `rem` si usa unidades relativas. Prefiere segundos sobre milisegundos.

```css
/* bad */
div {
  margin: 0px;
  font-size: 0.9em;
  line-height: 22px;
  transition: 500ms;
}

/* good */
div {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  transition: 0.5s;
}
```

#### 2.14. Colores

Si necesitas transparencia, usa `rgba`. De lo contrario, use siempre el formato hexadecimal.

```css
/* bad */
div {
  color: hsl(103, 54%, 43%);
}

/* good */
div {
  color: #5a3;
}
```

#### 2.15. Dibujo

Evite las solicitudes HTTP cuando los recursos sean fácilmente replicables con CSS.

```css
/* bad */
div::before {
  content: url(white-circle.svg);
}

/* good */
div::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
```

#### 2.16. Hacks

No los uses.

```css
/* bad */
div {
  // position: relative;
  transform: translateZ(0);
}

/* good */
div {
  /* position: relative; */
  will-change: transform;
}
```

## 3. JavaScript

### 3.1. Performance

Favorecer la legibilidad, la corrección y la expresividad sobre el rendimiento. Básicamente, JavaScript nunca será su cuello de botella de rendimiento. Optimice cosas como la compresión de imágenes, el acceso a la red y los reflujos DOM en su lugar. Si recuerda solo una guía de este documento, elija esta.

```js
// bad (albeit way faster)
const arr = [1, 2, 3, 4];
const len = arr.length;
var i = -1;
var result = [];
while (++i < len) {
  var n = arr[i];
  if (n % 2 > 0) continue;
  result.push(n * n);
}

// good
const arr = [1, 2, 3, 4];
const isEven = n => n % 2 == 0;
const square = n => n * n;

const result = arr.filter(isEven).map(square);
```

### 3.2. Programación Funcional

Intenta mantener tus funciones puras. Lo ideal es que todas las funciones no produzcan efectos secundarios, no utilicen datos externos y devuelvan nuevos objetos en lugar de mutar los existentes.

```js
// bad
const merge = (target, ...sources) => Object.assign(target, ...sources);
merge({ foo: 'foo' }, { bar: 'bar' }); // => { foo: "foo", bar: "bar" }

// good
const merge = (...sources) => Object.assign({}, ...sources);
merge({ foo: 'foo' }, { bar: 'bar' }); // => { foo: "foo", bar: "bar" }
```

### 3.3. Métodos Nativos

Confíe en los métodos nativos tanto como sea posible.

```js
// bad
const toArray = obj => [].slice.call(obj);

// good
const toArray = (() => (Array.from ? Array.from : obj => [].slice.call(obj)))();
```

### 3.4. Coerción

Abraza la coerción implícita cuando tenga sentido. Evítalo de otra manera. No culto a la carga.

```js
// bad
if (x === undefined || x === null) { ... }

// good
if (x == undefined) { ... }
```

### 3.5. Bucles

No uses bucles ya que te obligan a usar objetos mutables. Confíe en los `array.prototype`métodos.

```js
// bad
const sum = arr => {
  var sum = 0;
  var i = -1;
  for (; arr[++i]; ) {
    sum += arr[i];
  }
  return sum;
};

sum([1, 2, 3]); // => 6

// good
const sum = arr => arr.reduce((x, y) => x + y);

sum([1, 2, 3]); // => 6
```

Si no puede, o si el uso de `array.prototype`métodos es posiblemente abusivo, use la recursividad.

```js
// bad
const createDivs = howMany => {
  while (howMany--) {
    document.body.insertAdjacentHTML('beforeend', '<div></div>');
  }
};
createDivs(5);

// bad
const createDivs = howMany =>
  [...Array(howMany)].forEach(() => document.body.insertAdjacentHTML('beforeend', '<div></div>'));
createDivs(5);

// good
const createDivs = howMany => {
  if (!howMany) return;
  document.body.insertAdjacentHTML('beforeend', '<div></div>');
  return createDivs(howMany - 1);
};
createDivs(5);
```

Aquí hay una [función de bucle genérico que](https://gist.github.com/bendc/6cb2db4a44ec30208e86) hace que la recursión sea más fácil de usar.

### 3.6. Argumentos

Olvídate del objeto `arguments`. El parámetro rest siempre es una mejor opción porque:

1.  se llama así que le da una mejor idea de los argumentos que la función espera
2.  Es una matriz real, lo que facilita su uso.

```js
// bad
const sortNumbers = () => Array.prototype.slice.call(arguments).sort();

// good
const sortNumbers = (...numbers) => numbers.sort();
```

### 3.7. Aplicar

Olvídate de `apply()`. Utilice el operador de propagación en su lugar.

```js
const greet = (first, last) => `Hi ${first} ${last}`;
const person = ['John', 'Doe'];

// bad
greet.apply(null, person);

// good
greet(...person);
```

### 3.8. Enlazar

No lo hagas `bind()`cuando haya un enfoque más idiomático.

```js
// bad
['foo', 'bar'].forEach(func.bind(this));

// good
['foo', 'bar'].forEach(func, this);
```

```js
// bad
const person = {
  first: 'John',
  last: 'Doe',
  greet() {
    const full = function() {
      return `${this.first} ${this.last}`;
    }.bind(this);
    return `Hello ${full()}`;
  }
};

// good
const person = {
  first: 'John',
  last: 'Doe',
  greet() {
    const full = () => `${this.first} ${this.last}`;
    return `Hello ${full()}`;
  }
};
```

### 3.9. Funciones de orden superior

Evite las funciones de anidación cuando no sea necesario.

```js
// bad
[1, 2, 3].map(num => String(num));

// good
[1, 2, 3].map(String);
```

### 3.10. Composición

Evite múltiples llamadas a funciones anidadas. Use composición en su lugar.

```js
const plus1 = a => a + 1;
const mult2 = a => a * 2;

// bad
mult2(plus1(5)); // => 12

// good
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const addThenMult = pipeline(plus1, mult2);
addThenMult(5); // => 12
```

### 3.11. Almacenamiento en caché

Pruebas de características de caché, grandes estructuras de datos y cualquier operación costosa.

```js
// bad
const contains = (arr, value) =>
  Array.prototype.includes ? arr.includes(value) : arr.some(el => el === value);
contains(['foo', 'bar'], 'baz'); // => false

// good
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value))();
contains(['foo', 'bar'], 'baz'); // => false
```

### 3.12. Variables

Favorecer `const` uso de `let`y `let` sobre `var`.

```js
// bad
var me = new Map();
me.set('name', 'Ben').set('country', 'Belgium');

// good
const me = new Map();
me.set('name', 'Ben').set('country', 'Belgium');
```

### 3.13. Condiciones

Favorezca IIFE´s y devuelva con `return` sobre las declaraciones if, else if, else.

```js
// bad
var grade;
if (result < 50) grade = 'bad';
else if (result < 90) grade = 'good';
else grade = 'excellent';
return grade;

// good
const grade = (() => {
  if (result < 50) return 'bad';
  if (result < 90) return 'good';
  return 'excellent';
})();
```

### 3.14. Iteración de objeto

Evita `for...in`cuando puedas.

```js
const shared = { foo: 'foo' };
const obj = Object.create(shared, {
  bar: {
    value: 'bar',
    enumerable: true
  }
});

// bad
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) console.log(prop);
}

// good
Object.keys(obj).forEach(prop => console.log(prop));
```

### 3.15. Objetos como mapas

Si bien los objetos tienen casos de uso legítimos, los mapas suelen ser una opción mejor y más poderosa. En caso de duda, use `Map`.

```js
// bad
const me = {
  name: 'Ben',
  age: 30
};
var meSize = Object.keys(me).length;
meSize; // => 2
me.country = 'Belgium';
meSize++;
meSize; // => 3

// good
const me = new Map();
me.set('name', 'Ben');
me.set('age', 30);
me.size; // => 2
me.set('country', 'Belgium');
me.size; // => 3
```

### 3.16. Curry

El curry es un paradigma poderoso pero extraño para muchos desarrolladores. No abuses de él, ya que sus casos de uso apropiados son bastante inusuales.

```js
// bad
const sum = a => b => a + b;
sum(5)(3); // => 8

// good
const sum = (a, b) => a + b;
sum(5, 3); // => 8
```

### 3.17. Legibilidad

No ofusque la intención de su código utilizando trucos aparentemente inteligentes.

```js
// bad
foo || doSomething();

// good
if (!foo) doSomething();
```

```js
// bad
void (function() {
  /* IIFE */
})();

// good
(function() {
  /* IIFE */
})();
```

```js
// bad
const n = ~~3.14;

// good
const n = Math.floor(3.14);
```

### 3.18. Reutilización de código

No tenga miedo de crear muchas funciones pequeñas, altamente componibles y reutilizables.

```js
// bad
arr[arr.length - 1];

// good
const first = arr => arr[0];
const last = arr => first(arr.slice(-1));
last(arr);
```

```js
// bad
const product = (a, b) => a * b;
const triple = n => n * 3;

// good
const product = (a, b) => a * b;
const triple = product.bind(null, 3);
```

### 3.19. Dependencias

Minimiza las dependencias. Los terceros son códigos que no conoce. No cargue una biblioteca completa con solo un par de métodos fácilmente replicables:

```js
// bad
var _ = require("underscore");
_.compact(["foo", 0]));
_.unique(["foo", "foo"]);
_.union(["foo"], ["bar"], ["foo"]);

// good
const compact = arr => arr.filter(el => el);
const unique = arr => [...new Set(arr)];
const union = (...arr) => unique([].concat(...arr));

compact(["foo", 0]);
unique(["foo", "foo"]);
union(["foo"], ["bar"], ["foo"]);
```
