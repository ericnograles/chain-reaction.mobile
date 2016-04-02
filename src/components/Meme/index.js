import React, {
  View,
  Text,
  Component,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

var window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  memeImage: {
    height: window.width,
    width: window.width
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Meme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={[styles.memeImage]} source={{uri: this.props.url}} />
      </View>
    );
  }
}