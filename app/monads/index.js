"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const patch = snabbdom.init([
    require('snabbdom/modules/class'),         
      require('snabbdom/modules/props'),          
        require('snabbdom/modules/style'),          
          require('snabbdom/modules/eventlisteners'), 
]);


var vnode = h('div', {style: {fontWeight: 'bold'}}, 'Hello world');
patch(document.getElementById('placeholder'), vnode);
