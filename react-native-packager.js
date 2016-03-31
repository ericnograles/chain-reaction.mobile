var path = require('path');

var common = path.resolve('../chain-reaction.common');
var mobile = path.resolve('./');
var spawn = require('child_process').spawn;

// Note: We need to run the packager in this fashion because we have Redux separated into its own source, and the command below
// delineates where the common code as well as the mobile project lives
var reactNativePackager = spawn(mobile + '/node_modules/react-native/packager/packager.sh', ['start', '--projectRoots', common + ',' + mobile, '--reset-cache']);

reactNativePackager.stdout.setEncoding('utf8');
reactNativePackager.stdout.on('data', function (data) {
  var str = data.toString();
  var lines = str.split(/(\r?\n)/g);
  console.log(lines.join(""));
});

reactNativePackager.on('close', function (code) {
  console.log('process exit code ' + code);
});
