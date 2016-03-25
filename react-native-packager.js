var path = require('path');

var common = path.resolve('../chain-reaction.common');
var mobile = path.resolve('./');
var spawn = require('child_process').spawn;

var reactNativePackager = spawn(mobile + '/node_modules/react-native/packager/packager.sh', ['--projectRoots', common + ',' + mobile]);

reactNativePackager.stdout.setEncoding('utf8');
reactNativePackager.stdout.on('data', function (data) {
  var str = data.toString();
  var lines = str.split(/(\r?\n)/g);
  console.log(lines.join(""));
});

reactNativePackager.on('close', function (code) {
  console.log('process exit code ' + code);
});
