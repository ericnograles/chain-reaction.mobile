# Assumptions: NVM installed
# Add a reference to nvm
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Baseline to Node LTS
nvm install 4.3.1

# Global prerequisites
npm install -g npm3

# Globals for npm3
npm3 install -g react-native-cli

# Local NPM install
npm3 install

# Launch iOS, Packager, and Nodemon to watch for changes in chain-reaction.common
trap 'kill %1; kill %2' SIGINT
(sleep 2 & react-native run-ios) & ./node_modules/react-native/packager/packager.sh start --reset-cache & nodemon --watch ../chain-reaction.common/src --watch ../chain-reaction.common/index.js --exec "cp -r ../chain-reaction.common/src/ ./chain-reaction.common/"
