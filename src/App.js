import { Provider } from 'react-redux';
import store from './redux/store';
import IndexRouting from './route/IndexRouting';
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_DBURL;

function App() {
  return (
    <>
      <Provider store={store}>
        <IndexRouting />
      </Provider>
    </>
  );
}

export default App;
