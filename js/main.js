"use strict";
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
  marginLeft: '12px', fontSize: '22px' };
var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '22px' };
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '22px', textAlign: 'left' };
var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '22px' };
var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '22px' };
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

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function view(m1, m2, m3, m4, m5, m6, m7, m8, mI1, mI2) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '24px'}}, 
    [ h('h1', {style: {textAlign: 'center', color:  '#BBFFFF'}}, 'Fun With Monads'),
      h('span', 'The code for this single-page site is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk/fun-with-monads'}, style: {color: '#EECCFF'}}, 'fun_with_monads' ),
      h('span', ' If pressing F12 switches your browser to a console, I think you will find that you have access to all of the monads and functions being used in this presentation, Try entering "mM1.ret("Hello world")" on the command like. Press F12 again and roll over (don\'t click it) the REFRESH button at the bottom of the right column. When the column gets updated, the new value of mM1.x that you created should appear. '  ),
     h('p', 'This project centers around a simple monad constructor called "Monad", and a more elaborate one that can take control over the order of execution of monad trees, wait for asynchronous events to complete, and interactively step through sequences. Here is how the Monad class is defined:'),
      cow.monad,
      h('h3', {style: {textAlign: 'center', color: '#BBFFFF'}}, 'Why I Call Them "Monads"' ),
      h('p', 'All possible instances of Monad and the isomorphisms among them defined by the method "bnd" in combination with functions of the form f = (v,mon) => {alter the values of monads; return a monad } seem to constitute a category theory monad. They obey the Haskell monad laws. The method "ret" makes any Javascript value into a monad with that value, and "ret"  is the left and right identity, as we will demonstrate later. Chains of monad operations using the bnd method are commutative; that is, ' ),
      h('pre', {style: {color: '#87CEFA', fontSize: '20px' }}, `m.bnd(f).bnd(g) is equivalent to m.bnd(x => f(g(x)).`  ),
      h('p', ' For example, '   ),
      h('pre', {style: {color: '#87CEFA', fontSize: '20px'  }},  `mM3.bnd(x => cube(x, add(x, mM3, 3))) === mM3.bnd(add,3).bnd(cube)  // true `  ),
      h('p', 'returns "true" for arbitrary values of mM3.x. Note that when we use "add" as a stand-alone function rather than an argument in the "bnd" method, we have to explicitly specify the value and the monad upon which add operates. ' ),
      h('h3', {style: {textAlign: 'center', color:  '#BBFFFF' }}, 'Lambdas' ),
      h('p', 'The method "bnd" is designed to take a function as its first argument. The first two arguments provided to that function are the value of the calling monad and the calling monad itself. For example, "cube" is defined as: '),
      h('pre', {style: {color: '#87CEFA', fontSize: '20px'  }}, 
`cube = function cube(x, mon) {
  mon.ret(x * x * x);
  return mon;
}`  ),
      h('p', 'The calling monad\'s value and the calling monad are implicit, so we don\'t have to write "mM4.bnd(cube, mM4.x, mM4)". We cam just write "mM4.bnd(cube)". Let m be any monad with any value v (in other words, m.x = v), and let f some function that takes only one argument. "m.bnd(f)" returns f(m.x, m, ...args) which is just f(m.x) because f takes only the first argument, ignoring all the rest. By the definition of "v" above, f(m.x) = f(v), so m.bnd(f) = f(v). Let\'s set m\'s value to 3 and cube it, you get the number 27. You can verify this by pressing F12 and entering "mM1.ret(3).bnd(k => k*k*k)". "typeof mM1.ret(3).bnd(k => k*k*k)" returns "number". Not real exciting, but wait! That nameless function looks like a good old-fashioned lambda. Let\'s try something a little more elaborate.' ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style4},
               `mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))`  ),
      h('p', 'Functions made for bnd are defined to operate on the calling monad\'s value and the monad itself, even though the value of any monad m is available inside the function body as m.x. The extra "x, " keystrokes needed to define functions for the bnd method seemsa small price to pay for the convenience of being able to pull the values of monads into anonymous functions anywhere along a chain of computations. Remember, a monad\'s value can be a deeply nested array of arrays, nested objects, and functions. '  ),   
      h('p', 'ret is the right identity on monads; that is m.bnd(m.ret) = m for all monads m. m.bnd(m.ret) = m.ret(m.x, m, ...args) derives directly from the definition of bnd. Since ret takes one argument, the right side of the equation can be simplified to m.ret(m.x) which, by the definition of ret, assigns the value m.x to m. Since m.x was already the value of m, m did not change, establishing that ret is the right identity. ret can be construed to be the left identity since m.ret(m.x) = m. That follows directly from the definitions of Monad and ret. Any monad m has value m.x and ret(m.x) give m the value m.x, which it already had. ' ),
      h('h3', {style: {textAlign: 'center', color: '#BBFFFF'}}, 'Next: Websocket interractions with MonadIter instances. ' ),
      h('span','The open source code for this page is at '  ),  
      h('a', {props: {href: 'https://github.com/dschalk/fun-with-monads'}, style: {color: '#EECCFF'}}, 'fun_with_monads' ),
      h('span', '  Demonstrations of this and the next pages in "Javascript Monads" project can be found at ',   ),
      h('a', {props: {href: 'http://schalk.net'}, style: {color: '#EECCFF'}}, 'schalk.net' ),
      h('br', ),   
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
  mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))
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

function updateTest(event) {
  mM8.ret('test');
  mM2.ret(mM8.x);
  mM3.fmap(_ => mM8.x);
  mM8.bnd(mM4.ret);
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

function update7e(event) {
  style7 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update7l(event) {
  style7 = style2;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update8e(event) {
  style7 = style1;
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update8l(event) {
  style7 = style2;
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

function updateEvent(event) {
  mMI2.ret(event.data);
  console.log(event);
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x));


