
#Fun With Monads

running "npm run watch" watches for change and creates the browser bundle "build.js"
"npm run build" update "build.js" without running watch.

"app/index.html" contains two scripts. On top is "monad.js" and next is "build.js" In the browser, the console log gives access to some ready-made monad instances and a number of functions, including all of the functions used in this project. It is a good place to experiment with the monads. monad.js is a ES5 file that you can insert in your html code, just as I have done. 

The code for this project is running online at http://schalk.net:4001 It has explanations and running examples. I think it is the best place to get a feel for what the monads can do.

An explanation of why I call instances of Monad and MonadIter "monads" is in the online commentary for this project, and also in the commentary at https://github.com/dschalk/javascript-monads running online at http://transcendent.ninja .

The code in this repository began as a clone of https://github.com/yelouafi/snabbdom-starter. Many thanks to Yassine Elouafi for getting me up and running with snabbdom. I learned a lot from React, but it sure is good to be free from it now.



