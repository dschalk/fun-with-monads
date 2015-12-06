(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var monad = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class Monad {\n    constructor(z) {\n\n      this.x = z;\n\n      this.bnd = (func, ...args) => {\n        return func(this.x, this, ...args);\n      };\n\n      this.ret = a => {\n        this.x = a;\n        return this;\n      };\n\n      this.fmap = (f, mon = this, ...args) => {      \n        mon.ret( f(mon.x, ...args));\n        return mon;\n\n      };\n    }\n  };\n');

var monadIter = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '    class MonadIter {\n    constructor(z,g) {\n\n        this.x = z;\n        this.id = g;\n        this.flag = false;\n        this.p = [];\n  \n        this.block = () => {\n            this.flag = true;\n            return this;\n        }\n\n        this.release = () => {\n            let self = this;\n            let p = this.p;\n  \n            if (p[1] === \'bnd\') {\n                p[2](self.x, self, ...p[3]);\n                self.flag = false;\n                return self;\n            }\n  \n            if (p[1] === \'ret\') {\n                self.x = p[2];\n                self.flag = false;\n                return self;\n            }\n  \n            if (p[1] === \'fmap\') { \n                p[3].ret(p[2](p[3].x, ...p[4]));\n                self.flag = false;\n                return p[3];\n            }\n        }\n    };\n');

var steps = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)\n     .bnd(() => mM1.ret(\'Click the mMI2.release() button to proceed\')\n     .bnd(refresh)\n     .bnd(() => mMI2.block()\n     .bnd(() => mM2.ret(\'Click it again.\').bnd(refresh)\n     .bnd(() => mMI2.block()\n     .bnd(() => mM3.ret(\'Keep going\').bnd(refresh)\n     .bnd(() => mMI2.block()\n     .bnd(() => mM4.ret(\'One more\').bnd(refresh)\n     .bnd(() => mMI2.block()\n     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)\n     .bnd(mM4.ret).bnd(refresh)\n      ))))))))) \n');

var next = (0, _snabbdomH2['default'])('div', { style: { fontSize: '28px', color: 'FFFF00' } }, 'mMI2.release()');
/*
const stepsF = () =>  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
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
*/

exports['default'] = { monad: monad, monadIter: monadIter, steps: steps, next: next };
module.exports = exports['default'];

},{"snabbdom":10,"snabbdom/h":4}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdomJsx = require('snabbdom-jsx');

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var _cowJs = require('./cow.js');

var _cowJs2 = _interopRequireDefault(_cowJs);

var patch = _snabbdom2['default'].init([require('snabbdom/modules/class'), // makes it easy to toggle classes
require('snabbdom/modules/props'), // for setting properties on DOM elements
require('snabbdom/modules/style'), // handles styling on elements with support for animations
require('snabbdom/modules/eventlisteners')]);

// attaches event listeners
var oldVnode = document.getElementById('placeholder');

