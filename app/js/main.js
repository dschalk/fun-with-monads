"use strict";
import { html } from 'snabbdom-jsx';
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import cow from './cow.js';

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
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };
var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px' };
var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px' };
var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function view(m1, m2, m3, m4, m5, m6, m7, m8, mI1, mI2) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%'}}, 
    [ h('h1', {style: {textAlign: 'center', color: '#FF7F50'}}, 'Fun With Monads'),
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
     h('p', 'This project has a simple monad constructor called "Monad", and a more elaborate one that can take control over the order of execution of monad trees, and can also facilitate iterating through sequences step by step. I\ll start with the simple one. Here is it\s definition:'),
      cow.monad,
      h('p', 'Each monad has a value "x", which can be any javascript value, including array, object, or even the monad which holds it. A monad whose value is itself seems pretty useless since its value is an infinitely telescoping monad, within a monad, within ... Creating it, say with m.ret(m) for some monad m, doesn\'t throw an error. Constraints, such as enforcing types or immutability, might come later. Right now the monads provide a convenient way to process information through chains and trees of chains. ' ),
      h('p', 'To illustrate these methods, we combine them to give monad mM1 the value 3 and pass it to monad mM2 which adds 7 to it' ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style4},
               'mM1.ret(3).bnd(v => mM2.ret(v + 7))' ),
      h('p', 'bnd is the right identity on monads; that is m.bnd(m.ret) = m for all monads m. m.bnd(m.ret) = m.ret(mx, m, ...args) derives directly from the definition of bnd. Since ret takes one argument, the right side of the equation can be simplified to m.ret(m.x) which, by the definition of ret, assigns the value m.x to m. Since m.x was already the value of m, m did not change, establishing that ret is the right identity. ret is also the left identity; that is, m.ret(m.x) = m. That follows directly from the definition of m' ),
      h('p','The associative property m.bnd(f).bnd(g) = m.bnd(v => f.bnd(g) also holds for all monads m and functions g and f mapping values to monads. On the left, the monad f returns is implicit but it must be specified on the right. We will illustrate this using the functions add and cube, which are defined as follows: ' ),
      h('pre', {style: {color: '#AFEEEE'}}, `
  cube = (x,mon) => {mon.ret(x*x*x);
    return mon;
  };` ),
      h('pre', {style: {color: '#AFEEEE'}}, `
  add = (x,mon,y) => {mon.ret(x + y);
    return mon;
  };` ),
      h('br', ),
      h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: update5 },  style: style5},
             'mM1.bnd(add, 5).bnd(cube);' ),
      h('br', ),
      h('br', ),
      h('button', {on: { mouseenter: update3e, mouseleave: update3l, click: update },  style: style0},
             'mM2.bnd(v => add(v, mM2, 5).bnd(cube));' ), 
      h('p', 'In the second case, mM2 sends its value to a composite function, while in the first example, mM1 calls bnd on f and subsequently calls bnd on g.' ),
      h('h2', {style: {textAlign: 'center', color: '#FF7F50'}}, 'Ordinary Functions' ),
      h('p', 'bnd is designed to operate on functions that map values to monads. Any monad can be supplied to the stand-alone function. The bnd method returns the calling monad. The bnd method returns whatever its first argument returns, possibly in conjunction with other optional arguments. In the simplest cases, m.bnd(f) returns f(m.x).So if m is a monad with a value of 5 and f = x => x*x, m.bnd(f) = f(m.x) = f(5) = 25. The result is not a monad, so no further binding is possible, but any function that takes arguments of type m.x for some monad m is a valid argument for m.bnd, which returns f(m.x).' ),  
      h('p', 'fmap is designed to take an ordinary function as a first argument and return the monad specified in the second argument. If no second argument is provided, fmap return the calling monad. fmap doesn\'t automatically pass the calling monad\'s value down the chain, but that is not an impediment. '),

      h('p', 'GOAL: Use the ordinary function "cu" (below) to Pass mM1\'s value to mM2 and cube it, leaving mM1\'s value unchanged. ' ),
      h('pre', {style: {color: '#AFEEEE'}}, `cu = x => x*x*x` ),
               
      h('p', 'First, we will do it with a little help from bnd.' ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2B }, style: style4},
               `mM1.ret(3).bnd(v => mM2.ret(v).fmap( cu, mM2 ))`  ),  
      h('p', 'Next, we accomplish the same thing without any help from bnd.'  ),
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: update2B2 }, style: style6},
               `mM3.ret(3).fmap( _ => {var a = mM3.x; mM4.ret(a).fmap(cu); return a})`  ), 
      h('p', 'But defining the specialized function "cube" wasn\'t much work, and the following code is ever so much more elegant:'  ),

      h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: update2B3 }, style: style5},
                         `mM5.ret(3).bnd(mM6.ret).bnd(cube) `  ), 
      h('h2', {style: {textAlign: 'center', color: '#FF7F50'}}, 'MonadIter' ),
      h('p', 'Here is the other constructor in this project: '  ),
      cow.monadIter,
      h('p', 'Click the next button to execute the indicated code, then click the mMI2.release() button four times.'  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4},
            [ cow.steps ],  ),
      h('br', ),    
      h('br', ),    
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6},
            [ cow.next ],   ),





      h('div', {style: {height: '300px'}} ),
        ] ), 
      h ('div',{style: { width: '30%', position: 'fixed', top: '200px', right: '15px', color: '#CCFDDA'}},
        [
          h('br'),
          h('span', 'mM1.x: '),
          h('span', {style: styleM}, '  ' + m1),
          h('br'),
          h('span', 'mM2.x: '),
          h('span', {style: styleM}, '  ' + m2),
          h('br'),
          h('span', 'mM3.x: '),
          h('span', {style: styleM}, '  ' + m3),
          h('br'),
          h('span', 'mM4.x: '),
          h('span', {style: styleM}, '  ' + m4),
          h('br'),
          h('span', 'mM5.x: '),
          h('span', {style: styleM}, '  ' + m5),
          h('br'),
          h('span', 'mM6.x: '),
          h('span', {style: styleM}, '  ' + m6),
          h('br'),
          h('span', 'mM7.x: '),
          h('span', {style: styleM}, '  ' + m7),
          h('br'),
          h('span', 'mM8.x: '),
          h('span', {style: styleM}, '  ' + m8),
          h('br'),
          h('span', 'mMI1.x: '),
          h('span', {style: styleMI}, '  ' + mI1),
          h('br'),
          h('span', 'mMI2.x: '),
          h('span', {style: styleMI}, '  ' + mI1),
          h('br'),
          h('br'),
          h('br'),
      h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                     `REFRESH`   )           
        ] )        
    ] )
}  


