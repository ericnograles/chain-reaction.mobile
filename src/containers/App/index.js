import React, {
  View,
  Text,
  Component,
  StyleSheet,
  Navigator
} from 'react-native';

import StartScreen from '../StartScreen';

const styles = StyleSheet.create({
  nav: {
    flex: 1
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  renderScene(route, nav) {
    if (route.component) {
      var props = { navigator: nav, route: route };
      if (route.props) {
        Object.assign(props, route.props);
      }
      return React.createElement(route.component, props);
    }
  }
  
  render() {
    return (
      <Navigator
        title="Chain Reaction"
        style={styles.nav}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        initialRoute={{
          component: StartScreen, title: 'Login'
        }}
      />
    );
  }
}