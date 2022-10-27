import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../src/Root/Root'
import CourseDetails from '../src/compo/CourseDetails.jsx'
import Home from './compo/Home';
import CoureseData from './compo/CoureseData';
import SecondHome from './compo/SecondHome';
import Login from './compo/Login';
import Register from './compo/Register';
import PrivateRoute from './compo/PrivateRoute';
import Blog from './compo/Blog';
import Faq from './compo/Faq';


function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'courses',
      element: <Root></Root>,
      loader: () => fetch('https://learning-site-server.vercel.app/courses'),
      children: [
        {
          path: '/courses',
          loader: () => fetch('https://learning-site-server.vercel.app/courses'),
          element: <SecondHome></SecondHome>
        },
        {
          path: '/courses/:id',
          loader: async ({ params }) => {
            return fetch(`https://learning-site-server.vercel.app/courses/${params.id}`)
          },
          element: <CourseDetails></CourseDetails>,
        }
      ]
    },
    {
      path: 'single/:id',
      loader: async ({ params }) => {
        return fetch(`https://learning-site-server.vercel.app/courses/${params.id}`)
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
    },
    {
      path: 'blog',
      element: <Blog></Blog>
    },
    {
      path: 'faq',
      element: <Faq></Faq>
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
