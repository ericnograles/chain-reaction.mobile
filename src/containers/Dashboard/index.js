import React, {
  View,
  Text,
  Component,
  StyleSheet,
  PropTypes,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import * as common from '../../../chain-reaction.common';
import Welcome from '../../components/Welcome';
import Meme from '../../components/Meme';
import StartScreen from '../StartScreen';

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

  componentDidMount() {
    this.props.dispatch(common.actions.findMemes());
  }

  handleLogout() {
    this.props.dispatch(common.actions.logout());
    this.props.navigator.replace({
      component: StartScreen
    });
  }

  refreshMemes() {
    this.props.dispatch(common.actions.findMemes());
  }
  

  render() {
    const { memes, user } = this.props;
    var memeImages;
    if (memes && memes.results) {
      memeImages = memes.results.map(memeUrl => {
        return (
          <Meme url={memeUrl} />
        );
      });
    }

    return (
      <View style={styles.container}>
        <Welcome message="Welcome to Chain Reaction!" />
        {memeImages}
      </View>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { memes, user } = state;
  return {
    memes,
    user
  };
}

export default connect(mapStateToProps)(Dashboard);