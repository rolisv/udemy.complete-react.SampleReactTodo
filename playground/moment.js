const moment = require('moment');

const now = moment()
console.log(now);
console.log('now formatted:', now.format());
console.log('now timestamp:', now.unix());

const timestamp = 1479362579
const m = moment.unix(timestamp)
console.log('moment from timestamp:', m.format());

console.log('formatted moment from timestamp:', m.format('MMMM Do, YYYY @ h:mm A'));
