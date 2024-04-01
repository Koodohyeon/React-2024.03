import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Board from '../pages/Board';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/board', element: <Board />},
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;