var style2 = { backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px' };
var style1 = { backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px' };
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%', width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };
var styleM = { color: '#FF000A', marginLeft: '13px', marginBottom: '2px' };
var styleMI = { color: '#FF000A', marginLeft: '7px', marginBottom: '2px' };
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
  return (0, _snabbdomH2['default'])('div', { style: style3 }, [(0, _snabbdomH2['default'])('div', { style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%' } }, [(0, _snabbdomH2['default'])('h1', { style: { textAlign: 'center', color: '#FF7F50' } }, 'Fun With Monads'), (0, _snabbdomH2['default'])('span', 'I have a project named "Javascript Monads" with a detailed online demo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://transcendent.ninja' }, style: { color: '#EEAAFF' } }, ' demo'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/javascript-monads' }, style: { color: '#EEAAFF' } }, ' repo'), (0, _snabbdomH2['default'])('span', '. The demonstration site functions well, but it is bloated with React. I say "bloated" because I don\'t use most of its core features. The monads I demonstrate are not in the state object, and updates are accomplished by calls to React.forceUpdate. This site uses snabbdom '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/paldepind/snabbdom' }, style: { color: '#EEAAFF' } }, 'snabbdom'), (0, _snabbdomH2['default'])('span', '. It is a pleasure to work with, but I have yet to discover or figure out how to insert markdown or override the default link color. But the links are at least visible, and the code is online with the demos at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://transcendent.ninja' }, style: { color: '#EEAAFF' } }, 'demo'), (0, _snabbdomH2['default'])('span', '. If you happen to be reading the source code, it might interest you to know that this app is running online at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net:4001' }, style: { color: '#EEAAFF' } }, 'fun_with_monads'), (0, _snabbdomH2['default'])('span', '. If you have developer mode set up in Firefox or Chrome, you will find that you have access to all of the monads and functions being used here plus more. They are in a script in the index.html file.'), (0, _snabbdomH2['default'])('p', 'This project is not about category theory. I think the monads along with all morphisms among them using "bnd" and "ret" constitute a mathematical category. I\'ll show that "ret" is the left and right identity, and that the order of evaluation of composed monads does not affect the result. That is the Haskell definition. But these monads can perform any operation allowed by javascript, so referential transparency is not enforced. A subset using only pure functions and immutable data could, and probably will be defined, but not now.'), (0, _snabbdomH2['default'])('p', 'This project has a simple monad constructor called "Monad", and a more elaborate one that can take control over the order of execution of monad trees, and can also facilitate iterating through sequences step by step. I\ll start with the simple one. Here is it\s definition:'), _cowJs2['default'].monad, (0, _snabbdomH2['default'])('p', 'Each monad has a value "x", which can be any javascript value, including array, object, or even the monad which holds it. A monad whose value is itself seems pretty useless since its value is an infinitely telescoping monad, within a monad, within ... Creating it, say with m.ret(m) for some monad m, doesn\'t throw an error. Constraints, such as enforcing types or immutability, might come later. Right now the monads provide a convenient way to process information through chains and trees of chains. '), (0, _snabbdomH2['default'])('p', 'To illustrate these methods, we combine them to give monad mM1 the value 3 and pass it to monad mM2 which adds 7 to it'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: update2 }, style: style4 }, 'mM1.ret(3).bnd(v => mM2.ret(v + 7))'), (0, _snabbdomH2['default'])('p', 'bnd is the right identity on monads; that is m.bnd(m.ret) = m for all monads m. m.bnd(m.ret) = m.ret(mx, m, ...args) derives directly from the definition of bnd. Since ret takes one argument, the right side of the equation can be simplified to m.ret(m.x) which, by the definition of ret, assigns the value m.x to m. Since m.x was already the value of m, m did not change, establishing that ret is the right identity. ret is also the left identity; that is, m.ret(m.x) = m. That follows directly from the definition of m'), (0, _snabbdomH2['default'])('p', 'The associative property m.bnd(f).bnd(g) = m.bnd(v => f.bnd(g) also holds for all monads m and functions g and f mapping values to monads. On the left, the monad f returns is implicit but it must be specified on the right. We will illustrate this using the functions add and cube, which are defined as follows: '), (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n  cube = (x,mon) => {mon.ret(x*x*x);\n    return mon;\n  };'), (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '\n  add = (x,mon,y) => {mon.ret(x + y);\n    return mon;\n  };'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: update5 }, style: style5 }, 'mM1.bnd(add, 5).bnd(cube);'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update3e, mouseleave: update3l, click: update }, style: style0 }, 'mM2.bnd(v => add(v, mM2, 5).bnd(cube));'), (0, _snabbdomH2['default'])('p', 'In the second case, mM2 sends its value to a composite function, while in the first example, mM1 calls bnd on f and subsequently calls bnd on g.'), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#FF7F50' } }, 'Ordinary Functions'), (0, _snabbdomH2['default'])('p', 'bnd is designed to operate on functions that map values to monads. Any monad can be supplied to the stand-alone function. The bnd method returns the calling monad. The bnd method returns whatever its first argument returns, possibly in conjunction with other optional arguments. In the simplest cases, m.bnd(f) returns f(m.x).So if m is a monad with a value of 5 and f = x => x*x, m.bnd(f) = f(m.x) = f(5) = 25. The result is not a monad, so no further binding is possible, but any function that takes arguments of type m.x for some monad m is a valid argument for m.bnd, which returns f(m.x).'), (0, _snabbdomH2['default'])('p', 'fmap is designed to take an ordinary function as a first argument and return the monad specified in the second argument. If no second argument is provided, fmap return the calling monad. fmap doesn\'t automatically pass the calling monad\'s value down the chain, but that is not an impediment. '), (0, _snabbdomH2['default'])('p', 'GOAL: Use the ordinary function "cu" (below) to Pass mM1\'s value to mM2 and cube it, leaving mM1\'s value unchanged. '), (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, 'cu = x => x*x*x'), (0, _snabbdomH2['default'])('p', 'First, we will do it with a little help from bnd.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: update2B }, style: style4 }, 'mM1.ret(3).bnd(v => mM2.ret(v).fmap( cu, mM2 ))'), (0, _snabbdomH2['default'])('p', 'Next, we accomplish the same thing without any help from bnd.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update6e, mouseleave: update6l, click: update2B2 }, style: style6 }, 'mM3.ret(3).fmap( _ => {var a = mM3.x; mM4.ret(a).fmap(cu); return a})'), (0, _snabbdomH2['default'])('p', 'But defining the specialized function "cube" wasn\'t much work, and the following code is ever so much more elegant:'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: update2B3 }, style: style5 }, 'mM5.ret(3).bnd(mM6.ret).bnd(cube) '), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#FF7F50' } }, 'MonadIter'), (0, _snabbdomH2['default'])('p', 'Here is the other constructor in this project: '), _cowJs2['default'].monadIter, (0, _snabbdomH2['default'])('p', 'Click the next button to execute the indicated code, then click the mMI2.release() button four times.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4 }, [_cowJs2['default'].steps]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6 }, [_cowJs2['default'].next]), (0, _snabbdomH2['default'])('div', { style: { height: '300px' } })]), (0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '200px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM1.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM2.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM3.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m3), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM4.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m4), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM5.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m5), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM6.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m6), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM7.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m7), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM8.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m8), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI1.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI2.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR }, 'REFRESH')])]);
}

function update0(event) {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateR(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mMI1.ret).bnd(mMI2.ret);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update(event) {
  mM2.bnd(function (v) {
    return add(v, mM2, 5).bnd(cube);
  });
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2(event) {
  mM1.ret(3).bnd(function (v) {
    return mM2.ret(v + 7);
  });
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B(event) {
  mM1.ret(3).bnd(function (v) {
    return mM2.ret(v).fmap(cu, mM2);
  });
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B2(event) {
  mM3.ret(3).fmap(function (_) {
    var a = mM3.x;mM4.ret(a).fmap(cu);return a;
  });
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2B3(event) {
  mM5.ret(3).bnd(mM6.ret).bnd(cube);
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2C(event) {
  mM1.ret(3).fmap(function (v) {
    return mM2.ret(v + 7);
  }).bnd(pure);
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update2D(event) {
  mM3.ret(3).fmap(function (x) {
    return x * x * x;
  }).bnd(pure);
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5(event) {
  mM1.bnd(add, 5).bnd(cube);
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateSteps(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(function () {
    return mM1.ret('Click the mMI2.release() button to proceed').bnd(function () {
      return mMI2.block().bnd(function () {
        return mM2.ret('Click it again.').bnd(function () {
          return mMI2.block().bnd(function () {
            return mM3.ret('Keep going').bnd(function () {
              return mMI2.block().bnd(function () {
                return mM4.ret('One more').bnd(function () {
                  return mMI2.block().bnd(function () {
                    return mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateNext(event) {
  mMI2.release();
  console.log(mM1.x, mM2.x);
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3e(event) {
  style0 = style1;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update3l(event) {
  style0 = style2;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4e(event) {
  style4 = style1;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update4l(event) {
  style4 = style2;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5e(event) {
  style5 = style1;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update5l(event) {
  style5 = style2;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update6e(event) {
  style6 = style1;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function update6l(event) {
  style6 = style2;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateRe(event) {
  styleR = style1;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateRl(event) {
  styleR = style2;
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x);
  oldVnode = patch(oldVnode, newVnode);
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mMI1.x, mMI2.x));

},{"./cow.js":1,"snabbdom":10,"snabbdom-jsx":3,"snabbdom/h":4,"snabbdom/modules/class":6,"snabbdom/modules/eventlisteners":7,"snabbdom/modules/props":8,"snabbdom/modules/style":9}],3:[function(require,module,exports){
"use strict";

var SVGNS = 'http://www.w3.org/2000/svg';    
var modulesNS = ['hook', 'on', 'style', 'class', 'props', 'attrs'];
var slice = Array.prototype.slice;

function isPrimitive(val) {
  return  typeof val === 'string'   ||
          typeof val === 'number'   ||
          typeof val === 'boolean'  ||
          typeof val === 'symbol'   ||
          val === null              ||
          val === undefined;
}

function normalizeAttrs(attrs, nsURI, defNS, modules) {
  var map = { ns: nsURI };
  for (var i = 0, len = modules.length; i < len; i++) {
    var mod = modules[i];
    if(attrs[mod])
      map[mod] = attrs[mod];
  }
  for(var key in attrs) {
    if(key !== 'key' && key !== 'classNames' && key !== 'selector') {
      var idx = key.indexOf('-');
      if(idx > 0)
        addAttr(key.slice(0, idx), key.slice(idx+1), attrs[key]);
      else if(!map[key])
        addAttr(defNS, key, attrs[key]);
    }
  }
  return map;

  function addAttr(namespace, key, val) {
    var ns = map[namespace] || (map[namespace] = {});
    ns[key] = val;
  }
}

function buildFromStringTag(nsURI, defNS, modules, tag, attrs, children) {

  if(attrs.selector) {
    tag = tag + attrs.selector;
  }
  if(attrs.classNames) {
    var cns = attrs.classNames;
    tag = tag + '.' + (
      Array.isArray(cns) ? cns.join('.') : cns.replace(/\s+/g, '.')
    );
  }

  return {
    sel       : tag,
    data      : normalizeAttrs(attrs, nsURI, defNS, modules),
    children  : children.map( function(c) {
      return isPrimitive(c) ? {text: c} : c;
    }),
    key: attrs.key
  };
}

function buildFromComponent(nsURI, defNS, modules, tag, attrs, children) {
  var res;
  if(typeof tag === 'function')
    res = tag(attrs, children);
  else if(tag && typeof tag.view === 'function')
    res = tag.view(attrs, children);
  else if(tag && typeof tag.render === 'function')
    res = tag.render(attrs, children);
  else
    throw "JSX tag must be either a string, a function or an object with 'view' or 'render' methods";
  res.key = attrs.key;
  return res;
}

function buildVnode(nsURI, defNS, modules, tag, attrs, children) {
  attrs = attrs || {};
  if(typeof tag === 'string') {
    return buildFromStringTag(nsURI, defNS, modules, tag, attrs, children)
  } else {
    return buildFromComponent(nsURI, defNS, modules, tag, attrs, children)
  }
}

function JSX(nsURI, defNS, modules) {
  return function jsxWithCustomNS(tag, attrs, children) {
    if(arguments.length > 3 || !Array.isArray(children))
      children = slice.call(arguments, 2);
    return buildVnode(nsURI, defNS || 'props', modules || modulesNS, tag, attrs, children);
  };
}

module.exports = {
  html: JSX(undefined),
  svg: JSX(SVGNS, 'attrs'),
  JSX: JSX
};

},{}],4:[function(require,module,exports){
var VNode = require('./vnode');
var is = require('./is');

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (arguments.length === 3) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (arguments.length === 2) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  return VNode(sel, data, children, text, undefined);
};

},{"./is":5,"./vnode":11}],5:[function(require,module,exports){
module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};

},{}],6:[function(require,module,exports){
function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};

},{}],7:[function(require,module,exports){
var is = require('../is');

function arrInvoker(arr) {
  return function() {
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { o.fn(ev); };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};

},{"../is":5}],8:[function(require,module,exports){
function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};

},{}],9:[function(require,module,exports){
var raf = requestAnimationFrame || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};

},{}],10:[function(require,module,exports){
// jshint newcap: false
/* global require, module, document, Element */
'use strict';

var VNode = require('./vnode');
var is = require('./is');

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

function emptyNodeAt(elm) {
  return VNode(elm.tagName, {}, [], undefined, elm);
}

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function createRmCb(childElm, listeners) {
  return function() {
    if (--listeners === 0) childElm.parentElement.removeChild(childElm);
  };
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules) {
  var i, j, cbs = {};
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
      if (isDef(i = data.vnode)) vnode = i;
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? document.createElementNS(i, tag)
                                                          : document.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          elm.appendChild(createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        elm.appendChild(document.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = document.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      parentElm.insertBefore(createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i = vnode.data, j;
    if (isDef(i)) {
      if (isDef(i = i.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          parentElm.removeChild(ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          parentElm.insertBefore(createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    if (isDef(i = oldVnode.data) && isDef(i = i.vnode)) oldVnode = i;
    if (isDef(i = vnode.data) && isDef(i = i.vnode)) vnode = i;
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
    } else if (oldVnode.text !== vnode.text) {
      elm.textContent = vnode.text;
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    if (oldVnode instanceof Element) {
      if (oldVnode.parentElement !== null) {
        createElm(vnode, insertedVnodeQueue);
        oldVnode.parentElement.replaceChild(vnode.elm, oldVnode);
      } else {
        oldVnode = emptyNodeAt(oldVnode);
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      }
    } else {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};

},{"./is":5,"./vnode":11}],11:[function(require,module,exports){
module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};

},{}]},{},[2]);
