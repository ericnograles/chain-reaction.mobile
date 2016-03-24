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

# Symlink the chain-reaction.common library
npm3 link chain-reaction.common

# React Native Packager
react-native start