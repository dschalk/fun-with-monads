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
      h('span', {style: {marginLeft: '18px'}},  'The code for this single-page site is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk/fun-with-monads'}, style: {color: '#EECCFF'}}, 'fun_with_monads' ),
      h('span', ' If pressing F12 switches your browser to a console, I think you will find that you have access to all of the monads and functions being used in this presentation, Try entering "mM1.ret("Hello world")" on the command like. Press F12 again and roll over (don\'t click it) the REFRESH button at the bottom of the right column. When the column gets updated, the new value of mM1.x that you created should appear. '  ),
     h('p', 'This project centers around a simple monad constructor called "Monad", and a more elaborate one that can take control over the order of execution of monad trees, wait for asynchronous events to complete, and interactively step through sequences. Here is how the Monad class is defined:'),
      cow.monad,
      h('h3',  'Why I Call Them "Monads"' ),
      h('p', 'All possible instances of Monad and the isomorphisms among them defined by the method "bnd" in combination with functions of the form f = (v,mon) => {alter the values of monads; return a monad } seem to constitute a category theory monad. I\'m just showing how the monads behave, so I\'m not inclined to prove that here. All of these monads obey the Haskell monad laws. The method "ret" makes any Javascript value into a monad with that value. "ret" is the left and right identity on monads, as we will demonstrate later while showing how the monads work. Chains of monad operations using the bnd method are commutative; that is, ' ),
      h('pre', {style: {color: '#87CEFA', fontSize: '20px' }}, `m.bnd(f).bnd(g) is equivalent to m.bnd(x => g(f(x)).`  ),
      h('p', ' For example, '   ) ,
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateDemo1 }, style: style4},
        `mM2.ret(mM1.bnd(add,1).bnd(square) === mM1.bnd(() => square(mM1.x, add(mM1.x, mM1, 1))))` ),
      h('p', 'returns "true" for arbitrary values of mM3.x. Note that when we use "add" as a stand-alone function rather than an argument in the "bnd" method, we have to explicitly specify the value and the monad upon which add operates. ' ),
      h('h3', 'Lambdas' ),
      h('p', 'The method "bnd" is designed to take a function as its first argument. The first two arguments provided to that function are the value of the calling monad and the calling monad itself. For example, "cube" is defined as: '),
      h('pre', 
`square = function square(x, mon) {
  mon.ret(mon.x * mon.x);
  return mon;
}`  ),  
      h('p', 'The calling monad\'s value and the calling monad are implicit, so we don\'t have to write "mM4.bnd(cube, mM4.x, mM4)". We cam just write "mM4.bnd(cube)". Let m be any monad with any value v (in other words, m.x = v), and let f be some function that takes only one argument. "m.bnd(f)" returns f(m.x, m, ...args) which is just f(m.x) because f takes only the first argument, ignoring all the rest. By the definition of "v" above, f(m.x) = f(v), so m.bnd(f) = f(v). Let\'s set m\'s value to 3 and cube it, you get the number 27. You can verify this by pressing F12 and entering "mM1.ret(3).bnd(k => k*k*k)". "typeof mM1.ret(3).bnd(k => k*k*k)" returns "number". Not real exciting, but wait! That nameless function looks like a good old-fashioned lambda. Let\'s try something a little more elaborate.' ),


      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style4},
               `mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))`  ),
      h('p', 'Functions made for bnd are defined to operate on the calling monad\'s value and the monad itself, even though the value of any monad m is available inside the function body as m.x. The extra "x, " keystrokes needed to define functions for the bnd method seems a small price to pay for the convenience of being able to neatly intersperse familiar-looking lambda expressions anywhere along a chain of computations. Remember, a monad\'s value can be a deeply nested array of arrays, nested objects, and functions. '  ),   
      h('p', 'Using only the definition of "Monad", it is easy to prove that for all monads m, values v, and functions f:' ),
      h('pre', 
`     m.bnd(m.ret) = m
     m.ret(v).bnd(f) === f(v, m)` ),
      h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: updateDemo2 }, style: style5},
     'mM4.ret(mM3.ret(4).bnd(cube) === cube(4, mM3))'   ),
      h('h3', 'Next: Websocket interractions with MonadIter instances. ' ),
      h('p', 'In the next section, we will see how MonadIter facilitates building lazy chains of computations that can be paused, interacted with, and possibly never executed . If the computations along the chain manipulate only monadic values, with a possible side effect only at the last link, we can use only pure (side-effect free) functions outside of the Monad and MonadIter classes. We could also refrain from mutating values outside of the monad world. What we would gain and what we would lose are hard to know from this theoretical vantage point, so in some future installment in this series, I will dig in and do some experimenting. "Fun with monads"? Well, I\'m having fun.  ' ),
        
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
                     `RE-SET`   )           
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
  update0();
}

function update(event) {
  mM2.bnd(v => add(v,mM2,5).bnd(cube));
  console.log(mM1.x, mM2.x);
  update0();
}

function update2(event) {
  mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))
  console.log(mM1.x, mM2.x);
  update0();
}

function updateDemo1() {
  mM2.ret(mM1.bnd(add,1).bnd(square) === mM1.bnd(() => square(mM1.x, add(mM1.x, mM1, 1))));
  update0();
}

function updateDemo2() {
  mM4.ret(mM3.ret(4).bnd(cube) === cube(4, mM3));
  update0();
}

function update2B(event) {
  mM1.ret(3).bnd(v => mM2.ret(v).fmap(cu, mM2));
  console.log(mM1.x, mM2.x);
  update0();
}

function update2B2(event) {
  mM3.ret(3).fmap( _ => {var a = mM3.x; mM4.ret(a).fmap(cu); return a})
  console.log(mM1.x, mM2.x);
  update0();
}

function update2B3(event) {
  mM5.ret(3).bnd(mM6.ret).bnd(cube) 
  console.log(mM1.x, mM2.x);
  update0();
}

function update2C(event) {
  mM1.ret(3).fmap(v => mM2.ret(v + 7)).bnd(pure);
  console.log(mM1.x, mM2.x);
  update0();
}

function update2D(event) {
  mM3.ret(3).fmap(x => x*x*x).bnd(pure);
  console.log(mM1.x, mM2.x);
}

function update5(event) {
  mM1.bnd(add, 5).bnd(cube);
  console.log(mM1.x, mM2.x);
  update0();
}

function updateTest(event) {
  mM8.ret('test');
  mM2.ret(mM8.x);
  mM3.fmap(_ => mM8.x);
  mM8.bnd(mM4.ret);
  console.log(mM1.x, mM2.x);
  update0();
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
  update0();
}

function updateNext(event) {
  mMI2.release()  
  console.log(mM1.x, mM2.x);
  update0();
}

function update3e(event) {
  style0 = style1;
  update0();
}

function update3l(event) {
  style0 = style2;
  update0();
}

function update4e(event) {
  style4 = style1;
  update0();
}

function update4l(event) {
  style4 = style2;
  update0();
}

function update5e(event) {
  style5 = style1;
  update0();
}

function update5l(event) {
  style5 = style2;
  update0();
}

function updateRe(event) {
  styleR = style1;
  update0();
}

function updateRl(event) {
  styleR = style2;
  update0();
}

function updateEvent(event) {
  mMI2.ret(event.data);
  console.log(event);
  update0();
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x));


