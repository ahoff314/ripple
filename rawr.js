/**
 * Created by Ahoff on 12/8/2016.
 */

console.log("TRIPPLE");

'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    server: 'wss://s1.ripple.com' // Public rippled server
});
api.connect().then(() => {
    /* begin custom code ------------------------------------ */
    const myAddress = 'rNPRNzBB92BVpAhhZr4iXDTveCgV5Pofm9';

    console.log(myAddress);

console.log('getting account info for', myAddress);
return api.getAccountInfo(myAddress);

}).then(info => {
    console.log(info);
console.log('getAccountInfo done');

/* end custom code -------------------------------------- */
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);