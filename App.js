
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router} from './src/components/Router';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}


