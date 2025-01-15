import router from '@/router';

import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
