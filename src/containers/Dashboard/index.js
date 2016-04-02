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
import Welcome from '../../components/Welcome';

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { user } = this.props;

    return (
      <View style={styles.container}>
        <Welcome message="Welcome to Chain Reaction!" />
      </View>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(Dashboard);