import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, `  class Monad {
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
` );  
  
const monadIter = h('pre', {style: {color: '#AFEEEE' }}, `    class MonadIter {
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
    };
` );  

const steps = h('pre', {style: {color: '#AFEEEE' }}, `
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(refresh)
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.').bnd(refresh)
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going').bnd(refresh)
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more').bnd(refresh)
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret).bnd(refresh)
      ))))))))) 
` );  

const test = h('pre', {style: {color: '#AFEEEE' }}, 
`mM8.ret('test');
mM2.ret(mM8.x);
mM3.fmap(_ => mM8.x);
mM8.bnd(mM4.ret);` );  

const next = h('div', {style: {fontSize: '28px', color: 'FFFF00'}}, 'mMI2.release()'  );


export default {monad, monadIter, steps, next, test};


















