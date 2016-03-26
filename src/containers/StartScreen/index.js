import React, {
  View,
  Text,
  Component,
  StyleSheet,
  PropTypes,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import * as common from 'chain-reaction.common';
import Login from '../../components/Login';

var window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: window.height,
    width: window.width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(email) {
    this.props.dispatch(common.actions.keyPressEmail(email))
  }

  handlePassword(password) {
    this.props.dispatch(common.actions.keyPressPassword(password));
  }

  handleLogin() {
    const { dispatch, email, password } = this.props;
    dispatch(common.actions.requestLogin(email));
    dispatch(common.actions.login(email, password));
  }

  render() {
    const { email, password, user } = this.props;
    const hasLoginError = this.props.user.error;

    return (
      <View style={styles.container}>
        <Login email={email}
                   password={password}
                   user={user}
                   handleEmail={this.handleEmail}
                   handlePassword={this.handlePassword}
                   handleLogin={this.handleLogin} />
      </View>
    );
  }
}

StartScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { email, password, user } = state;
  return {
    email,
    password,
    user
  };
}

export default connect(mapStateToProps)(StartScreen);