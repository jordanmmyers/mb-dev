var figlet = require('figlet');
const util = require(__dirname + '/core/util');

console.log(figlet.textSync('MoonBot', {
  font: 'Small Isometric1'
}));
console.log('\nMoonBot v' + util.getVersion() + ' by MoonTrading.io\n\n');

const dirs = util.dirs();

if(util.launchUI())
  return require(util.dirs().web + 'server');

const pipeline = require(dirs.core + 'pipeline');
const config = util.getConfig();
const mode = util.gekkoMode();

pipeline({
  config: config,
  mode: mode
});

