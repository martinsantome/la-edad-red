//var scrape = require('./website-scraper/index.js');
var scrape = require('website-scraper');

scrape({
  urls: ['http://info.cern.ch/hypertext/README.html'],
  directory: './spider-results',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'}
  ],
  onResourceSaved: (resource) => {
  	console.log(`Resource ${resource} was saved to fs`);
  },
  onResourceError: (resource, err) => {
  	console.log(`Resource ${resource} was not saved because of ${err}`);
  },
  recursive: true,
  maxRecursiveDepth: 100,
  maxDepth: 100,
  filenameGenerator: 'bySiteStructure',
}).then(console.log).catch(console.log);

