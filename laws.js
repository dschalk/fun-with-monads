
return a >>= f  =  f a
m.ret(a).bnd(f) = f(a)
M1.ret(4).bnd(cube) === cube(4,mM1)

m >>= return  =  m
m.bnd(m.ret) = m
mM1.bnd(mM1.ret) === mM1

m >>= (\x -> k x >>= h)  =  (m >>= k) >>= h
m.bnd(val => k(val).bnd(h) = m.bnd(k).bnd(h)
mM1.bnd(val => add(val, mM1, 1).bnd(cube)) === mM1.bnd(add,1).bnd(cube)


