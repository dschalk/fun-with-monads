#David Schalk's Javascript Monads Project

This repository contains code from early experiments along the way to the [Maintained Code](http://github.com/dschalk/monads-for-functional-javascript). Examples, detailed explanations, and discussions of key features are maintained and updated in the online project at [http://schalk.net:3055](http://schalk.net:3055). Because of ongoing feature additions and refactoring, the Github README.md files often lag behind the online presentation. 

The following code is in an ES5 script in the index.html file. If you open up your browser console after loading index.html, you can play with the monads and the functions there. The online code shows examples of inserting lambdas (anonymous inline functions) in monad chains.

```javascript
 'use strict'

  class Monad {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.ret = a => {
        this.x = a;
        return this;
      };

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args));
        return mon;

      };
    }
  };

  var mM11 = new Monad(0);
  var mM12 = new Monad(0);
  
  let fmap = (f, mon, ...args) => {
    mon.ret( f(mon.x, ...args));
    return mon;
  }

  let bnd = (f, mon, ...args) => {
    return f(mon.x, mon, ...args);
  }

  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;

        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);
          self.flag = false;
          return self;
        }

        if (p[1] === 'ret') {
          self.x = p[2];
          self.flag = false;
          return self;
        }

        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          self.flag = false;
          return p[3];
        }
     }

      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, self, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }

      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.flag === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.flag === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }

      this.ret = a => { 
        let self = this;
          if (self.flag === false) {
            self.x = a;
          }
          if (self.flag === true) {
          self.p = [self.id, 'ret', a];
          return self;
          }
        this.flag = false;
        return this;
      }
    }}
 
  let M = a => new Monad(a);
  let mM1 = M(0);
  let mM2 = M(0);
  let mM3 = M(0);
  let mM4 = M(0);
  let mM5 = M(0);
  let mM6 = M(0);
  let mM7 = M(0);
  let mM8 = M(0);
  let mM9 = M(0);
  let mM10 = M(0);
  let mM11 = mM11;
  let mM12 = mM12;

  let MI = (a,b)  => new MonadIter(a,b);
  let mMI1 = MI(0,'mMI1');
  let mMI2 = MI(0,'mMI2');
  let mMI3 = MI(0,'mMI3');
  let mMI4 = MI(0,'mMI4');
  let mMI5 = MI(0,'mMI5');
  let mMI6 = MI(0,'mMI6');

  let let doub = (x,mon) => {
    mon.ret(x+x);
    return mon;
  };

  let square = (x,mon) => {
    mon.ret(x*x);
    return mon;
  };

  let tripple = (x,mon) => {
    mon.ret(x+x+x);
    return mon;
  };

  let cube = (x,mon) => {
    mon.ret(x*x*x);
    return mon;
  };

  let add = (x,mon,y) => {
    mon.ret(x + y);
    return mon;
  }

  let mult = (x,mon,y) => {
    mon.ret(x * y);
    return mon;
  }

  let lg = '';

  let log = (x,mon,y) => {
    lg = y;
    return mon;
  }

  let fnc = (a,b) => a.b;

  let branch = (x,mon,a) => {
    return mon;
  }

  let branchT = (x,mon,a) => {
    setTimeout(function() {
      return mon;
    },500  )
  }

  let rand = (a,b) => {
      return Math.floor(Math.random() * (a - b)) + b;
  }

  let ran = (x,mon) => {
    mon.ret(Math.floor(Math.random() * (-4) + 5));
    return mon;
  }

  let chance = (x,mon) => {
    let a = rand(1,5);
    let b = rand(1,5);
    let c = rand(1,5);
    mM1.ret(a);
    mM2.ret(b);
    mM3.ret(c);
    if (a === b && a===c) {
      mM4.ret('Winner! Three of a kind');
      return mon;
    }
    if (a === b || a ===c || b ===c) {
      mM4.ret('Pair. Try for three');
      return mon;
    }
    mM4.ret('Zilch. Don\'t give up now.');
    return mon;
  }

  let ch = (x,mon,a,b,c) => {
    if (a === b && a===c) {
      mon.ret('Winner! Three of a kind');
      return mon;
    }
    if (a === b || a ===c || b ===c) {
      mon.ret('Pair. Try for three');
      return mon;
    }
    mon.ret('Zilch. Don\'t give up now.');
    return mon;
  }

  let jackpot = (x,mon) => {
    let k = 1;
    for (k;k<5;k+=1) {
      if (x === [k,k,k,k,k,k]) {
        mM10.ret("Jackpot!");
        return mon;
      }
    }
    mM10.ret("No jackpot time");
    return mon;
  }

  let cu = x => x*x*x;
  let sq = x => x*x;
  let du = x => x+x;
  let ad = (a,b) => a + b;
  let id = x => x;
  let lo = x => console.log(x);

  let delay = (x,mon) => {
    return new Promise( function(resolve,reject){
        setTimeout( resolve, 2000 );
    } );
  }

  let increment = () => {
  VAL = VAL + 1;
  }
```






