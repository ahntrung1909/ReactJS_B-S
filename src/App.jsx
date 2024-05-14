import HomePage from './routes/HomePage/homePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './routes/listPage/listPage.jsx';
import Layout from './routes/layout/layout.jsx';
import SinglePage from './routes/singlePage/singlePage.jsx';
import ProfilePage from './routes/Profile/profilePage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/list',
          element: <ListPage></ListPage>
        },
        {
          path: '/:id',
          element: <SinglePage></SinglePage>
        },
        {
          path: '/profile',
          element: <ProfilePage></ProfilePage>
        }
      ]
    }
  ]);

  return(
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
