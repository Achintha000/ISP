const util  = require('util');
const client = require('shodan-client');
 
const searchOpts = {
  facets: 'port:100,country:100',
  // minify: false,
};
client
  .search('asterisk port:5060', 'vCQvcONJx9i0FeltEFBrWHv8sffeUevJ', searchOpts)
  .then(res => {
    console.log('Result:');
    console.log(util.inspect(res, { depth: 6 }));
  })
  .catch(err => {
    console.log('Error:');
    console.log(err);
  });