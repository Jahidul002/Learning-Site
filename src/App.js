import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../src/Root/Root'
import CourseDetails from '../src/compo/CourseDetails.jsx'
import Home from './compo/Home';
import CoureseData from './compo/CoureseData';
import SecondHome from './compo/SecondHome';
import Login from './compo/Login';
import Register from './compo/Register';
import PrivateRoute from './compo/PrivateRoute';


function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'courses',
      element: <Root></Root>,
      loader: () => fetch('http://localhost:5000/courses'),
      children: [
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/courses'),
          element: <SecondHome></SecondHome>
        },
        {
          path: '/courses/:id',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/courses/${params.id}`)
          },
          element: <CourseDetails></CourseDetails>,
        }
      ]
    },
    {
      path: 'single/:id',
      loader: async ({ params }) => {
        return fetch(`http://localhost:5000/courses/${params.id}`)
      },
      element: <PrivateRoute><CoureseData></CoureseData></PrivateRoute>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
