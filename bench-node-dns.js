var dns = require('dns');
var Benchmark = require('benchmark');
new Benchmark('lookup www.opentable.com', function(deferred) {
  dns.lookup('www.opentable.com', function() {
    deferred.resolve();
  });
}, {'defer': true}).on('complete', function() {
  console.log(this.stats.mean * 1000 * 1000 + 'us');
}).run();
