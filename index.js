const htm = require('htm');
const h = htm.bind(require('vhtml'));

let main = h`<div class="">hi</div>`
document.querySelector('#controls').innerHTML = main
