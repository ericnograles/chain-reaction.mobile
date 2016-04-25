import React, {
  View,
  Text,
  Component,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

import * as common from '../../../chain-reaction.common';

var window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    height: window.width,
    width: window.width
  },
  title: {
    paddingTop: 25,
    fontSize: 32
  },
  formContainer: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingTop: 10
  },
  formContainerLast: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingTop: 25,
  },
  picture: {
    height: window.width,
    width: window.width
  },
  formLabel: {
    height: 20,
    color: '#fff'
  },
  formText: {
    height: 40,
    width: window.width - 40,
    backgroundColor: '#1f2429',
    borderWidth: 1,
    borderColor: 'gray',
    color: '#fff'
  },
  loginButton: {
    backgroundColor: '#a60707',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: .2,
    shadowOffset: {height: 5},
    shadowRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    width: window.width - 40
  }
});

export default class Login extends Component {
  
  render() {
    var { handleLogin, handleEmail, handlePassword, user } = this.props;
    var loginButton;
    if (user.status === 'authenticating') {
      loginButton =
        <TouchableHighlight style={[styles.loginButton]}>
          <Text style={[{color: '#fff'}]}>LOGGING IN...</Text>
        </TouchableHighlight>;
    } else {
      loginButton =
        <TouchableHighlight style={[styles.loginButton]} onPress={handleLogin}>
          <Text style={[{color: '#fff'}]}>ENTER</Text>
        </TouchableHighlight>;
    }
    
    return (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Chain Reaction</Text>
        <View style={[styles.formContainer]}>
          <Text style={[styles.formLabel]}>Email</Text>
          <TextInput style={[styles.formText]}
                     onChangeText={handleEmail}>
          </TextInput>
        </View>
        <View style={[styles.formContainer]}>
          <Text style={[styles.formLabel]}>Password</Text>
          <TextInput style={[styles.formText]}
                     secureTextEntry={true}
                     keyboardType={'email-address'}
                     onChangeText={handlePassword}>
          </TextInput>
        </View>
        <View style={[styles.formContainerLast]}>
          {loginButton}
        </View>
      </View>
    );
  }
}