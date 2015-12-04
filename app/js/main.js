"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
     
var oldVnode = document.getElementById('placeholder');

var style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px' };
var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px' };
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '18px' };
var style2h = style1;
var style4 = style2;
var style4h = style1;
var style0 = style2;
var style5 = style2;

function view(name1, name2) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%'}}, 
    [ h('h2', {style: {textAlign: 'center'}}, 'Fun With Monads'),
      h('span', 'I have a project named "Javascript Monads" with a detailed online demo at '),
      h('a', {props: {href: 'http://transcendent.ninja' },  style: {color: '#EEAAFF'}},' demo'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk/javascript-monads'}, style: {color: '#EEAAFF'}}, ' repo' ),
      h('span', '. The demonstration site functions well, but it is bloated with React. I say "bloated" because I don\'t use most of its core features. The monads I demonstrate are not in the state object, and updates are accomplished by calls to React.forceUpdate. This site uses snabbdom ' ),
      h('a', {props: {href: 'https://github.com/paldepind/snabbdom'}, style: {color: '#EEAAFF'}}, 'snabbdom' ),
      h('span', '. It is a pleasure to work with, but I have yet to discover or figure out how to insert markdown or override the default link color. But the links are at least visible, and the code is online with the demos at '),
      h('a', {props: {href: 'http://transcendent.ninja' }, style: {color: '#EEAAFF'}}, 'demo'), 
      h('span', '. If you happen to be reading the source code, it might interest you to know that this app is running online at ' ),
      h('a', {props: {href: 'http://schalk.net:4001'}, style: {color: '#EEAAFF'}}, 'fun_with_monads' ),
      h('span', '. If you have developer mode set up in Firefox or Chrome, you will find that you have access to all of the monads and functions being used here plus more. They are in a script in the index.html file.' ), 
      h('p', 'This project is not about category theory. I think the monads along with all morphisms among them using "bnd" and "ret" constitute a mathematical category. I\'ll show that "ret" is the left and right identity, and that the order of evaluation of composed monads does not affect the result. That is the Haskell definition. But these monads can perform any operation allowed by javascript, so referential transparency is not enforced. A subset using only pure functions and immutable data could, and probably will be defined, but not now.'),
     h('p', 'This project has a simple monad constructor called "Monad", and a more elaborate one that can take control over the order of execution of monad trees, and can also facilitate iterating through sequences step by step. I\ll start with the simple one.'),
      h('p', 'Each monad has a value "x", which can be any javascript value, including array, object, or even the monad which holds it. The latter monad seems utterly useless since its value is an infinitely telescoping monad, within a monad, within a monad, within ... Creating it doesn\'t throw and error. Constraints can come later when DSL\'s are created. Right now they are a very versitile means of processing information through linked trees of chains, or \"pipes\" for another analogy. ' ),
      h('p', 'The methods bnd and ret are defined as follors: '),
      h('span', 'this.bnd = (func, ...args) => { ' ),
      h('br', ),
      h('div', {style: {marginLeft: '14px'}}, ' return func(this.x, this, ...args); ' ),
      h('span', '}' ), 
      h('br', ),
      h('br', ),
      h('div', 'this.ret = a => {' ),
      h('div', {style: {marginLeft: '14px'}}, ' this.x = a; ' ),
      h('div', {style: {marginLeft: '14px'}}, ' return this; ' ),
      h('div', '}' ),
      h('p', 'To illustrate these methods, we combine them to give monad mM1 the value 3 and pass it to monad mM2 which adds 7 to it' ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style4},
               'mM1.ret(3).bnd(val => mM2.ret(val + 7))' ),
      h('p', 'This might be a good time to note that bnd is the right identity; that is m.bnd(m.ret) = m for all monads m. This follows from the definition of bnd which yields m.bnd(m.ret) = m.ret(mx, m, ...args) which, since ret takes one argument, amounts to m.ret(m.x) which, by the definition of ret, assigns the value x to m. Since x was already the value of m, nothing changed and the theorem is proved. It is also trivially true that for all monads m, m.ret(m.x) = m.' ),
      h('p','The associative property m.bnd(f).bnd(g) = m.bnd(v => f.bnd(g) also holds for all monads m and functions g and f mapping values to monads. On the left, the monad f returns is implicit but it must be specified on the right. We will illustrate this using the functions add and cube, which are defined as follows: ' ),
      h('div', 'cube = (x,mon) => {mon.ret(x*x*x); return mon;};' ),
      h('div', 'add = (x,mon,y) => {mon.ret(x + y); return mon;};' ),
      h('br', ),
      h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: update5 },  style: style5},
             'mM1.bnd(add, 5).bnd(cube);' ),
      h('br', ),
      h('br', ),
      h('button', {on: { mouseenter: update3e, mouseleave: update3l, click: update },  style: style0},
             'mM2.bnd(v => add(v, mM2, 5).bnd(cube));' ), 
      h('p', 'In the second case, mM2 sends its value to a composite function, while in the first example, mM1 calls bnd on f and subsequently calls bnd on g.' ),
          h('br'),
        ] ), 
      h ('div',{style: { width: '30%', position: 'fixed', top: '20px', right: '15px', color: '#CCFDDA'}},
        [
          h('br'),
          h('span', 'mM1.x: '),
          h('span', {style: {color: '#FF000A', marginLeft: '7px', marginBottom: '2px' }}, '  ' + name1),
          h('br'),
          h('span', 'mM2.x: '),
          h('span', {style: {color: '#FF000A', marginLeft: '7px', marginBottom: '2px' }}, '  ' + name2),
          h('br'),
          h('div', {style: {height: '300px'}} )
        ] )        
    ] )
}  


function update(event) {
  mM2.bnd(v => add(v,mM2,5).bnd(cube));
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2(event) {
 mM1.ret(3).bnd(val => mM2.ret(val + 7));
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5(event) {
  mM1.bnd(add, 5).bnd(cube);
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3e(event) {
  style0 = style1;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3l(event) {
  style0 = style2;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4e(event) {
  style4 = style1;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4l(event) {
  style4 = style2;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5e(event) {
  style5 = style1;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5l(event) {
  style5 = style2;
  const newVnode = view(mM1.x, mM2.x);
  oldVnode = patch(oldVnode, newVnode);
}


oldVnode = patch(oldVnode, view(mM1.x, mM2.x));





