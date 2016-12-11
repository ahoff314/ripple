/**
 * Created by Ahoff on 12/8/2016.
 */

'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    // server: 'wss://s1.ripple.com' // Public rippled server
    server: 'wss://s.altnet.rippletest.net:51233'  // Testnet Server
});
api.connect().then(() => {
    /* begin custom code ------------------------------------ */
    const myAddress = 'rDzcGGzpqa5opMom78DAsLqDaMsjT8UNn7';

    console.log(myAddress);

    console.log('Getting settings info for', myAddress);
    return api.getSettings(myAddress);

}).then(info => {
    console.log(info);
    console.log('getAccountInfo done');

    /* end custom code -------------------------------------- */
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);