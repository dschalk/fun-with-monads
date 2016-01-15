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
    [ h('h2', {style: {textAlign: 'center', color:  '#BBFFFF'}}, 'Fun With Monads - UNDER RECONSTRUCTION'),
      h('span', {style: {marginLeft: '18px'}},  'The code for this single-page site is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk/fun-with-monads'}, style: {color: '#EECCFF'}}, 'fun_with_monads' ),
      h('span', ' If pressing F12 switches your browser to a console, I think you will find that you have access to all of the monads and functions being used in this presentation, Try entering "mM1.ret("Hello world")" on the command like. Press F12 again and roll over (don\'t click it) the RE-SET button at the bottom of the right column. When the column gets updated, the new value of mM1.x that you created should appear. '  ),
      h('h3', 'This Series Is For Web Developers' ),
     h('p', 'This is not about category theory or the lambda calculus. I call my little inventions "monads", and I am sorry if that drives away that dwindling breed of developers who strive for little more than to master JQuery and whatever frameword they are using. I developed the manads to make my work easier and more satisfying, and now I am taking time out to share them with whomever is interested. ' ),
     h('p', 'This project centers around a simple monad constructor, called "Monad", and the more elaborate MonadIter constructor whose instances can take control of the order of execution of monad trees, wait for asynchronous events to complete, and interactively step through sequences. They do some things that ES6 Promises and Generators do, but in different ways, and are by no means meant as a replacement for them. ' ),
    h('p', ' Here is how the Monad class is defined:'),
      cow.monad,
      h('p', 'The monads are rich in possiblities. You\'ve heard the expression, "Garbage in, garbage out". The bnd method does not screen the functions it receives as arguments. It might return NAN or undefined; it might return nonsense; but given the right functions, bnd can support elegant solutions to problems. We will explore the nuances of fine-tuning functions for the bnd method with the following functions.' ),
      cow.functions1,
      h('p', 'Note that when the bnd method calls these functions, we do not specify the "x" and "mon" parameters of the functions because bnd provides the calling monad\'s value and its self to the function. So if we want to cube a modad\'s value, we just write ".bnd(cube), and if we want to add 1, we write ".bnd(add,1). Any extra arguments would be ignored by "cube", but "add" would fail because the number to be added would be push out of place and replaced by the value of the calling monad. So, no matter what you tried to add, the calling monad\'s value would always double. '  ),

      h('h3',  'Why Not Use "x" Instead of "mon.x" in the Bodies of Functions?' ),
      h('p', 'You might have noticed that "x" and "mon.x" are identical values in the function bodies of add and cube. Why not save key strokes and use "x". You can define the functions that way, and they will usually work but will not be so robust. Consider: ' ),
     h('pre', 
`    mM1.ret(0); 
    cube( mM1.x, (mM1.bnd(add,3) ))
    cube(0,mM1)`   ),
   h('p', 'When cube evaluates its arguments, the left value is still "0" but the right value is mM1 with a value of 3. You get 0 or 27, depending on whether cube(x,mon) cubes x or mon. We could throw in boilerplate to make mM1.x listen for changes, but "monad.bnd(add,3).bnd(cube)" is a better way to add three to a monad\'s value and then cube it. When coders get playful and creative, API\'s should be as robust as possible. One way to insure robustness is refrain from using the "x" in function(x,mon). I used Facebook\'s React for a while and felt what it must be like to work with many other coders in an organization determined to minimize bugs and security holes. So much so that I spent hours trying to include HTML in the "render" function, finally giving up and inserting multiple multiple components. It is such a relief to be using Snabbdom. I highly recommend it.'  ),
   h('h3', 'Why Have the "x" if You Don\t Use It?'  ),
   h('p', 'Click below to see the answer.'  ),
   h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateDemo1 }, style: style4}, [
    cow.lambdas] ),
   h('p', 'Or, putting it more succinctly,'  ), 
   h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style5},
               `mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))`  ),
   h('p', 'bnd sends the first argument it encounters down the chain of monads. If it sent the calling monad rather than its value, the final line in the big answer above would have to be "x.x * y.x * z.x". Hmmm. That wouldn\'t be so bad. Back to the drawing board.
      h('h3',  'How The Simple Monads Work' ),


      
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
  update0();
}

function update2(event) {
  mM1.ret(3).bnd(x => mM2.ret(4).bnd(y => mM3.ret(x + y)))
  update0();
}
// ((((((((((***********************************************************

function updateDemo1() {
    mM3.ret(2)
     .bnd(() => mM2
     .ret(7)
     .bnd(() => mM1
     .ret(3)
     .bnd(x => mM2
     .bnd(y => mM3
     .bnd(z => mM4
     .ret(x*y*z) 
     .bnd(() => mM5.ret('Lambda!')           
        ))))))
  update0();
}

function updateDemo2() {
  addL(3, mM1)
  update0();
}

function updateDemo3() {
  addR(3, mM1)
  update0();
}

function updateDemo4() {
  mM1.bnd(mM1.ret)
  update0();
}

function updateDemo5() {
  mM1.bnd(val => add(mM1.x, mM1, 1).bnd(cube))
  update0();
}

function updateDemo6() {
  mM1.bnd(add,1).bnd(cube)
  update0();
}

function updateDemo7() {
  mM1.bnd(val => add(mM1.x, mM1, v).bnd(cube))
  update0();
}

function updateDemo8() {
  mM1.bnd(add,1).bnd(cube)
  update0();
}

function updateDemo9() {

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


