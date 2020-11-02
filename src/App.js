import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TableContainer from './components/TableContainer/TableContainer';
import store from './redux/redux-store';



function App() {
  return ( <Provider store={store}>
             <TableContainer />
           </Provider> );
}

export default App;
