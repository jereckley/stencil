import { setMode } from '@stencil/core';
//import 'get-root-node-polyfill/implement'

declare const Context: any;

Context['myService'] = 12;

setMode(elm => {
  return (elm as any).colormode || elm.getAttribute('colormode') || (window as any).KarmaMode
});
