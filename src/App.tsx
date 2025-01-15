import router from '@/router';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </Provider>
  );
}

export default App;
