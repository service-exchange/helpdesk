// ===================================================
// FOR PRODUCTION
// Tele-CMS - framework for Node.js platform
// https://www.telecms.network
// ===================================================

const options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Tele-CMS' };
// options.sleep = 3000;

require("total.js").http("release", options);
// require('total.js').cluster.http(5, 'release', options);
