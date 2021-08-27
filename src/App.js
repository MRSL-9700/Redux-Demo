import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{margin: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Redux Demo - App</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