function update0(event) {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateR(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret)
  .bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mMI1.ret).bnd(mMI2.ret);  
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update(event) {
  mM2.bnd(v => add(v,mM2,5).bnd(cube));
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2(event) {
 mM1.ret(3).bnd(v => mM2.ret(v + 7));
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B(event) {
  mM1.ret(3).bnd(v => mM2.ret(v).fmap(cu, mM2));
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B2(event) {
  mM3.ret(3).fmap( _ => {var a = mM3.x; mM4.ret(a).fmap(cu); return a})
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B3(event) {
  mM5.ret(3).bnd(mM6.ret).bnd(cube) 
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2C(event) {
 mM1.ret(3).fmap(v => mM2.ret(v + 7)).bnd(pure);
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2D(event) {
  mM3.ret(3).fmap(x => x*x*x).bnd(pure);
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5(event) {
  mM1.bnd(add, 5).bnd(cube);
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateSteps(event) {
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateNext(event) {
  mMI2.release()  
  console.log(mM1.x, mM2.x);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3e(event) {
  style0 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3l(event) {
  style0 = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4e(event) {
  style4 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4l(event) {
  style4 = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5e(event) {
  style5 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5l(event) {
  style5 = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update6e(event) {
  style6 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update6l(event) {
  style6 = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateRe(event) {
  styleR = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateRl(event) {
  styleR = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x));





