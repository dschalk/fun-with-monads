

var doub = function doub(x, mon) {
  mon.ret(x + x);
  return mon;
};

var square = function square(x, mon) {
  mon.ret(x * x);
  return mon;
};

var tripple = function tripple(x, mon) {
  mon.ret(x + x + x);
  return mon;
};

function cube(x, mon) {
  mon.ret(x * x * x);
  return mon;
};

var add = function add(x, mon, y) {
  mon.ret(x + y);
  return mon;
};

var mult = function mult(x, mon, y) {
  mon.ret(x * mon.y);
  return mon;
};

var lg = '';

var log = function log(x, mon, y) {
  lg = y;
  return mon;
};

var fnc = function fnc(a, b) {
  return a.b;
};

var branch = function branch(x, mon, a) {
  return mon;
};

var branchT = function branchT(x, mon, a) {
  setTimeout(function () {
    return mon;
  }, 500);
};

var rand = function rand(a, b) {
  return Math.floor(Math.random() * (a - b)) + b;
};

var ran = function ran(x, mon) {
  mon.ret(Math.floor(Math.random() * -4 + 5));
  return mon;
};

var chance = function chance(x, mon) {
  var a = rand(1, 5);
  var b = rand(1, 5);
  var c = rand(1, 5);
  mM1.ret(a);
  mM2.ret(b);
  mM3.ret(c);
  if (a === b && a === c) {
    mM4.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mM4.ret('Pair. Try for three');
    return mon;
  }
  mM4.ret('Zilch. Don\'t give up now.');
  return mon;
};

var ch = function ch(x, mon, a, b, c) {
  if (a === b && a === c) {
    mon.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mon.ret('Pair. Try for three');
    return mon;
  }
  mon.ret('Zilch. Don\'t give up now.');
  return mon;
};

var jackpot = function jackpot(x, mon) {
  var k = 1;
  for (k; k < 5; k += 1) {
    if (x === [k, k, k, k, k, k]) {
      mM10.ret("Jackpot!");
      return mon;
    }
  }
  mM10.ret("No jackpot time");
  return mon;
};

var bench = function bench(x, mon) {
  var self = undefined;
  var k = 0;
  var j = 0;
  var d1 = new Date();
  for (k; k < 1000000; k++) {
    mM1 = new Monad(k);
  }
  mon.ret(new Date() - d1);
  return mon;
};

var bench2 = function bench2() {
  var self = undefined;
  var k = 0;
  var j = 0;
  var d1 = new Date();
  for (k; k < 1000000; k++) {
    mM2.ret(k);
  }
  resBench2 = new Date() - d1;
  setTimeout(function () {
    self.forceUpdate();
  }, 12);
};

var cu = function cu(x) {
  return x * x * x;
};
var sq = function sq(x) {
  return x * x;
};
var du = function du(x) {
  return x * x;
};
var ad = function ad(a, b) {
  return a + b;
};
var id = function id(x) {
  return x;
};
var lo = function lo(x) {
  return console.log(x);
};

var block = function block(x, mon, mon2) {
  mon2.flag = true;
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var release = function release(x, mon, mon2) {
  mon2.flag = false;
  console.log('***************************', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var delay = function delay(x, mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
};

var increment = function increment() {
  VAL = VAL + 1;
};
