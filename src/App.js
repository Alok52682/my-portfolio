import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=' bg-slate-900 fontStyle'>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
