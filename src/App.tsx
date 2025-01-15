import router from '@/router';
import {store} from '@/store/store';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import './App.css';

import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </ThemeProvider>
  </Provider>
);

export default App;
