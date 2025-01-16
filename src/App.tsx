import router from '@/router';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
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
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </ThemeProvider>
  </Provider>
);

export default App;
