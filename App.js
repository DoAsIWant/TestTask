
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,e} from 'redux';
import { Navigate } from './src/navigations/AppNavigation';
import { myReducer } from './src/store/reducers/myReducer';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigate></Navigate>
    </Provider>
  );
}


