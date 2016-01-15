
return a >>= f  =  f a
m.ret(a).bnd(f) = f(a)
M1.ret(4).bnd(cube) === cube(4,mM1)

m >>= return  =  m
m.bnd(m.ret) = m
mM1.bnd(mM1.ret) === mM1

m >>= (\x -> f x >>= g)  =  (m >>= f) >>= g
m.bnd(val => f(val).bnd(g) = m.bnd(f).bnd(g)
mM1.bnd(val => add(mM1.x, mM1, 1).bnd(cube)) === mM1.bnd(add,1).bnd(cube)

m >>= (\x -> h k x == (m >> k) >> h
m.bnd(val => h(k(val)) = m.bnd(k).bnd(h)
mM1.bnd(val => cube(mM1.x, add(mM1.x, mM1, v).bnd(cube)) === mM1.bnd(add,1).bnd(cube)

return a >>= k  ==  k a
m >>= return  ==  m
m >>= (\x -> k x >>= h)  ==  (m >>= k) >>= h
m >>= (\x -> h k x == (m >> k) >> h
