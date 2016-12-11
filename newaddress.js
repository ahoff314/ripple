
'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    // server: 'wss://s1.ripple.com' // Public rippled server
    server: 'wss://s.altnet.rippletest.net:51233'  // Testnet Server
});
api.connect().then(() => {
    /* begin custom code ------------------------------------ */
    const myAddress = 'rDzcGGzpqa5opMom78DAsLqDaMsjT8UNn7';
    //rQhaePkkc89Afy3c1GF2YypfRjN3W7ALGz

    //console.log(myAddress);

    console.log('Generating address...');
    return api.generateAddress();

}).then(info => {
    console.log(info);
    console.log('getAccountInfo done');

    /* end custom code -------------------------------------- */
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);